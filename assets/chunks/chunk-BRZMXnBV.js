import{j as e}from"./chunk-BsuEwop9.js";import{L as r}from"./chunk-D3qePV9B.js";/* empty css              *//* empty css              *//* empty css              */function d({staticHostLink:t}){return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["By ",e.jsx("a",{href:"/pre-rendering",children:"pre-rendering"})," your pages, you can remove the need for a production server. You can then deploy your app to any static host",t,"."]}),e.jsx("blockquote",{children:e.jsxs("p",{children:["Static hosts always expect one ",e.jsx("code",{children:".html"})," file per URL. This means you need to pre-render ",e.jsx("em",{children:"all"})," ","your pages, regardless of ",e.jsx(r,{text:"render mode",href:"/render-modes"}),". For example, if you have SPA pages, then you also need to pre-render them which will generate ",e.jsx("code",{children:".html"})," files with an empty"," ",e.jsx("code",{children:"<body>"}),"."]})})]})}function l({name:t="the static host"}){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"You can choose between following deploy strategies:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Build locally and upload ",e.jsx("code",{children:"dist/client/"})," to ",t,"."]}),e.jsxs("li",{children:["Let a ",e.jsx("a",{href:"https://github.com/features/actions",children:"GitHub action"})," build and upload"," ",e.jsx("code",{children:"dist/client/"})," to ",t,"."]}),e.jsxs("li",{children:["Let ",t," build your app."]})]}),e.jsx("blockquote",{children:e.jsxs("p",{children:["The ",e.jsx("code",{children:"$ vite build"})," command generates ",e.jsx("code",{children:"dist/client/"})," containing all static assets."]})})]})}function a({baseUrlAddendum:t}){return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[" ","You can try out your production build locally with"," ",e.jsx("a",{href:"https://vitejs.dev/guide/cli.html#vite-preview",children:e.jsx("code",{children:"$ vite preview"})}),", or any other tool such as"," ",e.jsx("a",{href:"https://www.npmjs.com/package/serve",children:e.jsx("code",{children:"$ serve dist/client/"})}),"."]}),e.jsx("blockquote",{children:e.jsxs("p",{children:["If you don't deploy your app at your domain root ",e.jsx("code",{children:"https://my-domain.com"}),", but at"," ",e.jsx("code",{children:"https://my-domain.com/somewhere/nested"})," instead, then"," ",e.jsx("a",{href:"/base-url",children:"change your app's Base URL"}),".",t]})})]})}export{d as S,l as a,a as b};
