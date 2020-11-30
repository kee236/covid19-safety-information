(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Diagram-bc6ca62a80a566297b80cc0a8b692c53.png"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(86)),i={id:"plan",title:"Planning the Work"},c={unversionedId:"plan",id:"plan",isDocsHomePage:!1,title:"Planning the Work",description:"Skills and Conversation Scenarios",source:"@site/docs/plan.md",slug:"/plan",permalink:"/covid19-safety-information/docs/plan",editUrl:"https://github.com/romanenko/covid19-safety-information/tree/main/docs/docs/plan.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/covid19-safety-information/docs/"},next:{title:"Training Wit.ai",permalink:"/covid19-safety-information/docs/wit-ai"}},s=[{value:"Skills and Conversation Scenarios",id:"skills-and-conversation-scenarios",children:[]},{value:"Dialog Example",id:"dialog-example",children:[]}],l={rightToc:s};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"skills-and-conversation-scenarios"},"Skills and Conversation Scenarios"),Object(o.b)("p",null,"Users will discover your bot via link, or by visiting a Facebook page and start chatting. It can also be embedded to any webpage ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/"}),"via Facebook Chat Plugin"),". "),Object(o.b)("p",null,"Once the conversation started \u2014 bot should ",Object(o.b)("strong",{parentName:"p"},"greet the user")," with introductory message, describing its purpose and giving a hint of how to start interaction \u2014 by ",Object(o.b)("strong",{parentName:"p"},"asking what activity user is scheming to do"),". After that, bot will ",Object(o.b)("strong",{parentName:"p"},"ask three questions")," to learn more about the environment and social distancing factors, ",Object(o.b)("strong",{parentName:"p"},"evaluate the risk")," and ",Object(o.b)("strong",{parentName:"p"},"end the conversation")," with a relevant link to read more about the activity on CDC website."),Object(o.b)("p",null,"This brings you and your students to the three skills, you need your bot to have:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Greet the user and provide instructions"),Object(o.b)("li",{parentName:"ol"},"Perform a simple quiz"),Object(o.b)("li",{parentName:"ol"},"Handle gibberish (random input) and politely bring user back to known scenarios")),Object(o.b)("p",null,"You will use Facebook and its ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/messenger-platform/"}),"Messenger Platform")," to provide conversational interface to the user, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://wit.ai"}),"Wit.ai")," to make it understand input in natural language and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://airtable.com"}),"Airtable")," to store health information about the activities and to keep the progress of the Quiz."),Object(o.b)("p",null,"This is the overall flow of what you are going to implement:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/Diagram.png",src:n(146).default})),Object(o.b)("h2",{id:"dialog-example"},"Dialog Example"),Object(o.b)("p",null,"Example of conversation the user might have with your bot:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'\ud83e\udd16: Hey! Nice to meet you! You can ask me for advice whether it is safe\n        to perform an activity in COVID-19 pandemic times. For example: \n    "Is is safe to go to a restaurant?"\n\n\ud83d\udc69\u200d\ud83e\uddb0: Is visiting a hair salon safe?\n\n\ud83e\udd16: How possible you and people around you will wear a mask?\n\n   [ \ud83d\ude37  |  \ud83e\udd37\u200d\u2640\ufe0f  | \ud83d\ude42  ]\n\n\ud83d\udc69\u200d\ud83e\uddb0: \ud83d\ude37 \n\n\ud83e\udd16: How crowded the place will be? \n\n    [\ud83e\uddcd\u200d\u2640\ufe0f | \ud83d\udc6b  | \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66  ]\n\n\ud83d\udc69\u200d\ud83e\uddb0: \ud83e\uddcd\u200d\u2640\ufe0f\n\n\ud83e\udd16: How enclosed the space will be around you?\n\n    [ \ud83e\udd38\u200d\u2640\ufe0f  |  \ud83e\udd37\u200d\u2640\ufe0f  | \ud83c\udfe1  ]\n\n\ud83d\udc69\u200d\ud83e\uddb0: \ud83e\udd38\u200d\u2640\ufe0f\n\n\ud83e\udd16: Ok! Seems like visiting a hair salon is a safe thing to do! \n    Learn more about CDC guidelines in: https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/personal-social-activities.html#nails\n\n\ud83e\udd16: Try asking me about another activity. Like: "Is it safe to go to the gym?"\n\n// And so on...\n')))}p.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);