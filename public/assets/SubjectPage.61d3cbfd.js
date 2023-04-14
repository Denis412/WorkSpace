import{Q as v}from"./QPage.85506c96.js";import{a as q,u as x,b as I,L as j}from"./queries.dad14669.js";import{c as w,a as f,h as B,b as $,g as z,m as n,n as u,p as b,X as c,z as g,W as C,Y as T,Z as A,q as _,T as d,aj as D}from"./index.546e37fb.js";import{Q as N}from"./QList.b68f77a2.js";import{Q as L}from"./QItem.ece6d44b.js";const P=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],R=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Q=w({name:"QSkeleton",props:{...q,tag:{type:String,default:"div"},type:{type:String,validator:e=>P.includes(e),default:"rect"},animation:{type:String,validator:e=>R.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:a}){const i=z(),s=x(e,i.proxy.$q),o=f(()=>{const t=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:t[0],height:t[1]}}),r=f(()=>`q-skeleton q-skeleton--${s.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>B(e.tag,{class:r.value,style:o.value},$(a.default))}});const V={key:0,class:"text-h6 text-bold q-mb-lg"},S={__name:"SubjectTableItem",props:{tableItem:Array,name:String},setup(e){const a=e;return(i,s)=>(n(),u(L,{class:"col-3 column"},{default:b(()=>{var o;return[(o=a.tableItem)!=null&&o.length?(n(),c("div",V,g(a.name),1)):C("",!0),(n(!0),c(T,null,A(a.tableItem,(r,t)=>(n(),c("div",{class:"q-mb-lg",key:t},g(r.name),1))),128))]}),_:1}))}},E={class:"q-pa-lg"},F={key:1,class:"text-h3"},W={__name:"SubjectTable",props:{title:String,groups:Array,information:Array,loading:Boolean},setup(e){const a=e;return(i,s)=>(n(),c("div",E,[e.loading?(n(),u(Q,{key:0,width:"300px",height:"100px",type:"text"})):(n(),c("div",F,g(a.title),1)),e.loading?(n(),u(Q,{key:2,height:"200px"})):(n(),u(N,{key:3,class:"row wrap"},{default:b(()=>[_(S,{tableItem:a.groups,name:"\u0413\u0440\u0443\u043F\u043F\u044B"},null,8,["tableItem"]),_(S,{tableItem:a.information,name:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"},null,8,["tableItem"])]),_:1}))]))}},J={__name:"SubjectPage",setup(e){const i=D().params.id,{result:s,loading:o}=I(j,{id:i}),r=()=>{var m,l;const t=(l=(m=s.value)==null?void 0:m.get_subject)==null?void 0:l.fullname;return(t==null?void 0:t.first_name)+" "+(t==null?void 0:t.last_name)};return(t,m)=>(n(),u(v,null,{default:b(()=>{var l,h,p,k,y;return[_(W,{loading:d(o),title:r(),groups:(h=(l=d(s))==null?void 0:l.get_subject)==null?void 0:h.group,information:[{name:r()},{name:(y=(k=(p=d(s))==null?void 0:p.get_subject)==null?void 0:k.email)==null?void 0:y.email}]},null,8,["loading","title","groups","information"])]}),_:1}))}};export{J as default};
