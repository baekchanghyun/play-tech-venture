import{u as i,r as p,j as r}from"./index-OPFde3V9.js";import{u as c}from"./game-store-Do9y9pZe.js";import{P as d}from"./PixelCard-DXqAhZFG.js";function h(){const e=i(),s=c(o=>o.character),x=c(o=>o.isAlive),[t,n]=p.useState(""),a=s!==null&&x;function l(){const o=t.trim();o.length!==0&&e(`/create?seed=${encodeURIComponent(o)}`)}return r.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[500px] gap-8 py-8",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("h2",{className:"text-5xl tracking-widest mb-2",style:{color:"var(--color-accent)",textShadow:`
              3px 3px 0 var(--color-accent-dim),
              -1px -1px 0 var(--color-bg-primary),
              1px -1px 0 var(--color-bg-primary),
              -1px 1px 0 var(--color-bg-primary),
              1px 1px 0 var(--color-bg-primary)
            `},children:"PIXEL LIFE"}),r.jsx("p",{className:"text-sm text-[var(--color-text-dim)]",children:"픽셀 인생 시뮬레이터"})]}),r.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[r.jsxs("button",{type:"button",className:"w-full px-6 py-3 text-left bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-white)] transition-colors duration-100 border-0 cursor-pointer",style:{boxShadow:`
              2px 0 0 0 var(--color-border),
              -2px 0 0 0 var(--color-border),
              0 2px 0 0 var(--color-border),
              0 -2px 0 0 var(--color-border)
            `},onClick:()=>e("/create"),children:[r.jsx("span",{className:"text-[var(--color-accent)] mr-2",children:"▶"}),"새 인생 시작"]}),r.jsxs("button",{type:"button",className:`w-full px-6 py-3 text-left transition-colors duration-100 border-0 ${a?"bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-white)] cursor-pointer":"bg-[var(--color-bg-secondary)] text-[var(--color-text-dim)] cursor-not-allowed opacity-50"}`,style:{boxShadow:`
              2px 0 0 0 var(--color-border),
              -2px 0 0 0 var(--color-border),
              0 2px 0 0 var(--color-border),
              0 -2px 0 0 var(--color-border)
            `},disabled:!a,onClick:()=>e("/play"),children:[r.jsx("span",{className:"text-[var(--color-accent)] mr-2",children:"▶"}),"이어하기"]}),r.jsxs("button",{type:"button",className:"w-full px-6 py-3 text-left bg-[var(--color-bg-card)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-white)] transition-colors duration-100 border-0 cursor-pointer",style:{boxShadow:`
              2px 0 0 0 var(--color-border),
              -2px 0 0 0 var(--color-border),
              0 2px 0 0 var(--color-border),
              0 -2px 0 0 var(--color-border)
            `},onClick:()=>e("/gallery"),children:[r.jsx("span",{className:"text-[var(--color-accent)] mr-2",children:"▶"}),"전생 갤러리"]})]}),r.jsx(d,{className:"w-full max-w-xs",children:r.jsxs("div",{className:"flex gap-2 items-center",children:[r.jsx("label",{className:"text-xs text-[var(--color-text-dim)] shrink-0",htmlFor:"seed-input",children:"시드:"}),r.jsx("input",{id:"seed-input",type:"text",maxLength:6,placeholder:"ABC123",value:t,onChange:o=>n(o.target.value.toUpperCase()),onKeyDown:o=>{o.key==="Enter"&&l()},className:"flex-1 px-2 py-1 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-white)] border-0 outline-none",style:{boxShadow:`
                1px 0 0 0 var(--color-border),
                -1px 0 0 0 var(--color-border),
                0 1px 0 0 var(--color-border),
                0 -1px 0 0 var(--color-border)
              `}}),r.jsx("button",{type:"button",className:"px-3 py-1 text-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-white)] transition-colors duration-100 border-0 cursor-pointer shrink-0",style:{boxShadow:`
                1px 0 0 0 var(--color-border),
                -1px 0 0 0 var(--color-border),
                0 1px 0 0 var(--color-border),
                0 -1px 0 0 var(--color-border)
              `},onClick:l,children:"시작"})]})})]})}export{h as default};
