import{j as e,b as a,L as o,o as i}from"../chunks/chunk-BsuEwop9.js";import{L as s}from"../chunks/chunk-D3qePV9B.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-u42NeO_H.js";/* empty css                      */const t=[{pageSectionId:"login-flow",pageSectionLevel:2,pageSectionTitle:"Login flow"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function r(l){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["To make information about the authenticated user available to your pages and UI components, you usually define ",e.jsx(n.code,{children:"pageContext.user"})," at ",e.jsx(n.a,{href:"/renderPage",children:e.jsx(n.code,{children:"renderPage()"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Vike server middleware"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"app."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"get"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'*'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#24292E"},children:" ("}),e.jsx(n.span,{style:{color:"#E36209"},children:"req"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#E36209"},children:"res"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Authentication middlewares (e.g. Passport.js and Grant) provide information about the"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // logged-in user at req.user"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" user"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" req.user"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  /* Or when using a third-party authentication provider (e.g. Auth0):"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  const user = await authProviderApi.getUser(req.headers)"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  */"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContextInit"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    urlOriginal: req.url,"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // Make the user object available at pageContext.user"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    user"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" result"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" renderPage"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(pageContextInit)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  /* ... */"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsxs(n.p,{children:["You can then access ",e.jsx(n.code,{children:"pageContext.user"})," from any UI component using ",e.jsx(s,{href:"/usePageContext",children:e.jsx(n.code,{children:"usePageContext()"})}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can pass any custom ",e.jsx(n.code,{children:"pageContext"})," property to ",e.jsx(n.code,{children:"renderPage()"}),", see ",e.jsx(s,{href:"/pageContext#custom"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"In principle, you can use Vike with any authentication tool such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{text:"Auth.js",href:"/Auth.js"}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/simov/grant",children:"Grant"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/jaredhanson/passport",children:"Passport.js"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://auth0.com/",children:"Auth0"})}),`
`]}),`
`,e.jsx("h2",{id:"login-flow",children:"Login flow"}),`
`,e.jsxs(n.p,{children:["By using ",e.jsx(n.a,{href:"/guard",children:e.jsx(n.code,{children:"guard()"})})," with ",e.jsx(n.a,{href:"/redirect",children:e.jsx(n.code,{children:"throw redirect()"})})," or ",e.jsx(n.a,{href:"/render",children:e.jsx(n.code,{children:"throw render()"})})," you can:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Implement login flows."}),`
`,e.jsx(n.li,{children:"Protect private pages from unprivileged access."}),`
`]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/admin/+guard.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { render, redirect } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/abort'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" const"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" guard"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" ("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"user"}),e.jsx(n.span,{style:{color:"#24292E"},children:" } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (user "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"==="}),e.jsx(n.span,{style:{color:"#005CC5"},children:" null"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // Render the login page while preserving the URL. (This is novel technique"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // which we explain down below.)"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    throw"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" render"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'/login'"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    /* The more traditional way, redirect the user:"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    throw redirect('/login')"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    */"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (user.role "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"!=="}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'admin'"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // Render the error page and show message to the user"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    throw"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" render"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#005CC5"},children:"403"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'Only admins are allowed to access this page.'"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:"render('/login')"})," instead of ",e.jsx(n.code,{children:"redirect('/login')"})," allows the URL to be preserved during the entire login flow:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Unauthenticated user goes to URL ",e.jsx(n.code,{children:"/admin"})," and sees the login page. (URL is ",e.jsx(n.code,{children:"/admin"}),".)"]}),`
`,e.jsxs(n.li,{children:["User fills the sign-in form and successfully logs in. (URL is still ",e.jsx(n.code,{children:"/admin"}),".)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{text:"Reload",href:"/reload"})," the page, the user now sees the admin page. (URL is still ",e.jsx(n.code,{children:"/admin"}),".)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(a,{text:"example",path:"/examples/auth/"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can also define a ",e.jsx(n.code,{children:"guard()"})," hook that applies to multiple pages:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/+guard.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// This guard() hook applies to all pages: the file is located at /pages/+guard.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// and therefore applies to all /pages/**/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { render } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/abort'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" const"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" guard"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" ("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" ("}),e.jsx(n.span,{style:{color:"#D73A49"},children:"!"}),e.jsx(n.span,{style:{color:"#24292E"},children:"pageContext.user) {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    throw"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" render"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'/login'"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/guard"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/redirect"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/render"}),`
`]}),`
`]})]})}function d(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:t},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/auth/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{A as configValuesSerialized};
