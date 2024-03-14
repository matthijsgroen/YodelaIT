"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3249],{7431:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(3696);var i=t(2689),o=t(1825),a=t(8670),s=t(554),r=t(2226),l=t(8958),c=t(7254),d=t(3259),m=t(2540);function u(e){const{nextItem:n,prevItem:t}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,s.e)(),{title:t,description:i,date:a,tags:r,authors:l,frontMatter:c}=n,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(o.be,{title:t,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var g=t(5217),f=t(7745);function v(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:o}=(0,s.e)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:h}=i,{hide_table_of_contents:v,toc_min_heading_level:x,toc_max_heading_level:p}=d;return(0,m.jsxs)(r.A,{sidebar:n,toc:!v&&o.length>0?(0,m.jsx)(g.A,{toc:o,minHeadingLevel:x,maxHeadingLevel:p}):void 0,children:[h&&(0,m.jsx)(f.A,{}),(0,m.jsx)(l.A,{children:t}),(a||c)&&(0,m.jsx)(u,{nextItem:a,prevItem:c})]})}function x(e){const n=e.content;return(0,m.jsx)(s.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(o.e3,{className:(0,i.A)(a.G.wrapper.blogPages,a.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(n,{})})]})})}},5217:(e,n,t)=>{t.d(n,{A:()=>c});t(3696);var i=t(2689),o=t(2011);const a={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"};var s=t(2540);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,i.A)(a.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(o.A,{...t,linkClassName:r,linkActiveClassName:l})})}},2011:(e,n,t)=>{t.d(n,{A:()=>f});var i=t(3696),o=t(4981);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):i.push(o)})),i}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let o=n;o<=t;o+=1)i.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:s}),c=l(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(407),u=t(2540);function h(e){let{toc:n,className:t,linkClassName:i,isChild:o}=e;return n.length?(0,u.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const g=i.memo(h);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const f=(0,o.p)(),v=c??f.tableOfContents.minHeadingLevel,x=m??f.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,i.useMemo)((()=>s({toc:a(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:x}}),[r,l,v,x])),(0,u.jsx)(g,{toc:p,className:t,linkClassName:r,...h})}},7745:(e,n,t)=>{t.d(n,{A:()=>h});t(3696);var i=t(2689),o=t(7254),a=t(2989),s=t(2540);function r(){return(0,s.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(8670),m=t(8894);function u(e){let{className:n}=e;return(0,s.jsx)(m.A,{type:"caution",title:(0,s.jsx)(r,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(u,{...e})]})}},4241:(e,n,t)=>{t.d(n,{R:()=>f,X:()=>v});var i=t(9730),o=t(7004),a=(t(3696),t(8474)),s=t(3792);const r="example_GJdX",l="inlineButton_hXX_",c="blockButton_zLyZ";var d=t(8319),m=t(4452),u=t.n(m),h=t(2540);const g=e=>(e?.toString()??"").trim().split("\n").map((e=>"'"===e?"":e)).join("\n"),f=e=>{let{children:n}=e;const t=g(n),{siteConfig:o}=(0,d.A)();return(0,h.jsxs)("div",{className:u()(r),children:[(0,h.jsx)(i.A,{children:t}),(0,h.jsx)(s.$n,{variant:"tertiary",className:c,onClick:()=>{const e=(0,a.gQ)(t,o.baseUrl);document.location.href=e.toString()},children:"Probeer uit \u25b6\ufe0e"})]})},v=e=>{let{children:n}=e;const t=g(n),{siteConfig:i}=(0,d.A)();return(0,h.jsxs)("span",{className:u()(r),children:[(0,h.jsx)(o.A,{children:t}),(0,h.jsx)(s.$n,{className:l,variant:"tertiary",onClick:()=>{const e=(0,a.gQ)(t,i.baseUrl);document.location.href=e.toString()},children:"\u25b6\ufe0e"})]})}},8474:(e,n,t)=>{t.d(n,{QM:()=>i,gQ:()=>o});const i=e=>{const n=atob(e);return(new TextDecoder).decode(Uint8Array.from(n,(e=>e.codePointAt(0))))},o=(e,n)=>{const t=(e=>{const n=(new TextEncoder).encode(e),t=Array.from(n,(e=>String.fromCodePoint(e))).join("");return btoa(t)})(e),i=new URL(document.location.href);return i.pathname=`${n}probeer-het`,i.hash=`code/${t}`,i}},2331:(e,n,t)=>{t.d(n,{A:()=>a});var i=t(55),o=t(4241);const a={...i.A,Example:o.R,LineExample:o.X}}}]);