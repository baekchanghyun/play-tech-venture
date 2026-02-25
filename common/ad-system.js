/**
 * Play Tech Venture — 앱 내 광고 시스템
 * 크로스 프로모션 광고를 모든 앱에 제공하는 공통 스크립트.
 * deploy.sh에서 빌드 후 index.html에 <script> 태그로 주입한다.
 *
 * @see ADR-023
 * @see ADR-015
 */
(function() {
  // ── A. 광고 콘텐츠 레지스트리 ──
  var ADS = {
    'gacha-pop': {
      emoji: '🎰',
      title: 'Gacha Pop',
      description: '캡슐 뽑기 파티 게임',
      cta: '지금 플레이하기 →',
      url: '/play-tech-venture/apps/gacha-pop/',
      image: null
    }
  };

  // ── B. 유틸리티 ──

  // URL에서 현재 앱 이름 추출
  function getCurrentApp() {
    var match = window.location.pathname.match(/\/apps\/([^/]+)\//);
    return match ? match[1] : null;
  }

  // 현재 앱을 제외하고 랜덤으로 광고 하나 선택
  function pickAd() {
    var current = getCurrentApp();
    var keys = Object.keys(ADS).filter(function(k) { return k !== current; });
    if (keys.length === 0) return null;
    var key = keys[Math.floor(Math.random() * keys.length)];
    return ADS[key];
  }

  // ── C. CSS 주입 ──
  var style = document.createElement('style');
  style.textContent = [
    // 전면 광고 오버레이
    '.ptv-ad-overlay {',
    '  position: fixed;',
    '  inset: 0;',
    '  z-index: 2147483647;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  background: rgba(0,0,0,0.7);',
    '  backdrop-filter: blur(4px);',
    '  -webkit-backdrop-filter: blur(4px);',
    '  animation: ptv-ad-fadein 0.3s ease;',
    '}',
    '@keyframes ptv-ad-fadein {',
    '  from { opacity: 0; }',
    '  to { opacity: 1; }',
    '}',

    // 전면 광고 카드 (흰색 배경 — 앱과 구분)
    '.ptv-ad-interstitial {',
    '  position: relative;',
    '  background: #ffffff;',
    '  border-radius: 16px;',
    '  padding: 2.5rem 2rem 2rem;',
    '  max-width: 320px;',
    '  width: 85vw;',
    '  text-align: center;',
    '  box-shadow: 0 8px 32px rgba(0,0,0,0.4);',
    '}',
    // PC에서 전면 광고 카드 확대
    '@media (min-width: 768px) {',
    '  .ptv-ad-interstitial {',
    '    max-width: 480px;',
    '    padding: 3rem 2.5rem 2.5rem;',
    '  }',
    '  .ptv-ad-emoji { font-size: 4rem; }',
    '  .ptv-ad-title { font-size: 1.5rem; }',
    '  .ptv-ad-desc { font-size: 1rem; }',
    '}',

    // AD 뱃지 (공통 — 흰색 카드 위에서 눈에 띄도록)
    '.ptv-ad-badge {',
    '  position: absolute;',
    '  top: 8px;',
    '  left: 8px;',
    '  font-size: 10px;',
    '  font-weight: 700;',
    '  letter-spacing: 0.5px;',
    '  padding: 2px 6px;',
    '  border-radius: 4px;',
    '  background: #ff6b35;',
    '  color: #ffffff;',
    '  line-height: 1;',
    '}',

    // 이모지
    '.ptv-ad-emoji {',
    '  font-size: 3rem;',
    '  display: block;',
    '  margin-bottom: 0.75rem;',
    '}',

    // 타이틀
    '.ptv-ad-title {',
    '  font-size: 1.25rem;',
    '  font-weight: 700;',
    '  color: #1a1a2e;',
    '  margin-bottom: 0.5rem;',
    '}',

    // 설명
    '.ptv-ad-desc {',
    '  font-size: 0.875rem;',
    '  color: #666;',
    '  margin-bottom: 1.25rem;',
    '}',

    // CTA 버튼 (눈에 띄는 컬러)
    '.ptv-ad-cta {',
    '  display: inline-block;',
    '  padding: 0.75rem 1.5rem;',
    '  background: #ff6b35;',
    '  border-radius: 8px;',
    '  color: #ffffff;',
    '  text-decoration: none;',
    '  font-weight: 600;',
    '  font-size: 0.9rem;',
    '  transition: background 0.2s;',
    '}',
    '.ptv-ad-cta:hover {',
    '  background: #e55a2b;',
    '}',

    // 카운트다운
    '.ptv-ad-countdown {',
    '  position: absolute;',
    '  bottom: 12px;',
    '  right: 12px;',
    '  width: 32px;',
    '  height: 32px;',
    '  border-radius: 50%;',
    '  background: rgba(0,0,0,0.08);',
    '  color: #999;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  font-size: 0.875rem;',
    '  font-weight: 600;',
    '}',

    // 배너 광고 (흰색 배경 — 앱과 구분)
    '.ptv-ad-banner {',
    '  display: flex;',
    '  align-items: center;',
    '  gap: 0.75rem;',
    '  padding: 0.9rem 1.2rem;',
    '  background: #ffffff;',
    '  border: 1px solid #e0e0e0;',
    '  border-radius: 8px;',
    '  color: #1a1a2e;',
    '  text-decoration: none;',
    '  transition: border-color 0.2s, box-shadow 0.2s;',
    '  position: relative;',
    '}',
    '.ptv-ad-banner:hover {',
    '  border-color: #ff6b35;',
    '  box-shadow: 0 2px 8px rgba(255,107,53,0.15);',
    '}',
    '.ptv-ad-banner .ptv-ad-badge {',
    '  position: static;',
    '  flex-shrink: 0;',
    '  background: #ff6b35;',
    '  color: #ffffff;',
    '}',
    '.ptv-ad-banner .ptv-ad-emoji {',
    '  font-size: 1.5rem;',
    '  display: inline;',
    '  margin-bottom: 0;',
    '  flex-shrink: 0;',
    '}',
    '.ptv-ad-banner-text {',
    '  flex: 1;',
    '  min-width: 0;',
    '}',
    '.ptv-ad-banner-text .ptv-ad-title {',
    '  font-size: 0.9rem;',
    '  color: #1a1a2e;',
    '  margin-bottom: 0.15rem;',
    '}',
    '.ptv-ad-banner-text .ptv-ad-desc {',
    '  font-size: 0.75rem;',
    '  color: #888;',
    '  margin-bottom: 0;',
    '  white-space: nowrap;',
    '  overflow: hidden;',
    '  text-overflow: ellipsis;',
    '}',
    '.ptv-ad-arrow {',
    '  font-size: 1.25rem;',
    '  color: #ff6b35;',
    '  flex-shrink: 0;',
    '}',

    // 건너뛰기 버튼
    '.ptv-ad-skip {',
    '  position: absolute;',
    '  top: 8px;',
    '  right: 8px;',
    '  padding: 4px 12px;',
    '  font-size: 0.75rem;',
    '  font-weight: 600;',
    '  color: #999;',
    '  background: rgba(0,0,0,0.06);',
    '  border: 1px solid rgba(0,0,0,0.1);',
    '  border-radius: 4px;',
    '  cursor: pointer;',
    '  transition: color 0.2s, border-color 0.2s;',
    '}',
    '.ptv-ad-skip:hover {',
    '  color: #666;',
    '  border-color: rgba(0,0,0,0.2);',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // ── D. 전면 광고 (Interstitial) ──
  function showInterstitial() {
    return new Promise(function(resolve) {
      var ad = pickAd();
      // 광고가 없으면 즉시 해제
      if (!ad) {
        resolve();
        return;
      }

      // 오버레이 생성
      var overlay = document.createElement('div');
      overlay.className = 'ptv-ad-overlay';

      var card = document.createElement('div');
      card.className = 'ptv-ad-interstitial';

      // AD 뱃지
      var badge = document.createElement('span');
      badge.className = 'ptv-ad-badge';
      badge.textContent = 'AD';
      card.appendChild(badge);

      // 콘텐츠 영역
      var content = document.createElement('div');
      content.className = 'ptv-ad-content';

      var emoji = document.createElement('span');
      emoji.className = 'ptv-ad-emoji';
      emoji.textContent = ad.emoji;
      content.appendChild(emoji);

      var title = document.createElement('div');
      title.className = 'ptv-ad-title';
      title.textContent = ad.title;
      content.appendChild(title);

      var desc = document.createElement('div');
      desc.className = 'ptv-ad-desc';
      desc.textContent = ad.description;
      content.appendChild(desc);

      var cta = document.createElement('a');
      cta.className = 'ptv-ad-cta';
      cta.href = ad.url;
      cta.target = '_blank';
      cta.rel = 'noopener';
      cta.textContent = ad.cta;
      content.appendChild(cta);

      card.appendChild(content);

      // 카운트다운
      var countdown = document.createElement('div');
      countdown.className = 'ptv-ad-countdown';
      countdown.textContent = '10';
      card.appendChild(countdown);

      // 건너뛰기 버튼 (3초 후 표시)
      var skipBtn = document.createElement('button');
      skipBtn.className = 'ptv-ad-skip';
      skipBtn.textContent = '건너뛰기';
      skipBtn.style.display = 'none';
      card.appendChild(skipBtn);

      overlay.appendChild(card);
      document.body.appendChild(overlay);

      // 광고 해제 공통 함수
      function dismiss() {
        clearInterval(timer);
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        resolve();
      }

      // 카운트다운 타이머: 10 → … → 1 → 자동 해제
      var remaining = 10;
      var timer = setInterval(function() {
        remaining--;
        if (remaining <= 0) {
          dismiss();
        } else {
          countdown.textContent = String(remaining);
          // 3초 경과(remaining <= 7) 시 건너뛰기 버튼 표시
          if (remaining <= 7) {
            skipBtn.style.display = '';
          }
        }
      }, 1000);

      // 건너뛰기 클릭 시 즉시 해제
      skipBtn.addEventListener('click', dismiss);

      // CTA 클릭 시 해당 앱으로 이동 (기본 동작 유지)
      cta.addEventListener('click', dismiss);
    });
  }

  // ── E. 배너 광고 (Banner) ──
  function renderBanner(container) {
    // 중복 렌더링 방지
    if (container.hasAttribute('data-ptv-ad-rendered')) return;

    var ad = pickAd();
    if (!ad) return;

    container.setAttribute('data-ptv-ad-rendered', '');

    var link = document.createElement('a');
    link.className = 'ptv-ad-banner';
    link.href = ad.url;
    link.target = '_blank';
    link.rel = 'noopener';

    var badge = document.createElement('span');
    badge.className = 'ptv-ad-badge';
    badge.textContent = 'AD';
    link.appendChild(badge);

    var emoji = document.createElement('span');
    emoji.className = 'ptv-ad-emoji';
    emoji.textContent = ad.emoji;
    link.appendChild(emoji);

    var textWrap = document.createElement('div');
    textWrap.className = 'ptv-ad-banner-text';

    var title = document.createElement('div');
    title.className = 'ptv-ad-title';
    title.textContent = ad.title;
    textWrap.appendChild(title);

    var desc = document.createElement('div');
    desc.className = 'ptv-ad-desc';
    desc.textContent = ad.description;
    textWrap.appendChild(desc);

    link.appendChild(textWrap);

    var arrow = document.createElement('span');
    arrow.className = 'ptv-ad-arrow';
    arrow.textContent = '›';
    link.appendChild(arrow);

    container.appendChild(link);
  }

  // ── F. API 노출 ──
  window.ptv = window.ptv || {};
  window.ptv.ads = { interstitial: showInterstitial };

  // ── G. 초기화 ──
  function init() {
    // 기존 배너 요소 처리
    var banners = document.querySelectorAll('[data-ptv-ad="banner"]');
    for (var i = 0; i < banners.length; i++) {
      renderBanner(banners[i]);
    }

    // MutationObserver로 동적 배너 감지
    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function(mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var nodes = mutations[i].addedNodes;
          for (var j = 0; j < nodes.length; j++) {
            var node = nodes[j];
            if (node.nodeType === 1) {
              // 추가된 노드 자체가 배너인 경우
              if (node.getAttribute && node.getAttribute('data-ptv-ad') === 'banner') {
                renderBanner(node);
              }
              // 추가된 노드의 하위에 배너가 있는 경우
              if (node.querySelectorAll) {
                var inner = node.querySelectorAll('[data-ptv-ad="banner"]');
                for (var k = 0; k < inner.length; k++) {
                  renderBanner(inner[k]);
                }
              }
            }
          }
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
