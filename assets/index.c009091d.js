var K=Object.defineProperty,G=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var M=(t,r,i)=>r in t?K(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,E=(t,r)=>{for(var i in r||(r={}))j.call(r,i)&&M(t,i,r[i]);if(T)for(var i of T(r))X.call(r,i)&&M(t,i,r[i]);return t},B=(t,r)=>G(t,W(r));import{j as e,a,L as k,r as S,n as z,R as N,C as Z,S as $,b as _,c as ee,B as te,d as ne,e as x,f as ie}from"./vendor.ddea60b6.js";const re=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}};re();function ae(){return e("header",{children:e("nav",{children:a("ul",{children:[e("li",{children:e(k,{to:"/mypf/",children:"Home"})}),e("li",{children:e(k,{to:"/mypf/quiz",children:"Quizlet"})}),e("li",{children:e(k,{to:"/mypf/tenzies",children:"Tenzies"})}),e("li",{children:e(k,{to:"/mypf/notes",children:"Notes"})})]})})})}var F="/mypf/assets/quiz.f1a1ea9f.png",P="/mypf/assets/tenzies.93dc0cd8.png",D="/mypf/assets/notes.26af33aa.png";function le(){return a("div",{className:"home",children:[a("div",{className:"heading",children:[e(k,{to:"/mypf/quiz",children:e("img",{className:"main-img",src:F,alt:F})}),e(k,{to:"/mypf/tenzies",children:e("img",{className:"main-img",src:P,alt:P})}),e(k,{to:"/mypf/notes",children:e("img",{className:"main-img",src:D,alt:D})})]}),e("div",{className:"heading",children:"react JS"})]})}var Q="data:image/png;base64,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",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB2CAYAAAAusLpdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAScSURBVHgB7dxdbhtVGIDh7zvjqIlSyHBTqVcZJEDiirAC0hXADugO2h0UVgCsoHQFhRU0XUFyh1QUkgtEEKnUIDXEbuL5OGPjkh/XHs8c2/PzPlIbe+r+qHl1zvE5k6hUyMHRWXIe9WPtR7FGkmTX1CRxLtrwD+LBi8wG1000fnttKPYX44l/gcqJ//lk+OfoiYoNH6seZs/TtP+3qRxa3/+I+ienp+uHn3+oJ4LcVOZsFImzlUQ0ja8E4uPwn8BE8sSwLD5C/2/e849OUkmfpxe697q7ukdo45UKKovlQiTJRhP1gTjpbGahmMnWMJjhKNNI/4WWpvY8TWXn47trO4LxQe0eWLy+fppcGVUit+lHlNhPNUnjYynI/2fu+FHs576lO5/cub0nLaQHL3uPCWUOsrWY6E56nj5p0+ilvx13TTBfPi4191P3ov/Dp3fXDqXBCGrBsmmxb/bkoztrP0oDEdSy+FHLL+i/bVpYBLVsDQuLoKqiIWERVNX4sHrndq+ui3cnqBa/bXOrowf7x93vdl9ZNU8PJiCoivLvBh9u9Hu7vx6dbUuNEFSV+dEq6uizg+PeI6kJ1lB1UZO1FSNUXWRrqxV9VvUpkKDqpAZTIEHVkIl9U9WoCKqmsqj2sztFKoagakzN7lctKoKquapFRVANUKWoCKohqhIVQTXIICp/BihLRFANk50BLnNLgaAaaJn7VATVUIOoXr75WhaMoBrMzL5/8dfrLVkggmo0izuu8/SXo7NEFoSgms4fKK92dGHbCQTVAiayvajtBIJqicF2wgIW6QTVItkifd7rKYJqFYtvddxTmSOCah3bmud6iqBaKFtPzevedIJqqWhFH8/jC0kJqq38/tT7F+HP+wiqxeYx9RFUy4We+giq7bKp7033oQRCUBB17kGoDU+CgmQbnqEOkAkKA9kBcogFOkHhrWyBLiURFP7nF+j7f5ZboBMUrtBIH5XZRiAoXGNxmW0EgsIN2TZC0VGKoDBG8VGKoDBW0VGKoPAOxUYpgsI7FRmlCAoT+FGq17s/y+8gKEykHXkwy+sJCpP53fNZzvgIClN1Opr7VmGCwlTZnQgvfs/3XVwICrlEK9FXeV5HUMgl7xYCQSEni293u1OnPYJCbnkW5wSF3LLF+bRpj6Awk2k75wSFmbhIvpz46wLMYNq0R1CY2aRpj6Aws0nTHkFhZpOmPYJCIe+dd8cexRAUCnFmBIWAXPTF2MsCFGLxuBvvCAqFOSfbN64JUJBzemPaIygUZqJb17cPCAol3LxHiqBQilMlKIRz/RiGoFBKto66/JygUJLFf7yyzdEzgkJp/5x3740eExRK00vTHkGhNLU0GT0mKJR36aCYoBCAxaMdc4JCEKMdc4JCEBpJkn0kKAQxeqdHUAhi9E6PoBBG5D7LPhAUwjDlXR5CGm4dEBSCiU9PE4JCMP1VJSgElDqmPISjJoxQCEiVEQrhONENgkIwZv0PCArBqHOMUAjHlEU5AiMoBEVQCMfYNkBQHA4jMIJCUASFoAgKQREUgiIoBEVQCIqgEI7KIUEhKIJCUASFYNSY8hDYv8YLzEeVWA6NAAAAAElFTkSuQmCC";function se(t){const[r,i]=S.exports.useState([]),[d,n]=S.exports.useState(0),[l,h]=S.exports.useState(!1),[g,o]=S.exports.useState([]);function A(s){const{name:m,value:p,type:y,checked:C}=s.target;i(R=>B(E({},R),{[m]:y==="checkbox"?C:p}))}function u(s){s.preventDefault();var m=t.data.map(C=>C.cor),p=[];for(const C in r){const R=r[C];p.push(R)}var y=p.filter(function(C){return m.indexOf(C)>-1});o(y),n(y.length),h(!0)}function f(s){s.preventDefault(location.reload()),h(!1),i([])}return a("div",{className:"quiz",children:[e("img",{className:"topRectQuiz",src:Q,alt:Q}),e("img",{className:"botRectQuiz",src:q,alt:q}),a("form",{className:"qBox",onSubmit:l?f:u,children:[t.data.map(s=>a("div",{children:[a("div",{className:"question",children:[e("h4",{dangerouslySetInnerHTML:{__html:s.que}}),a("div",{className:"radio-toolbar",children:[s.ans.map(m=>a("div",{className:"rad-input",children:[e("input",{type:"radio",id:m,name:s.id,value:m,onChange:A,disabled:l&&!0}),e("label",{className:"rad-label",htmlFor:m,dangerouslySetInnerHTML:{__html:m}})]},m)),l&&e("div",{className:"correct",children:g.includes(`${s.cor}`)?a("div",{className:"good",children:["\u2714 ",e("span",{dangerouslySetInnerHTML:{__html:s.cor}})]}):a("div",{className:"bad",children:["\u2716 ",e("span",{dangerouslySetInnerHTML:{__html:s.cor}})]})})]})]}),e("hr",{})]},s.id)),l?e("button",{className:"subBut",children:"Try again"}):e("button",{className:"subBut",children:"Submit"})]}),l&&a("div",{className:"score",children:["Score is ",d,"/",t.total," and ",d/t.total*100,"%"]})]})}function oe(t){return a("div",{className:"error",children:[e("h1",{children:"Error some thing wrong."}),e("hr",{}),e("h3",{children:t.err.message}),e("hr",{}),e("h1",{children:"404"})]})}function ce(t){return console.log(t),a("div",{className:"loading",children:[e("h1",{children:"Loading"}),e("div",{className:"lds-dual-ring"})]})}function ue(t){const[r,i]=S.exports.useState(null),[d,n]=S.exports.useState(!1),[l,h]=S.exports.useState([]);S.exports.useEffect(()=>{fetch(t.url).then(o=>o.json()).then(o=>{h(o.results),n(!0)}).catch(o=>{console.log(o),i(o),n(!0)})},[]);function g(){var o=[];for(let u=0;u<l.length;u++){let f=l.map(p=>p.question),s=l.map(p=>p.incorrect_answers.map(y=>y)),m=l.map(p=>p.correct_answer);var A=Math.floor(Math.random()*4);s[u].splice(A,0,m[u]),o.push({id:z(),que:f[u],cor:m[u],ans:s[u]})}return o}return r?e(oe,{err:r}):d?e(se,{data:g(),total:t.totalScore}):e(ce,{loading:d})}function de(){const[t,r]=S.exports.useState({cate:9,ques:5,diffi:"easy"}),[i,d]=S.exports.useState(!1),n=`https://opentdb.com/api.php?amount=${t.ques}&category=${t.cate}&difficulty=${t.diffi}&type=multiple`;function l(g){const{name:o,value:A,type:u,checked:f}=g.target;r(s=>B(E({},s),{[o]:u==="checkbox"?f:A}))}function h(g){g.preventDefault(),d(!0)}return e("div",{children:i?e(ue,{url:n,start:i,totalScore:t.ques}):a("div",{className:"start",children:[e("img",{className:"topRect",src:Q,alt:Q}),e("img",{className:"botRect",src:q,alt:q}),a("div",{className:"content",children:[e("h1",{children:"Quizzical"}),e("p",{children:"Test your knowledge"}),a("form",{onSubmit:h,children:[e("label",{className:"main-label",children:"Category"}),a("select",{id:"cate",value:t.cate,onChange:l,name:"cate",children:[e("option",{value:"9",children:"General Knowladge"}),e("option",{value:"10",children:"Entertainment: Book"}),e("option",{value:"11",children:"Entertainment: Film"}),e("option",{value:"12",children:"Entertainment: Music"}),e("option",{value:"17",children:"Nature and science"}),e("option",{value:"18",children:"Science: Computer"}),e("option",{value:"21",children:"Sports"}),e("option",{value:"23",children:"History"}),e("option",{value:"24",children:"Politics"}),e("option",{value:"25",children:"Art"}),e("option",{value:"27",children:"Animals"})]}),e("label",{className:"main-label",children:"Total Number of question"}),a("select",{id:"ques",value:t.ques,onChange:l,name:"ques",children:[e("option",{value:"5",children:"5"}),e("option",{value:"10",children:"10"}),e("option",{value:"15",children:"15"}),e("option",{value:"20",children:"20"})]}),e("label",{className:"main-label",children:"Difficulty"}),a("select",{id:"diffi",value:t.diffi,onChange:l,name:"diffi",children:[e("option",{value:"easy",children:"Easy"}),e("option",{value:"medium",children:"Medium"}),e("option",{value:"hard",children:"Hard"})]}),e("button",{className:"but",children:"Start quiz"})]})]})]})})}function he(t){const r={backgroundColor:t.isHeld?"#59E391":"white"};return e("div",{className:"die-face",style:r,onClick:t.holdDice,children:e("div",{className:`dot dot-${t.value}`})})}function me(){const[t,r]=N.useState(y()),[i,d]=N.useState(!1),[n,l]=N.useState(0),[h,g]=N.useState(0),o=N.useRef(null);var A=JSON.parse(localStorage.getItem("clicks")),u=JSON.parse(localStorage.getItem("time")),f=JSON.parse(localStorage.getItem("user"));const[s,m]=N.useState({clicks:A,totalTime:u,user:""});N.useEffect(()=>{const c=t.every(b=>b.isHeld),v=t[0].value,I=t.every(b=>b.value===v);c&&I&&d(!0),n===0&&m(b=>B(E({},b),{user:""})),i===!0&&(A===null?(localStorage.setItem("clicks",JSON.stringify(n)),localStorage.setItem("time",JSON.stringify(h)),localStorage.setItem("user",JSON.stringify(s.user)),m({clicks:n,totalTime:h})):A>n&&u>h&&(localStorage.setItem("clicks",JSON.stringify(n)),localStorage.setItem("time",JSON.stringify(h)),localStorage.setItem("user",JSON.stringify(s.user)),m({clicks:n,totalTime:h})))},[t,i]);function p(){return{value:Math.ceil(Math.random()*6),isHeld:!1,id:z()}}function y(){const c=[];for(let v=0;v<10;v++)c.push(p());return c}function C(){i?(d(!1),r(y()),l(0),clearInterval(o.current),g(0)):(r(c=>c.map(v=>v.isHeld?v:p())),l(c=>c+1),n===0&&(o.current=setInterval(()=>{g(c=>c+1)},1e3)))}function R(c){r(v=>v.map(I=>I.id===c?B(E({},I),{isHeld:!I.isHeld}):I))}const H=t.map(c=>e(he,{value:c.value,isHeld:c.isHeld,holdDice:()=>R(c.id)},c.id)),U=c=>{const v=`0${c%60}`.slice(-2),b=`0${`${Math.floor(c/60)}`%60}`.slice(-2);return`0${Math.floor(c/3600)}`.slice(-2),`min ${b} : ${v} sec`};function L(c){const{name:v,value:I,type:b,checked:V}=c.target;m(Y=>B(E({},Y),{[v]:b==="checkbox"?V:I}))}function O(c){c.preventDefault(),s.user===""?alert("Enter your name"):C()}function J(){m({clicks:0,totalTime:0,user:""}),localStorage.clear()}let w;return i?w="New Game":n===0?w="Start":w="Roll",a("main",{className:"tenzies",children:[i&&e(Z,{}),e("h1",{className:"tenTitle",children:"Tenzies"}),e("p",{className:"instructions",children:"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}),a("p",{children:["Best score by :  ",e("strong",{style:{color:"red"},children:f||""}),"  ",e("br",{}),A?s.clicks:"0"," clicks in ",u?U(s.totalTime):"0"]}),a("h4",{children:["Total clicks ",n,a("span",{style:{backgroundColor:"#5035FF",color:"white",borderRadius:"5px",padding:"5px",margin:"5px"},children:["in ",i&&clearInterval(o.current),U(h)]})]}),a("h4",{children:["Good Luck! ",a("span",{style:{color:"red"},children:[" ",a("em",{children:[" ",s.user&&s.user," "]})," "]})]}),e("div",{className:"dice-container",children:n>0&&!i&&H}),n===0?a("div",{className:"form-input",children:[e("label",{htmlFor:"user",children:"Enter Name"}),e("input",{type:"text",name:"user",placeholder:"Enter your name",value:s.user?s.user:"",onChange:L,required:!0}),e("button",{className:"roll-dice",onClick:O,children:w}),e("button",{className:"roll-dice",style:{backgroundColor:"red",margin:"10px"},onClick:J,children:"Reset"})]}):e("div",{children:e("button",{className:"roll-dice",onClick:C,children:w})})]})}function Ae(t){const r=t.notes.map((i,d)=>e("div",{children:a("div",{className:`title ${i.id===t.currentNote.id?"selected-note":""}`,onClick:()=>t.setCurrentNoteId(i.id),children:[e("h4",{className:"text-snippet",children:i.body.split(`
`)[0]}),e("button",{className:"delete-btn",onClick:n=>t.deleteNote(n,i.id),children:e("i",{className:"gg-trash trash-icon"})})]})},i.id));return a("section",{className:"pane sidebar",children:[a("div",{className:"sidebar--header",children:[e("h3",{children:"Notes"}),e("button",{className:"new-note",onClick:t.newNote,children:"+"})]}),r]})}function fe({currentNote:t,updateNote:r}){const[i,d]=N.useState("write"),n=new $.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0});return e("section",{className:"pane editor",children:e(_,{value:t.body,onChange:r,selectedTab:i,onTabChange:d,generateMarkdownPreview:l=>Promise.resolve(n.makeHtml(l)),minEditorHeight:80,heightUnits:"vh"})})}function ge(){const[t,r]=N.useState(()=>JSON.parse(localStorage.getItem("notes"))||[]),[i,d]=N.useState(t[0]&&t[0].id||"");N.useEffect(()=>{localStorage.setItem("notes",JSON.stringify(t))},[t]);function n(){const o={id:z(),body:"# Type your markdown note's title here"};r(A=>[o,...A]),d(o.id)}function l(o){r(A=>{const u=[];for(let f=0;f<A.length;f++){const s=A[f];s.id===i?u.unshift(B(E({},s),{body:o})):u.push(s)}return u})}function h(o,A){o.stopPropagation(),r(u=>u.filter(f=>f.id!==A))}function g(){return t.find(o=>o.id===i)||t[0]}return e("main",{className:"notes",children:t.length>0?a(ee,{sizes:[30,70],direction:"horizontal",className:"split",children:[e(Ae,{notes:t,currentNote:g(),setCurrentNoteId:d,newNote:n,deleteNote:h}),i&&t.length>0&&e(fe,{currentNote:g(),updateNote:l})]}):a("div",{className:"no-notes",children:[e("h1",{children:"You have no notes"}),e("button",{className:"first-note",onClick:n,children:"Create one now"})]})})}function pe(){return e("div",{children:a(te,{children:[e(ae,{}),a(ne,{children:[e(x,{exact:!0,path:"https://umairny.github.io/mypf/",element:e(le,{})}),e(x,{exact:!0,path:"https://umairny.github.io/mypf/quiz",element:e(de,{})}),e(x,{exact:!0,path:"https://umairny.github.io/mypf/tenzies",element:e(me,{})}),e(x,{exact:!0,path:"https://umairny.github.io/mypf/notes",element:e(ge,{})})]})]})})}ie.render(e(N.StrictMode,{children:e(pe,{})}),document.getElementById("root"));