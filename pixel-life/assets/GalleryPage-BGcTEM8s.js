import{j as e,u as m,r as c}from"./index-OPFde3V9.js";import{a as h,d as b}from"./history-db-Bpxs1fj9.js";import{P as u}from"./PixelCard-DXqAhZFG.js";function g(a){const o=new Date(a),t=o.getFullYear(),n=String(o.getMonth()+1).padStart(2,"0"),s=String(o.getDate()).padStart(2,"0");return`${t}.${n}.${s}`}function f({name:a,finalAge:o,finalStats:t,createdAt:n,onClick:s,onDelete:i}){return e.jsxs("div",{className:`
        flex items-center justify-between
        px-4 py-3 mb-2
        cursor-pointer
        bg-[var(--color-bg-card)]
        hover:bg-[var(--color-bg-hover)]
        transition-colors duration-100
      `,style:{boxShadow:`
          2px 0 0 0 var(--color-border),
          -2px 0 0 0 var(--color-border),
          0 2px 0 0 var(--color-border),
          0 -2px 0 0 var(--color-border)
        `},onClick:s,role:"button",tabIndex:0,onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),s())},children:[e.jsxs("div",{className:"flex flex-col gap-1 min-w-0",children:[e.jsxs("div",{className:"flex items-baseline gap-2",children:[e.jsx("span",{className:"text-[var(--color-text-white)] text-sm font-bold truncate",children:a}),e.jsxs("span",{className:"text-[var(--color-stat-luck)] text-xs shrink-0",children:[o,"세"]})]}),e.jsxs("div",{className:"flex gap-2 text-xs",children:[e.jsxs("span",{style:{color:"var(--color-stat-intelligence)"},children:["지",t.intelligence]}),e.jsxs("span",{style:{color:"var(--color-stat-strength)"},children:["체",t.strength]}),e.jsxs("span",{style:{color:"var(--color-stat-charm)"},children:["매",t.charm]}),e.jsxs("span",{style:{color:"var(--color-stat-luck)"},children:["운",t.luck]}),e.jsxs("span",{style:{color:"var(--color-stat-wealth)"},children:["재",t.wealth]})]}),e.jsx("span",{className:"text-[var(--color-text-dim)] text-xs",children:g(n)})]}),e.jsx("button",{type:"button",className:`
          shrink-0 ml-4
          px-2 py-1
          text-xs
          bg-[var(--color-bg-secondary)]
          text-[var(--color-text-dim)]
          hover:text-[#ff4444]
          hover:bg-[var(--color-bg-hover)]
          transition-colors duration-100
          border-0 cursor-pointer
        `,style:{boxShadow:`
            1px 0 0 0 var(--color-border),
            -1px 0 0 0 var(--color-border),
            0 1px 0 0 var(--color-border),
            0 -1px 0 0 var(--color-border)
          `},onClick:l=>{l.stopPropagation(),i()},title:"삭제",children:"✕"})]})}function k(){const a=m(),[o,t]=c.useState([]),[n,s]=c.useState(!0);c.useEffect(()=>{i()},[]);async function i(){s(!0);try{const r=await h();t(r)}catch{t([])}finally{s(!1)}}const l=c.useCallback(r=>{a(`/report?id=${encodeURIComponent(r)}`)},[a]),x=c.useCallback((r,d)=>{window.confirm(`"${d}"의 인생 기록을 삭제하시겠습니까?`)&&b(r).then(()=>{t(p=>p.filter(v=>v.id!==r))})},[]);return n?e.jsx("div",{className:"flex items-center justify-center min-h-[400px] text-[var(--color-text-dim)]",children:"기록을 불러오는 중..."}):e.jsxs("div",{className:"flex flex-col gap-4 py-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-[var(--color-text-dim)]",children:[e.jsx("span",{className:"text-[var(--color-accent)]",children:">"})," 전생 갤러리"]}),e.jsxs("span",{className:"text-xs text-[var(--color-text-dim)]",children:[o.length,"개의 기록"]})]}),o.length===0?e.jsx(u,{children:e.jsxs("div",{className:"text-center py-8",children:[e.jsx("p",{className:"text-[var(--color-text-dim)] mb-4",children:"아직 살아본 인생이 없습니다."}),e.jsxs("button",{type:"button",className:"px-6 py-2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] transition-colors duration-100 border-0 cursor-pointer",style:{boxShadow:`
                  2px 0 0 0 var(--color-border),
                  -2px 0 0 0 var(--color-border),
                  0 2px 0 0 var(--color-border),
                  0 -2px 0 0 var(--color-border)
                `},onClick:()=>a("/create"),children:[e.jsx("span",{className:"mr-2",children:"▶"}),"새 인생 시작하기"]})]})}):e.jsx("div",{className:"flex flex-col gap-1",children:o.map(r=>e.jsx(f,{name:r.character.name,finalAge:r.finalAge,finalStats:r.finalStats,createdAt:r.createdAt,onClick:()=>l(r.id),onDelete:()=>x(r.id,r.character.name)},r.id))}),e.jsx("button",{type:"button",className:"w-full px-4 py-2 text-center text-sm bg-[var(--color-bg-card)] text-[var(--color-text-dim)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] transition-colors duration-100 border-0 cursor-pointer",style:{boxShadow:`
            2px 0 0 0 var(--color-border),
            -2px 0 0 0 var(--color-border),
            0 2px 0 0 var(--color-border),
            0 -2px 0 0 var(--color-border)
          `},onClick:()=>a("/"),children:"타이틀로 돌아가기"})]})}export{k as default};
