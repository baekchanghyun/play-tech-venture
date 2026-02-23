/**
 * Play Tech Venture — 공통 홈 버튼
 * 모든 배포된 앱에 자동 주입되는 플로팅 버튼.
 * deploy.sh에서 빌드 후 index.html에 <script> 태그로 주입한다.
 *
 * @see ADR-015
 */
(function() {
  // 1. 랜딩 페이지 가드
  var path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/play-tech-venture' || path === '/play-tech-venture/index.html') {
    return;
  }

  // 2. CSS 주입
  var style = document.createElement('style');
  style.textContent = [
    '.ptv-home-btn {',
    '  position: fixed;',
    '  left: 16px;',
    '  bottom: calc(var(--bottom-nav-height, 0px) + 16px);',
    '  bottom: calc(var(--bottom-nav-height, 0px) + max(16px, env(safe-area-inset-bottom, 0px)));',
    '  width: 48px;',
    '  height: 48px;',
    '  border-radius: 50%;',
    '  border: 1px solid rgba(255,255,255,0.2);',
    '  background: rgba(128,128,128,0.25);',
    '  backdrop-filter: blur(8px);',
    '  -webkit-backdrop-filter: blur(8px);',
    '  cursor: pointer;',
    '  z-index: 2147483646;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  padding: 0;',
    '  margin: 0;',
    '  opacity: 0.6;',
    '  touch-action: manipulation;',
    '  transition: opacity 0.2s, transform 0.2s;',
    '  -webkit-transition: opacity 0.2s, transform 0.2s;',
    '  outline: none;',
    '  -webkit-tap-highlight-color: transparent;',
    '  box-shadow: 0 2px 8px rgba(0,0,0,0.15);',
    '}',
    '.ptv-home-btn:hover,',
    '.ptv-home-btn:focus {',
    '  opacity: 1;',
    '  transform: scale(1.1);',
    '  -webkit-transform: scale(1.1);',
    '}',
    '.ptv-home-btn:active {',
    '  opacity: 1;',
    '  transform: scale(0.9);',
    '  -webkit-transform: scale(0.9);',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // 3. 버튼 DOM 생성
  var btn = document.createElement('button');
  btn.id = 'ptv-home-btn';
  btn.className = 'ptv-home-btn';
  btn.setAttribute('data-ptv-home', '');
  btn.setAttribute('type', 'button');
  btn.setAttribute('aria-label', 'Play Venture 홈으로 이동');
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style="color: rgba(255,255,255,0.9)">' +
    '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>' +
    '</svg>';

  // 4. 이벤트 바인딩
  btn.addEventListener('click', function() {
    var confirmed = window.confirm('Play Venture의 앱 목록으로 이동할까요?');
    if (confirmed) {
      window.location.href = '/play-tech-venture/';
    }
  });

  // 5. body에 삽입
  if (document.body) {
    document.body.appendChild(btn);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(btn);
    });
  }
})();
