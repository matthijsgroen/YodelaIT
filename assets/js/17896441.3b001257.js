"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8401],{2207:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var s=n(3696),a=n(1825),i=n(6887),l=n(2540);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(2689),m=n(2416),h=n(7254),x=n(3259);function v(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(x.A,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(x.A,{...n,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function p(){const{metadata:e}=c();return(0,l.jsx)(v,{previous:e.previous,next:e.next})}var b=n(8319),g=n(407),f=n(6297),j=n(8670),A=n(9844),L=n(4339);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=N[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(g.A,{to:n,onClick:s,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,b.A)(),{pluginId:a}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,f.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function k(e){let{className:t}=e;const n=(0,L.r)();return n.banner?(0,l.jsx)(T,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,L.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function H(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,l.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(H,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var B=n(7311),M=n(2017);const E={lastUpdated:"lastUpdated_pbO5"};function I(e){return(0,l.jsx)("div",{className:(0,u.A)(j.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(M.A,{...e})})})}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(B.A,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",E.lastUpdated),children:(n||s)&&(0,l.jsx)(w,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function S(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:i}=e,o=i.length>0,r=!!(t||n||a);return o||r?(0,l.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(I,{tags:i}),r&&(0,l.jsx)(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var G=n(9053),R=n(2011);const P={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};function D(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",P.tocCollapsibleButton,!t&&P.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const V={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function F(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,G.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(V.tocCollapsible,!i&&V.tocCollapsibleExpanded,n),children:[(0,l.jsx)(D,{collapsed:i,onClick:o}),(0,l.jsx)(G.N,{lazy:!0,className:V.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(R.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const z={tocMobile:"tocMobile_Ojys"};function X(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,z.tocMobile)})}var $=n(5217);function Q(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)($.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var q=n(3105),W=n(1587);function J(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(q.A,{as:"h1",children:n})}),(0,l.jsx)(W.A,{children:t})]})}var Z=n(3392),K=n(5548),Y=n(9228);function ee(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_sfvy"};function ne(){const e=(0,Y.A)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(g.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ee,{className:te.breadcrumbHomeIcon})})})}const se={breadcrumbsContainer:"breadcrumbsContainer_T5ub"};function ae(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(g.A,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function ie(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function le(){const e=(0,Z.OF)(),t=(0,K.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,se.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ne,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ie,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(ae,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var oe=n(7745);const re={docItemContainer:"docItemContainer_tjFy",docItemCol:"docItemCol_Qr34"};function ce(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(X,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(Q,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&re.docItemCol),children:[s&&(0,l.jsx)(oe.A,{}),(0,l.jsx)(k,{}),(0,l.jsxs)("div",{className:re.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(le,{}),(0,l.jsx)(y,{}),n.mobile,(0,l.jsx)(J,{children:t}),(0,l.jsx)(S,{})]}),(0,l.jsx)(p,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function de(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(ce,{children:(0,l.jsx)(n,{})})]})})}},7311:(e,t,n)=>{n.d(t,{A:()=>d});n(3696);var s=n(7254),a=n(8670),i=n(407),l=n(2689);const o={iconEdit:"iconEdit_bHB7"};var r=n(2540);function c(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.A)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(i.A,{to:t,className:a.G.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},3259:(e,t,n)=>{n.d(t,{A:()=>l});n(3696);var s=n(2689),a=n(407),i=n(2540);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},5217:(e,t,n)=>{n.d(t,{A:()=>c});n(3696);var s=n(2689),a=n(2011);const i={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"};var l=n(2540);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.A,{...n,linkClassName:o,linkActiveClassName:r})})}},2011:(e,t,n)=>{n.d(t,{A:()=>v});var s=n(3696),a=n(4981);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(407),m=n(2540);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const v=(0,a.p)(),p=c??v.tableOfContents.minHeadingLevel,b=u??v.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:b});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:b}}),[o,r,p,b])),(0,m.jsx)(x,{toc:g,className:n,linkClassName:o,...h})}},4611:(e,t,n)=>{n.d(t,{A:()=>o});n(3696);var s=n(2689),a=n(407);const i={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var l=n(2540);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(a.A,{href:t,className:(0,s.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},2017:(e,t,n)=>{n.d(t,{A:()=>r});n(3696);var s=n(2689),a=n(7254),i=n(4611);const l={tags:"tags_Ow0B",tag:"tag_DFxh"};var o=n(2540);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{label:t,permalink:n})},n)}))})]})}},7745:(e,t,n)=>{n.d(t,{A:()=>h});n(3696);var s=n(2689),a=n(7254),i=n(2989),l=n(2540);function o(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(8670),u=n(8894);function m(e){let{className:t}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}},4241:(e,t,n)=>{n.d(t,{R:()=>v,X:()=>p});var s=n(9730),a=n(7004),i=(n(3696),n(8474)),l=n(3792);const o="example_GJdX",r="inlineButton_hXX_",c="blockButton_zLyZ";var d=n(8319),u=n(4452),m=n.n(u),h=n(2540);const x=e=>(e?.toString()??"").trim().split("\n").map((e=>"'"===e?"":e)).join("\n"),v=e=>{let{children:t}=e;const n=x(t),{siteConfig:a}=(0,d.A)();return(0,h.jsxs)("div",{className:m()(o),children:[(0,h.jsx)(s.A,{children:n}),(0,h.jsx)(l.$n,{variant:"tertiary",className:c,onClick:()=>{const e=(0,i.gQ)(n,a.baseUrl);document.location.href=e.toString()},children:"Probeer uit \u25b6\ufe0e"})]})},p=e=>{let{children:t}=e;const n=x(t),{siteConfig:s}=(0,d.A)();return(0,h.jsxs)("span",{className:m()(o),children:[(0,h.jsx)(a.A,{children:n}),(0,h.jsx)(l.$n,{className:r,variant:"tertiary",onClick:()=>{const e=(0,i.gQ)(n,s.baseUrl);document.location.href=e.toString()},children:"\u25b6\ufe0e"})]})}},8474:(e,t,n)=>{n.d(t,{QM:()=>s,gQ:()=>a});const s=e=>{const t=atob(e);return(new TextDecoder).decode(Uint8Array.from(t,(e=>e.codePointAt(0))))},a=(e,t)=>{const n=(e=>{const t=(new TextEncoder).encode(e),n=Array.from(t,(e=>String.fromCodePoint(e))).join("");return btoa(n)})(e),s=new URL(document.location.href);return s.pathname=`${t}probeer-het`,s.hash=`code/${n}`,s}},2331:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(55),a=n(4241);const i={...s.A,Example:a.R,LineExample:a.X}}}]);