// https://github.com/vikejs/vike/discussions/571#discussioncomment-6137618
export const errror_cannot_use_import_outside_of_module = `
import{useRunner as e}from"react-runner";export*from"react-runner";import t,{useState as r,useEffect as n,Fragment as a,useCallback as l,useRef as o,useMemo as c,createContext as s,useContext as i}from"react";import p from"react-simple-code-editor";import m,{Prism as u}from"prism-react-renderer";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(r=l[n])>=0||(a[r]=e[r]);return a}const d=["initialCode","transformCode"],h=t=>{let{initialCode:a="",transformCode:l}=t,o=y(t,d);const[c,s]=r(a),{element:i,error:p}=e(g({code:l?l(c):c},o));return n(()=>{s(a)},[a]),{element:i,error:p,code:c,onChange:s}},f={plain:{color:"#ffffff",backgroundColor:"#282c34"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#b2b2b2"}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:"#5a9bcf"}},{types:["boolean"],style:{color:"#ff8b50"}},{types:["tag"],style:{color:"#fc929e"}},{types:["string","attr-value"],style:{color:"#8dc891"}},{types:["punctuation"],style:{color:"#88c6Be"}},{types:["selector","char","builtin","inserted"],style:{color:"#d8dee9"}},{types:["function"],style:{color:"#79b6f2"}},{types:["operator","entity","url","variable"],style:{color:"#d7deea"}},{types:["keyword"],style:{color:"#c5a5c5"}},{types:["atrule","class-name"],style:{color:"#fac863"}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"700"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["namespace"],style:{opacity:.7}}]},b=["children","language","theme","Prism","padding","noWrapper","noWrap","className","style"],C=e=>{let{children:r,language:n="jsx",theme:l=f,Prism:o=u,padding:c=10,noWrapper:s,noWrap:i,className:p,style:d}=e,h=y(e,b);/*#__PURE__*/return t.createElement(m,{code:r||"",language:n,Prism:o,theme:l},({className:e,style:r,tokens:n,getLineProps:l,getTokenProps:o})=>{const m=n.map((e,r)=>/*#__PURE__*/t.createElement(a,{key:r},/*#__PURE__*/t.createElement("span",l({line:e}),e.map((e,r)=>/*#__PURE__*/t.createElement("span",o({token:e,key:r})))),"\\n"));return s?m:/*#__PURE__*/t.createElement("pre",g({className:p?:e,style:g({},r,{margin:0,padding:c,whiteSpace:i?"pre":"pre-wrap"},d)},h),m)})},v=["defaultValue","value","language","theme","Prism","highlight","padding","onChange"],E=e=>{let{defaultValue:n,value:a,language:s="jsx",theme:i=f,Prism:m,highlight:u,padding:d=10,onChange:h}=e,b=y(e,v);const[E,P]=r(n||""),k=void 0!==a,W=l(e=>/*#__PURE__*/t.createElement(C,{language:s,theme:i,Prism:m,noWrapper:!0},e),[s,i,m]),j=o(h);j.current=h;const x=l(e=>{k||P(e),null==j.current||j.current(e)},[k]),O=c(()=>g({},i.plain,b.style),[i.plain,b.style]);/*#__PURE__*/return t.createElement(p,g({},b,{highlight:u||W,padding:d,value:k?a:E,onValueChange:x,style:O}))},P=s({}),k=()=>i(P),W=["children","code","language","theme"],j=e=>{let{children:r,code:n="",language:a="jsx",theme:l=f}=e,o=y(e,W);const{element:c,error:s,code:i,onChange:p}=h(g({initialCode:n},o));/*#__PURE__*/return t.createElement(P.Provider,{value:{element:c,error:s,code:i,onChange:p,language:a,theme:l}},r)},x=e=>{const{code:r,language:n,theme:a,onChange:l}=k();/*#__PURE__*/return t.createElement(E,g({value:r,language:n,theme:a,onChange:l},e))},O=["Component"],w=e=>{let{Component:r="div"}=e,n=y(e,O);const{element:a}=k();/*#__PURE__*/return t.createElement(r,n,a)},N=e=>{const{error:r}=k();return r?/*#__PURE__*/t.createElement("pre",e,r):/*#__PURE__*/t.createElement(t.Fragment,null)};export{C as CodeBlock,E as CodeEditor,P as LiveContext,x as LiveEditor,N as LiveError,w as LivePreview,j as LiveProvider,f as defaultTheme,k as useLiveContext,h as useLiveRunner};
^^^^^^

    SyntaxError: Cannot use import statement outside a module
        at Object.compileFunction (node:vm:360:18)
        at wrapSafe (node:internal/modules/cjs/loader:1084:15)
        at Module._compile (node:internal/modules/cjs/loader:1119:27)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
        at Module.load (node:internal/modules/cjs/loader:1033:32)
        at Function.Module._load (node:internal/modules/cjs/loader:868:12)
        at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
        at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
        at processTicksAndRejections (node:internal/process/task_queues:96:5)
        at async Promise.all (index 0)
`
