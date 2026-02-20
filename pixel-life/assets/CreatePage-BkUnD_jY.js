import{u as A,a as O,r as s,j as t,_ as o}from"./index-DA_so43f.js";import{s as y,g as V,a as D,b as v,u as p,c as G}from"./game-store-BXqJePOw.js";import{P as n}from"./PixelCard-CWNn433b.js";import{S as U}from"./StatPanel-DGoQl58m.js";const h=[{id:"kr",name:"한국",statModifiers:{intelligence:5}},{id:"us",name:"미국",statModifiers:{wealth:5}},{id:"jp",name:"일본",statModifiers:{intelligence:3,charm:2}},{id:"gb",name:"영국",statModifiers:{intelligence:3,wealth:2}},{id:"br",name:"브라질",statModifiers:{charm:5}},{id:"in",name:"인도",statModifiers:{intelligence:3,luck:2}},{id:"de",name:"독일",statModifiers:{strength:3,intelligence:2}},{id:"au",name:"호주",statModifiers:{strength:3,luck:2}}];function H(){const a=A(),[r]=O(),f=r.get("seed"),[l,P]=s.useState(""),[i,C]=s.useState("male"),[S,I]=s.useState(h[0].id),[d,m]=s.useState(f??y(v())),[x,w]=s.useState(f!==null),[j,c]=s.useState(null),[b,E]=s.useState(!1),u=h.find(e=>e.id===S)??h[0];function g(){try{return D(d)}catch{return v()}}const R=s.useCallback(()=>{const e=g(),_=G(e),k=V(_,u);c(k)},[d,u]);async function T(){if(l.trim().length!==0){E(!0);try{const e=await B();p.getState().setEvents(e);const _=g();p.getState().startNewGame(l.trim(),i,u,_),a("/play")}catch{p.getState().setEvents([]);const e=g();p.getState().startNewGame(l.trim(),i,u,e),a("/play")}finally{E(!1)}}}function L(){x?(m(y(v())),w(!1)):w(!0),c(null)}function M(){m(y(v())),c(null)}const N=l.trim().length>0;return t.jsxs("div",{className:"flex flex-col gap-6 py-4",children:[t.jsxs("div",{className:"text-sm text-[var(--color-text-dim)]",children:[t.jsx("span",{className:"text-[var(--color-accent)]",children:">"})," 캐릭터 생성"]}),t.jsx(n,{title:"이름",children:t.jsx("input",{type:"text",placeholder:"캐릭터 이름을 입력하세요",value:l,onChange:e=>P(e.target.value),maxLength:20,className:"w-full px-3 py-2 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-white)] border-0 outline-none",style:{boxShadow:`
              2px 0 0 0 var(--color-border),
              -2px 0 0 0 var(--color-border),
              0 2px 0 0 var(--color-border),
              0 -2px 0 0 var(--color-border)
            `}})}),t.jsx(n,{title:"성별",children:t.jsx("div",{className:"flex gap-6",children:[{value:"male",label:"남"},{value:"female",label:"여"},{value:"other",label:"기타"}].map(e=>t.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-sm",children:[t.jsx("input",{type:"radio",name:"gender",value:e.value,checked:i===e.value,onChange:()=>C(e.value),className:"accent-[var(--color-accent)]"}),t.jsx("span",{className:i===e.value?"text-[var(--color-text-white)]":"text-[var(--color-text-dim)]",children:e.label})]},e.value))})}),t.jsx(n,{title:"출생 국가",children:t.jsx("select",{value:S,onChange:e=>{I(e.target.value),c(null)},className:"w-full px-3 py-2 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-white)] border-0 outline-none cursor-pointer",style:{boxShadow:`
              2px 0 0 0 var(--color-border),
              -2px 0 0 0 var(--color-border),
              0 2px 0 0 var(--color-border),
              0 -2px 0 0 var(--color-border)
            `},children:h.map(e=>t.jsx("option",{value:e.id,children:e.name},e.id))})}),t.jsx(n,{title:"시드",children:t.jsxs("div",{className:"flex gap-2 items-center",children:[x?t.jsx("input",{type:"text",maxLength:6,placeholder:"ABC123",value:d,onChange:e=>{m(e.target.value.toUpperCase()),c(null)},className:"flex-1 px-3 py-2 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-white)] border-0 outline-none",style:{boxShadow:`
                  1px 0 0 0 var(--color-border),
                  -1px 0 0 0 var(--color-border),
                  0 1px 0 0 var(--color-border),
                  0 -1px 0 0 var(--color-border)
                `}}):t.jsx("span",{className:"flex-1 text-sm text-[var(--color-stat-luck)]",children:d}),!x&&t.jsx("button",{type:"button",className:"px-3 py-1 text-xs bg-[var(--color-bg-secondary)] text-[var(--color-text-dim)] hover:text-[var(--color-text-white)] transition-colors duration-100 border-0 cursor-pointer",style:{boxShadow:`
                  1px 0 0 0 var(--color-border),
                  -1px 0 0 0 var(--color-border),
                  0 1px 0 0 var(--color-border),
                  0 -1px 0 0 var(--color-border)
                `},onClick:M,title:"새 시드 생성",children:"새로고침"}),t.jsx("button",{type:"button",className:"px-3 py-1 text-xs bg-[var(--color-bg-secondary)] text-[var(--color-text-dim)] hover:text-[var(--color-text-white)] transition-colors duration-100 border-0 cursor-pointer",style:{boxShadow:`
                1px 0 0 0 var(--color-border),
                -1px 0 0 0 var(--color-border),
                0 1px 0 0 var(--color-border),
                0 -1px 0 0 var(--color-border)
              `},onClick:L,children:x?"자동":"직접 입력"})]})}),t.jsx("button",{type:"button",className:"w-full px-6 py-3 text-center bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-white)] transition-colors duration-100 border-0 cursor-pointer",style:{boxShadow:`
            2px 0 0 0 var(--color-border),
            -2px 0 0 0 var(--color-border),
            0 2px 0 0 var(--color-border),
            0 -2px 0 0 var(--color-border)
          `},onClick:R,children:"운명 확인"}),j!==null&&t.jsx(n,{title:"초기 스탯 미리보기",children:t.jsx(U,{stats:j})}),t.jsxs("button",{type:"button",className:`w-full px-6 py-4 text-center text-lg transition-colors duration-100 border-0 ${N&&!b?"bg-[var(--color-bg-card)] text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-white)] cursor-pointer":"bg-[var(--color-bg-secondary)] text-[var(--color-text-dim)] cursor-not-allowed opacity-50"}`,style:{boxShadow:`
            2px 0 0 0 var(--color-accent-dim),
            -2px 0 0 0 var(--color-accent-dim),
            0 2px 0 0 var(--color-accent-dim),
            0 -2px 0 0 var(--color-accent-dim)
          `},disabled:!N||b,onClick:()=>{T()},children:[t.jsx("span",{className:"mr-2",children:"▶"}),b?"로딩 중...":"인생 시작"]})]})}async function B(){const a=[];try{const r=await o(()=>import("./events-infant-CSKaj1fg.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-student-D-1ZA0ZC.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-adult-BwwDM-_i.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-senior-C4DyJUbM.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-infant-2-BCkg1uTh.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-student-2-nN2eQAeY.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-senior-2-CSTyDLGF.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-adult-2-DsmIikW9.js"),[]);a.push(r)}catch{}try{const r=await o(()=>import("./events-adult-3-0-pHh_aw.js"),[]);a.push(r)}catch{}return a.flatMap(r=>r.default)}export{H as default};
