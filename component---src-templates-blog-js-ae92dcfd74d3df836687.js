(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(e,t,a){"use strict";a.r(t);a(43),a(6);var n=a(0),r=a.n(n),l=a(26),s=a(64),c=a.n(s),o=a(111),i=a.n(o),m=function(e){var t=e.posts;return r.a.createElement("div",{className:"container"},t.filter((function(e){return"article-page"===e.node.frontmatter.templateKey})).map((function(e){var t=e.node;return r.a.createElement("div",{className:"content",style:{border:"1px solid #eaecee",padding:"2em 4em"},key:t.id},r.a.createElement("p",null,r.a.createElement(l.a,{className:"has-text-primary",to:t.fields.slug},t.frontmatter.title),r.a.createElement("span",null," • "),r.a.createElement("small",null,t.frontmatter.date)),r.a.createElement("p",null,t.excerpt,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l.a,{className:"button is-small",to:t.fields.slug},"Keep Reading →")))})))},u=a(224);a.d(t,"default",(function(){return d}));var p=function(e){return e.test?r.a.createElement("span",{disabled:!0,className:"button is-rounded"},e.text):r.a.createElement(l.a,{to:"/blog/"+e.url,className:"button is-rounded"},e.text)},d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.pageContext,t=e.group,a=e.index,n=e.first,l=e.last,s=a-1==1?"":(a-1).toString(),o=(a+1).toString()+"/",d={"@context":"http://schema.org","@type":"WebSite",url:c.a.siteUrl,name:c.a.siteTitle,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:""};return r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Blog | Gatsby Starter Business"),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d))),r.a.createElement("section",{className:"hero is-primary is-bold"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1"},r.a.createElement("div",{className:"section"},r.a.createElement("h1",{className:"title"},"Blog"))))))),r.a.createElement("section",{className:"section"},r.a.createElement(m,{posts:t}),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"buttons is-centered"},r.a.createElement(p,{test:n,url:s,text:"Previous Page"}),r.a.createElement(p,{test:l,url:o,text:"Next Page"})))))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-js-ae92dcfd74d3df836687.js.map