var Y=Object.defineProperty,K=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var T=(t,r,i)=>r in t?Y(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,b=(t,r)=>{for(var i in r||(r={}))W.call(r,i)&&T(t,i,r[i]);if(U)for(var i of U(r))j.call(r,i)&&T(t,i,r[i]);return t},k=(t,r)=>K(t,G(r));import{j as e,a,r as S,n as q,R as N,C as X,S as Z,b as $,c as _,d as ee}from"./vendor.8de3400a.js";const te=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}};te();function ne(){return e("header",{children:e("nav",{children:a("ul",{children:[e("li",{children:e("a",{href:"/mypf/",children:"Home"})}),e("li",{children:e("a",{href:"/mypf/quiz",children:"Quizlet"})}),e("li",{children:e("a",{href:"/mypf/tenzies",children:"Tenzies"})}),e("li",{children:e("a",{href:"/mypf/notes",children:"Notes"})})]})})})}var M="/mypf/assets/quiz.f1a1ea9f.png",F="/mypf/assets/tenzies.93dc0cd8.png",P="/mypf/assets/notes.26af33aa.png";function re(){return a("div",{className:"home",children:[a("div",{className:"heading",children:[e("a",{href:"/mypf/quiz",children:e("img",{className:"main-img",src:M,alt:M})}),e("a",{href:"/mypf/tenzies",children:e("img",{className:"main-img",src:F,alt:F})}),e("a",{href:"/mypf/notes",children:e("img",{className:"main-img",src:P,alt:P})})]}),e("div",{className:"heading",children:"react JS"})]})}var w="data:image/png;base64,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",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB2CAYAAAAusLpdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAScSURBVHgB7dxdbhtVGIDh7zvjqIlSyHBTqVcZJEDiirAC0hXADugO2h0UVgCsoHQFhRU0XUFyh1QUkgtEEKnUIDXEbuL5OGPjkh/XHs8c2/PzPlIbe+r+qHl1zvE5k6hUyMHRWXIe9WPtR7FGkmTX1CRxLtrwD+LBi8wG1000fnttKPYX44l/gcqJ//lk+OfoiYoNH6seZs/TtP+3qRxa3/+I+ienp+uHn3+oJ4LcVOZsFImzlUQ0ja8E4uPwn8BE8sSwLD5C/2/e849OUkmfpxe697q7ukdo45UKKovlQiTJRhP1gTjpbGahmMnWMJjhKNNI/4WWpvY8TWXn47trO4LxQe0eWLy+fppcGVUit+lHlNhPNUnjYynI/2fu+FHs576lO5/cub0nLaQHL3uPCWUOsrWY6E56nj5p0+ilvx13TTBfPi4191P3ov/Dp3fXDqXBCGrBsmmxb/bkoztrP0oDEdSy+FHLL+i/bVpYBLVsDQuLoKqiIWERVNX4sHrndq+ui3cnqBa/bXOrowf7x93vdl9ZNU8PJiCoivLvBh9u9Hu7vx6dbUuNEFSV+dEq6uizg+PeI6kJ1lB1UZO1FSNUXWRrqxV9VvUpkKDqpAZTIEHVkIl9U9WoCKqmsqj2sztFKoagakzN7lctKoKquapFRVANUKWoCKohqhIVQTXIICp/BihLRFANk50BLnNLgaAaaJn7VATVUIOoXr75WhaMoBrMzL5/8dfrLVkggmo0izuu8/SXo7NEFoSgms4fKK92dGHbCQTVAiayvajtBIJqicF2wgIW6QTVItkifd7rKYJqFYtvddxTmSOCah3bmud6iqBaKFtPzevedIJqqWhFH8/jC0kJqq38/tT7F+HP+wiqxeYx9RFUy4We+giq7bKp7033oQRCUBB17kGoDU+CgmQbnqEOkAkKA9kBcogFOkHhrWyBLiURFP7nF+j7f5ZboBMUrtBIH5XZRiAoXGNxmW0EgsIN2TZC0VGKoDBG8VGKoDBW0VGKoPAOxUYpgsI7FRmlCAoT+FGq17s/y+8gKEykHXkwy+sJCpP53fNZzvgIClN1Opr7VmGCwlTZnQgvfs/3XVwICrlEK9FXeV5HUMgl7xYCQSEni293u1OnPYJCbnkW5wSF3LLF+bRpj6Awk2k75wSFmbhIvpz46wLMYNq0R1CY2aRpj6Aws0nTHkFhZpOmPYJCIe+dd8cexRAUCnFmBIWAXPTF2MsCFGLxuBvvCAqFOSfbN64JUJBzemPaIygUZqJb17cPCAol3LxHiqBQilMlKIRz/RiGoFBKto66/JygUJLFf7yyzdEzgkJp/5x3740eExRK00vTHkGhNLU0GT0mKJR36aCYoBCAxaMdc4JCEKMdc4JCEBpJkn0kKAQxeqdHUAhi9E6PoBBG5D7LPhAUwjDlXR5CGm4dEBSCiU9PE4JCMP1VJSgElDqmPISjJoxQCEiVEQrhONENgkIwZv0PCArBqHOMUAjHlEU5AiMoBEVQCMfYNkBQHA4jMIJCUASFoAgKQREUgiIoBEVQCIqgEI7KIUEhKIJCUASFYNSY8hDYv8YLzEeVWA6NAAAAAElFTkSuQmCC";function ie(t){const[r,i]=S.exports.useState([]),[u,n]=S.exports.useState(0),[l,h]=S.exports.useState(!1),[g,o]=S.exports.useState([]);function A(s){const{name:m,value:p,type:y,checked:C}=s.target;i(B=>k(b({},B),{[m]:y==="checkbox"?C:p}))}function d(s){s.preventDefault();var m=t.data.map(C=>C.cor),p=[];for(const C in r){const B=r[C];p.push(B)}var y=p.filter(function(C){return m.indexOf(C)>-1});o(y),n(y.length),h(!0)}function f(s){s.preventDefault(location.reload()),h(!1),i([])}return a("div",{className:"quiz",children:[e("img",{className:"topRectQuiz",src:w,alt:w}),e("img",{className:"botRectQuiz",src:x,alt:x}),a("form",{className:"qBox",onSubmit:l?f:d,children:[t.data.map(s=>a("div",{children:[a("div",{className:"question",children:[e("h4",{dangerouslySetInnerHTML:{__html:s.que}}),a("div",{className:"radio-toolbar",children:[s.ans.map(m=>a("div",{className:"rad-input",children:[e("input",{type:"radio",id:m,name:s.id,value:m,onChange:A,disabled:l&&!0}),e("label",{className:"rad-label",htmlFor:m,dangerouslySetInnerHTML:{__html:m}})]},m)),l&&e("div",{className:"correct",children:g.includes(`${s.cor}`)?a("div",{className:"good",children:["\u2714 ",e("span",{dangerouslySetInnerHTML:{__html:s.cor}})]}):a("div",{className:"bad",children:["\u2716 ",e("span",{dangerouslySetInnerHTML:{__html:s.cor}})]})})]})]}),e("hr",{})]},s.id)),l?e("button",{className:"subBut",children:"Try again"}):e("button",{className:"subBut",children:"Submit"})]}),l&&a("div",{className:"score",children:["Score is ",u,"/",t.total," and ",u/t.total*100,"%"]})]})}function ae(t){return a("div",{className:"error",children:[e("h1",{children:"Error some thing wrong."}),e("hr",{}),e("h3",{children:t.err.message}),e("hr",{}),e("h1",{children:"404"})]})}function le(t){return console.log(t),a("div",{className:"loading",children:[e("h1",{children:"Loading"}),e("div",{className:"lds-dual-ring"})]})}function se(t){const[r,i]=S.exports.useState(null),[u,n]=S.exports.useState(!1),[l,h]=S.exports.useState([]);S.exports.useEffect(()=>{fetch(t.url).then(o=>o.json()).then(o=>{h(o.results),n(!0)}).catch(o=>{console.log(o),i(o),n(!0)})},[]);function g(){var o=[];for(let d=0;d<l.length;d++){let f=l.map(p=>p.question),s=l.map(p=>p.incorrect_answers.map(y=>y)),m=l.map(p=>p.correct_answer);var A=Math.floor(Math.random()*4);s[d].splice(A,0,m[d]),o.push({id:q(),que:f[d],cor:m[d],ans:s[d]})}return o}return r?e(ae,{err:r}):u?e(ie,{data:g(),total:t.totalScore}):e(le,{loading:u})}function oe(){const[t,r]=S.exports.useState({cate:9,ques:5,diffi:"easy"}),[i,u]=S.exports.useState(!1),n=`https://opentdb.com/api.php?amount=${t.ques}&category=${t.cate}&difficulty=${t.diffi}&type=multiple`;function l(g){const{name:o,value:A,type:d,checked:f}=g.target;r(s=>k(b({},s),{[o]:d==="checkbox"?f:A}))}function h(g){g.preventDefault(),u(!0)}return e("div",{children:i?e(se,{url:n,start:i,totalScore:t.ques}):a("div",{className:"start",children:[e("img",{className:"topRect",src:w,alt:w}),e("img",{className:"botRect",src:x,alt:x}),a("div",{className:"content",children:[e("h1",{children:"Quizzical"}),e("p",{children:"Test your knowledge"}),a("form",{onSubmit:h,children:[e("label",{className:"main-label",children:"Category"}),a("select",{id:"cate",value:t.cate,onChange:l,name:"cate",children:[e("option",{value:"9",children:"General Knowladge"}),e("option",{value:"10",children:"Entertainment: Book"}),e("option",{value:"11",children:"Entertainment: Film"}),e("option",{value:"12",children:"Entertainment: Music"}),e("option",{value:"17",children:"Nature and science"}),e("option",{value:"18",children:"Science: Computer"}),e("option",{value:"21",children:"Sports"}),e("option",{value:"23",children:"History"}),e("option",{value:"24",children:"Politics"}),e("option",{value:"25",children:"Art"}),e("option",{value:"27",children:"Animals"})]}),e("label",{className:"main-label",children:"Total Number of question"}),a("select",{id:"ques",value:t.ques,onChange:l,name:"ques",children:[e("option",{value:"5",children:"5"}),e("option",{value:"10",children:"10"}),e("option",{value:"15",children:"15"}),e("option",{value:"20",children:"20"})]}),e("label",{className:"main-label",children:"Difficulty"}),a("select",{id:"diffi",value:t.diffi,onChange:l,name:"diffi",children:[e("option",{value:"easy",children:"Easy"}),e("option",{value:"medium",children:"Medium"}),e("option",{value:"hard",children:"Hard"})]}),e("button",{className:"but",children:"Start quiz"})]})]})]})})}function ce(t){const r={backgroundColor:t.isHeld?"#59E391":"white"};return e("div",{className:"die-face",style:r,onClick:t.holdDice,children:e("div",{className:`dot dot-${t.value}`})})}function de(){const[t,r]=N.useState(y()),[i,u]=N.useState(!1),[n,l]=N.useState(0),[h,g]=N.useState(0),o=N.useRef(null);var A=JSON.parse(localStorage.getItem("clicks")),d=JSON.parse(localStorage.getItem("time")),f=JSON.parse(localStorage.getItem("user"));const[s,m]=N.useState({clicks:A,totalTime:d,user:""});N.useEffect(()=>{const c=t.every(E=>E.isHeld),v=t[0].value,I=t.every(E=>E.value===v);c&&I&&u(!0),n===0&&m(E=>k(b({},E),{user:""})),i===!0&&(A===null?(localStorage.setItem("clicks",JSON.stringify(n)),localStorage.setItem("time",JSON.stringify(h)),localStorage.setItem("user",JSON.stringify(s.user)),m({clicks:n,totalTime:h})):A>n&&d>h&&(localStorage.setItem("clicks",JSON.stringify(n)),localStorage.setItem("time",JSON.stringify(h)),localStorage.setItem("user",JSON.stringify(s.user)),m({clicks:n,totalTime:h})))},[t,i]);function p(){return{value:Math.ceil(Math.random()*6),isHeld:!1,id:q()}}function y(){const c=[];for(let v=0;v<10;v++)c.push(p());return c}function C(){i?(u(!1),r(y()),l(0),clearInterval(o.current),g(0)):(r(c=>c.map(v=>v.isHeld?v:p())),l(c=>c+1),n===0&&(o.current=setInterval(()=>{g(c=>c+1)},1e3)))}function B(c){r(v=>v.map(I=>I.id===c?k(b({},I),{isHeld:!I.isHeld}):I))}const D=t.map(c=>e(ce,{value:c.value,isHeld:c.isHeld,holdDice:()=>B(c.id)},c.id)),z=c=>{const v=`0${c%60}`.slice(-2),E=`0${`${Math.floor(c/60)}`%60}`.slice(-2);return`0${Math.floor(c/3600)}`.slice(-2),`min ${E} : ${v} sec`};function H(c){const{name:v,value:I,type:E,checked:J}=c.target;m(V=>k(b({},V),{[v]:E==="checkbox"?J:I}))}function L(c){c.preventDefault(),s.user===""?alert("Enter your name"):C()}function O(){m({clicks:0,totalTime:0,user:""}),localStorage.clear()}let R;return i?R="New Game":n===0?R="Start":R="Roll",a("main",{className:"tenzies",children:[i&&e(X,{}),e("h1",{className:"tenTitle",children:"Tenzies"}),e("p",{className:"instructions",children:"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}),a("p",{children:["Best score by :  ",e("strong",{style:{color:"red"},children:f||""}),"  ",e("br",{}),A?s.clicks:"0"," clicks in ",d?z(s.totalTime):"0"]}),a("h4",{children:["Total clicks ",n,a("span",{style:{backgroundColor:"#5035FF",color:"white",borderRadius:"5px",padding:"5px",margin:"5px"},children:["in ",i&&clearInterval(o.current),z(h)]})]}),a("h4",{children:["Good Luck! ",a("span",{style:{color:"red"},children:[" ",a("em",{children:[" ",s.user&&s.user," "]})," "]})]}),e("div",{className:"dice-container",children:n>0&&!i&&D}),n===0?a("div",{className:"form-input",children:[e("label",{htmlFor:"user",children:"Enter Name"}),e("input",{type:"text",name:"user",placeholder:"Enter your name",value:s.user?s.user:"",onChange:H,required:!0}),e("button",{className:"roll-dice",onClick:L,children:R}),e("button",{className:"roll-dice",style:{backgroundColor:"red",margin:"10px"},onClick:O,children:"Reset"})]}):e("div",{children:e("button",{className:"roll-dice",onClick:C,children:R})})]})}function ue(t){const r=t.notes.map((i,u)=>e("div",{children:a("div",{className:`title ${i.id===t.currentNote.id?"selected-note":""}`,onClick:()=>t.setCurrentNoteId(i.id),children:[e("h4",{className:"text-snippet",children:i.body.split(`
`)[0]}),e("button",{className:"delete-btn",onClick:n=>t.deleteNote(n,i.id),children:e("i",{className:"gg-trash trash-icon"})})]})},i.id));return a("section",{className:"pane sidebar",children:[a("div",{className:"sidebar--header",children:[e("h3",{children:"Notes"}),e("button",{className:"new-note",onClick:t.newNote,children:"+"})]}),r]})}function he({currentNote:t,updateNote:r}){const[i,u]=N.useState("write"),n=new Z.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0});return e("section",{className:"pane editor",children:e($,{value:t.body,onChange:r,selectedTab:i,onTabChange:u,generateMarkdownPreview:l=>Promise.resolve(n.makeHtml(l)),minEditorHeight:80,heightUnits:"vh"})})}function me(){const[t,r]=N.useState(()=>JSON.parse(localStorage.getItem("notes"))||[]),[i,u]=N.useState(t[0]&&t[0].id||"");N.useEffect(()=>{localStorage.setItem("notes",JSON.stringify(t))},[t]);function n(){const o={id:q(),body:"# Type your markdown note's title here"};r(A=>[o,...A]),u(o.id)}function l(o){r(A=>{const d=[];for(let f=0;f<A.length;f++){const s=A[f];s.id===i?d.unshift(k(b({},s),{body:o})):d.push(s)}return d})}function h(o,A){o.stopPropagation(),r(d=>d.filter(f=>f.id!==A))}function g(){return t.find(o=>o.id===i)||t[0]}return e("main",{className:"notes",children:t.length>0?a(_,{sizes:[30,70],direction:"horizontal",className:"split",children:[e(ue,{notes:t,currentNote:g(),setCurrentNoteId:u,newNote:n,deleteNote:h}),i&&t.length>0&&e(he,{currentNote:g(),updateNote:l})]}):a("div",{className:"no-notes",children:[e("h1",{children:"You have no notes"}),e("button",{className:"first-note",onClick:n,children:"Create one now"})]})})}const Q=({path:t,children:r})=>window.location.pathname===t?r:null;function Ae(){return a("div",{children:[e(ne,{}),e(Q,{path:"/mypf/",children:e(re,{})}),e(Q,{path:"/mypf/quiz",children:e(oe,{})}),e(Q,{path:"/mypf/tenzies",children:e(de,{})}),e(Q,{path:"/mypf/notes",children:e(me,{})})]})}ee.render(e(N.StrictMode,{children:e(Ae,{})}),document.getElementById("root"));