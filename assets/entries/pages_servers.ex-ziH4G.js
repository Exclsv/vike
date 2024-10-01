import{j as e,o as s,i as a}from"../chunks/chunk-B1niCXMT.js";import{L as i}from"../chunks/chunk-CFDfndwJ.js";/* empty css                      */import{M as l}from"../chunks/chunk-BOkxIsO8.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0HWZO65.js";/* empty css                      */const o=[{pageSectionId:"just-a-middleware",pageSectionLevel:2,pageSectionTitle:"Just a middleware"},{pageSectionId:"non-javascript-backend",pageSectionLevel:2,pageSectionTitle:"Non-JavaScript Backend"},{pageSectionId:"https",pageSectionLevel:2,pageSectionTitle:"HTTPS"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function t(r){const n={a:"a",blockquote:"blockquote",em:"em",li:"li",p:"p",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"You can embed Vike into any server, and use any server utilitiy."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Alternatively, instead of using a server, you can ",e.jsx(i,{href:"/pre-rendering",children:"pre-render"})," your pages and deploy to a ",e.jsx(i,{href:"/static-hosts",children:"static host"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"just-a-middleware",children:"Just a middleware"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.p,{children:"You can use:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Any server framework (Express, Fastify, Hono, Nitro, HatTip, Koa, Hapi, ...)"}),`
`,e.jsx(n.li,{children:"Any authentication strategy/tool (email/password, OAuth, Auth.js, Passport.js, Grant, Keycloak, Auth0, ...)."}),`
`,e.jsx(n.li,{children:"Any serverless/edge environment (Cloudflare Workers, Vercel, Firebase, AWS Lambda, Google Cloud Functions, Deno Deploy, ...)"}),`
`,e.jsx(n.li,{children:"Any virtual private server (AWS EC2, Google Cloud, ...)"}),`
`,e.jsx(n.li,{children:"Any static host (Cloudflare Pages, GitHub Pages, Netlify, ...)"}),`
`,e.jsx(n.li,{children:"Any server utility (Docker, Nginx, PM2, ...)"}),`
`]}),`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/express"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/hono"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/fastify"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/docker",noBreadcrumb:!0}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/nginx"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/examples#server",children:"... more"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"non-javascript-backend",children:"Non-JavaScript Backend"}),`
`,e.jsx(n.p,{children:"You can use Vike with a non-JavaScript backend using following setup:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Your non-JavaScript backend implements the business logic of data while exposing a REST/GraphQL API."}),`
`,e.jsxs(n.li,{children:["Your Vike app uses that REST/GraphQL API to ",e.jsx(i,{href:"/ssr",children:"render your pages to HTML"})," while ",e.jsx(i,{href:"/hydration",children:"hydrating"})," them to a rich interactive user interface."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"If you want SSR, then you need to deploy two server runtimes: your non-JavaScript runtime as well as a JavaScript server runtime (Node.js/Deno/Bun)."}),`
`,e.jsxs(n.p,{children:["Alternatively, instead of using a server JavaScript runtime, you can ",e.jsx(i,{href:"/pre-redenring",children:"pre-render"})," your pages while ",e.jsx(i,{href:"/ssr",children:"disabling SSR"}),". In other words: you generate empty HTML shells that you statically deploy (using a ",e.jsx(i,{href:"/static-hosts",children:"static host"})," or your own static assets deployment)."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The HTML must be generated by Vike because the UI is ",e.jsx(n.em,{children:"completely"})," owned by React/Vue/Solid. You cannot generate the HTML using your non-JavaScript backend: React/Vue/Solid would ",e.jsx(i,{href:"/hydration-mismatch",children:"complain that it doesn't match"})," and completely erase your HTML."]}),`
`]}),`
`,e.jsx(n.p,{children:"That way, you can use Vike with any backend:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Java (Spring, Grails, ...)"}),`
`,e.jsx(n.li,{children:"PHP (Laravel, Symfony, CakePHP, ...)"}),`
`,e.jsx(n.li,{children:"Ruby on Rails"}),`
`,e.jsx(n.li,{children:"Python (Django, Flask, FastAPI, ...)"}),`
`,e.jsx(n.li,{children:"Elixir (Phoenix, ...)"}),`
`,e.jsx(n.li,{children:"Go (Gin, Echo, Fiber, ...)"}),`
`,e.jsx(n.li,{children:"Rust (Actix Web, Rocket, ...)"}),`
`,e.jsx(n.li,{children:"Backend-as-a-Service (Firbase, ..)"}),`
`,e.jsx(n.li,{children:"..."}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/ruby-on-rails"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"https",children:"HTTPS"}),`
`,e.jsx(n.p,{children:"In production, Vike is only a server middleware; there is nothing to take into consideration."}),`
`,e.jsxs(n.p,{children:["If you want to use HTTPS in development as well, then make sure to ",e.jsx(n.a,{href:"https://vitejs.dev/config/server-options.html#server-https",children:"pass the HTTPS certificates to Vite's dev server"}),"."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/renderPage"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/examples#server"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"/deploy"}),`
`]}),`
`]})]})}function d(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:o},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/servers/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{T as configValuesSerialized};
