import{a as J,r as I,a6 as pt,w as U,o as be,g as X,j as Ve,a7 as ne,a5 as dt,T as ft,$ as ht,M as mt}from"./index.6ff5d8ca.js";const Tn={dark:{type:Boolean,default:null}};function Nn(e,t){return J(()=>e.dark===null?t.dark.isActive:e.dark)}function _e(e,t,n,i){var r,s=!1,o=0;function u(){r&&clearTimeout(r)}function l(){u(),s=!0}typeof t!="boolean"&&(i=n,n=t,t=void 0);function c(){for(var d=arguments.length,E=new Array(d),h=0;h<d;h++)E[h]=arguments[h];var v=this,m=Date.now()-o;if(s)return;function N(){o=Date.now(),n.apply(v,E)}function O(){r=void 0}i&&!r&&N(),u(),i===void 0&&m>e?N():t!==!0&&(r=setTimeout(i?O:N,i===void 0?e-m:e))}return c.cancel=l,c}function Et(e,t,n){return n===void 0?_e(e,t,!1):_e(e,n,t!==!1)}var ve=function(e,t){return ve=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},ve(e,t)};function gt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ve(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var re=function(){return re=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},re.apply(this,arguments)};function yn(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function xn(e,t,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function u(d){try{c(i.next(d))}catch(E){o(E)}}function l(d){try{c(i.throw(d))}catch(E){o(E)}}function c(d){d.done?s(d.value):r(d.value).then(u,l)}c((i=i.apply(e,t||[])).next())})}function In(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(c){return function(d){return l([c,d])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(i=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],r=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function On(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,s;i<r;i++)(s||!(i in t))&&(s||(s=Array.prototype.slice.call(t,0,i)),s[i]=t[i]);return e.concat(s||Array.prototype.slice.call(t))}function fe(e,t){if(!Boolean(e))throw new Error(t)}function _t(e){return typeof e=="object"&&e!==null}function vt(e,t){if(!Boolean(e))throw new Error(t!=null?t:"Unexpected invariant triggered.")}const Tt=/\r\n|[\n\r]/g;function Te(e,t){let n=0,i=1;for(const r of e.body.matchAll(Tt)){if(typeof r.index=="number"||vt(!1),r.index>=t)break;n=r.index+r[0].length,i+=1}return{line:i,column:t+1-n}}function Nt(e){return Qe(e.source,Te(e.source,e.start))}function Qe(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,r=t.line-1,s=e.locationOffset.line-1,o=t.line+s,u=t.line===1?n:0,l=t.column+u,c=`${e.name}:${o}:${l}
`,d=i.split(/\r\n|[\n\r]/g),E=d[r];if(E.length>120){const h=Math.floor(l/80),v=l%80,m=[];for(let N=0;N<E.length;N+=80)m.push(E.slice(N,N+80));return c+je([[`${o} |`,m[0]],...m.slice(1,h+1).map(N=>["|",N]),["|","^".padStart(v)],["|",m[h+1]]])}return c+je([[`${o-1} |`,d[r-1]],[`${o} |`,E],["|","^".padStart(l)],[`${o+1} |`,d[r+1]]])}function je(e){const t=e.filter(([i,r])=>r!==void 0),n=Math.max(...t.map(([i])=>i.length));return t.map(([i,r])=>i.padStart(n)+(r?" "+r:"")).join(`
`)}function yt(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class ke extends Error{constructor(t,...n){var i,r,s;const{nodes:o,source:u,positions:l,path:c,originalError:d,extensions:E}=yt(n);super(t),this.name="GraphQLError",this.path=c!=null?c:void 0,this.originalError=d!=null?d:void 0,this.nodes=$e(Array.isArray(o)?o:o?[o]:void 0);const h=$e((i=this.nodes)===null||i===void 0?void 0:i.map(m=>m.loc).filter(m=>m!=null));this.source=u!=null?u:h==null||(r=h[0])===null||r===void 0?void 0:r.source,this.positions=l!=null?l:h==null?void 0:h.map(m=>m.start),this.locations=l&&u?l.map(m=>Te(u,m)):h==null?void 0:h.map(m=>Te(m.source,m.start));const v=_t(d==null?void 0:d.extensions)?d==null?void 0:d.extensions:void 0;this.extensions=(s=E!=null?E:v)!==null&&s!==void 0?s:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,ke):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+Nt(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+Qe(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function $e(e){return e===void 0||e.length===0?void 0:e}function x(e,t,n){return new ke(`Syntax Error: ${n}`,{source:e,positions:[t]})}class xt{constructor(t,n,i){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=i}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class qe{constructor(t,n,i,r,s,o){this.kind=t,this.start=n,this.end=i,this.line=r,this.column=s,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const It={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Ot=new Set(Object.keys(It));function An(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&Ot.has(t)}var B;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(B||(B={}));var Ne;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Ne||(Ne={}));var f;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(f||(f={}));function ye(e){return e===9||e===32}function z(e){return e>=48&&e<=57}function Je(e){return e>=97&&e<=122||e>=65&&e<=90}function ze(e){return Je(e)||e===95}function At(e){return Je(e)||z(e)||e===95}function bt(e){var t;let n=Number.MAX_SAFE_INTEGER,i=null,r=-1;for(let o=0;o<e.length;++o){var s;const u=e[o],l=kt(u);l!==u.length&&(i=(s=i)!==null&&s!==void 0?s:o,r=o,o!==0&&l<n&&(n=l))}return e.map((o,u)=>u===0?o:o.slice(n)).slice((t=i)!==null&&t!==void 0?t:0,r+1)}function kt(e){let t=0;for(;t<e.length&&ye(e.charCodeAt(t));)++t;return t}function bn(e,t){const n=e.replace(/"""/g,'\\"""'),i=n.split(/\r\n|[\n\r]/g),r=i.length===1,s=i.length>1&&i.slice(1).every(v=>v.length===0||ye(v.charCodeAt(0))),o=n.endsWith('\\"""'),u=e.endsWith('"')&&!o,l=e.endsWith("\\"),c=u||l,d=!(t!=null&&t.minimize)&&(!r||e.length>70||c||s||o);let E="";const h=r&&ye(e.charCodeAt(0));return(d&&!h||s)&&(E+=`
`),E+=n,(d||c)&&(E+=`
`),'"""'+E+'"""'}var a;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(a||(a={}));class Ct{constructor(t){const n=new qe(a.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==a.EOF)do if(t.next)t=t.next;else{const n=St(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===a.COMMENT);return t}}function Dt(e){return e===a.BANG||e===a.DOLLAR||e===a.AMP||e===a.PAREN_L||e===a.PAREN_R||e===a.SPREAD||e===a.COLON||e===a.EQUALS||e===a.AT||e===a.BRACKET_L||e===a.BRACKET_R||e===a.BRACE_L||e===a.PIPE||e===a.BRACE_R}function j(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function oe(e,t){return Xe(e.charCodeAt(t))&&We(e.charCodeAt(t+1))}function Xe(e){return e>=55296&&e<=56319}function We(e){return e>=56320&&e<=57343}function R(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return a.EOF;if(n>=32&&n<=126){const i=String.fromCodePoint(n);return i==='"'?`'"'`:`"${i}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function T(e,t,n,i,r){const s=e.line,o=1+n-e.lineStart;return new qe(t,n,i,s,o,r)}function St(e,t){const n=e.source.body,i=n.length;let r=t;for(;r<i;){const s=n.charCodeAt(r);switch(s){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:n.charCodeAt(r+1)===10?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return wt(e,r);case 33:return T(e,a.BANG,r,r+1);case 36:return T(e,a.DOLLAR,r,r+1);case 38:return T(e,a.AMP,r,r+1);case 40:return T(e,a.PAREN_L,r,r+1);case 41:return T(e,a.PAREN_R,r,r+1);case 46:if(n.charCodeAt(r+1)===46&&n.charCodeAt(r+2)===46)return T(e,a.SPREAD,r,r+3);break;case 58:return T(e,a.COLON,r,r+1);case 61:return T(e,a.EQUALS,r,r+1);case 64:return T(e,a.AT,r,r+1);case 91:return T(e,a.BRACKET_L,r,r+1);case 93:return T(e,a.BRACKET_R,r,r+1);case 123:return T(e,a.BRACE_L,r,r+1);case 124:return T(e,a.PIPE,r,r+1);case 125:return T(e,a.BRACE_R,r,r+1);case 34:return n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34?Ut(e,r):Rt(e,r)}if(z(s)||s===45)return Lt(e,r,s);if(ze(s))return Bt(e,r);throw x(e.source,r,s===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:j(s)||oe(n,r)?`Unexpected character: ${R(e,r)}.`:`Invalid character: ${R(e,r)}.`)}return T(e,a.EOF,i,i)}function wt(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const s=n.charCodeAt(r);if(s===10||s===13)break;if(j(s))++r;else if(oe(n,r))r+=2;else break}return T(e,a.COMMENT,t,r,n.slice(t+1,r))}function Lt(e,t,n){const i=e.source.body;let r=t,s=n,o=!1;if(s===45&&(s=i.charCodeAt(++r)),s===48){if(s=i.charCodeAt(++r),z(s))throw x(e.source,r,`Invalid number, unexpected digit after 0: ${R(e,r)}.`)}else r=he(e,r,s),s=i.charCodeAt(r);if(s===46&&(o=!0,s=i.charCodeAt(++r),r=he(e,r,s),s=i.charCodeAt(r)),(s===69||s===101)&&(o=!0,s=i.charCodeAt(++r),(s===43||s===45)&&(s=i.charCodeAt(++r)),r=he(e,r,s),s=i.charCodeAt(r)),s===46||ze(s))throw x(e.source,r,`Invalid number, expected digit but got: ${R(e,r)}.`);return T(e,o?a.FLOAT:a.INT,t,r,i.slice(t,r))}function he(e,t,n){if(!z(n))throw x(e.source,t,`Invalid number, expected digit but got: ${R(e,t)}.`);const i=e.source.body;let r=t+1;for(;z(i.charCodeAt(r));)++r;return r}function Rt(e,t){const n=e.source.body,i=n.length;let r=t+1,s=r,o="";for(;r<i;){const u=n.charCodeAt(r);if(u===34)return o+=n.slice(s,r),T(e,a.STRING,t,r+1,o);if(u===92){o+=n.slice(s,r);const l=n.charCodeAt(r+1)===117?n.charCodeAt(r+2)===123?Ft(e,r):Pt(e,r):Mt(e,r);o+=l.value,r+=l.size,s=r;continue}if(u===10||u===13)break;if(j(u))++r;else if(oe(n,r))r+=2;else throw x(e.source,r,`Invalid character within String: ${R(e,r)}.`)}throw x(e.source,r,"Unterminated string.")}function Ft(e,t){const n=e.source.body;let i=0,r=3;for(;r<12;){const s=n.charCodeAt(t+r++);if(s===125){if(r<5||!j(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|q(s),i<0)break}throw x(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function Pt(e,t){const n=e.source.body,i=Ge(n,t+2);if(j(i))return{value:String.fromCodePoint(i),size:6};if(Xe(i)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const r=Ge(n,t+8);if(We(r))return{value:String.fromCodePoint(i,r),size:12}}throw x(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function Ge(e,t){return q(e.charCodeAt(t))<<12|q(e.charCodeAt(t+1))<<8|q(e.charCodeAt(t+2))<<4|q(e.charCodeAt(t+3))}function q(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Mt(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw x(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function Ut(e,t){const n=e.source.body,i=n.length;let r=e.lineStart,s=t+3,o=s,u="";const l=[];for(;s<i;){const c=n.charCodeAt(s);if(c===34&&n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34){u+=n.slice(o,s),l.push(u);const d=T(e,a.BLOCK_STRING,t,s+3,bt(l).join(`
`));return e.line+=l.length-1,e.lineStart=r,d}if(c===92&&n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34&&n.charCodeAt(s+3)===34){u+=n.slice(o,s),o=s+1,s+=4;continue}if(c===10||c===13){u+=n.slice(o,s),l.push(u),c===13&&n.charCodeAt(s+1)===10?s+=2:++s,u="",o=s,r=s;continue}if(j(c))++s;else if(oe(n,s))s+=2;else throw x(e.source,s,`Invalid character within String: ${R(e,s)}.`)}throw x(e.source,s,"Unterminated string.")}function Bt(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const s=n.charCodeAt(r);if(At(s))++r;else break}return T(e,a.NAME,t,r,n.slice(t,r))}const Vt=10,He=2;function jt(e){return ae(e,[])}function ae(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return $t(e,t);default:return String(e)}}function $t(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(Gt(e)){const i=e.toJSON();if(i!==e)return typeof i=="string"?i:ae(i,n)}else if(Array.isArray(e))return Qt(e,n);return Yt(e,n)}function Gt(e){return typeof e.toJSON=="function"}function Yt(e,t){const n=Object.entries(e);if(n.length===0)return"{}";if(t.length>He)return"["+qt(e)+"]";const i=n.map(([r,s])=>r+": "+ae(s,t));return"{ "+i.join(", ")+" }"}function Qt(e,t){if(e.length===0)return"[]";if(t.length>He)return"[Array]";const n=Math.min(Vt,e.length),i=e.length-n,r=[];for(let s=0;s<n;++s)r.push(ae(e[s],t));return i===1?r.push("... 1 more item"):i>1&&r.push(`... ${i} more items`),"["+r.join(", ")+"]"}function qt(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const Jt=function(t,n){return t instanceof n};class Ze{constructor(t,n="GraphQL request",i={line:1,column:1}){typeof t=="string"||fe(!1,`Body must be a string. Received: ${jt(t)}.`),this.body=t,this.name=n,this.locationOffset=i,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function zt(e){return Jt(e,Ze)}function Xt(e,t){return new Wt(e,t).parseDocument()}class Wt{constructor(t,n={}){const i=zt(t)?t:new Ze(t);this._lexer=new Ct(i),this._options=n,this._tokenCounter=0}parseName(){const t=this.expectToken(a.NAME);return this.node(t,{kind:f.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:f.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===a.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw x(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(t,{kind:f.OPERATION_DEFINITION,operation:B.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let i;return this.peek(a.NAME)&&(i=this.parseName()),this.node(t,{kind:f.OPERATION_DEFINITION,operation:n,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(a.NAME);switch(t.value){case"query":return B.QUERY;case"mutation":return B.MUTATION;case"subscription":return B.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:f.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(t,{kind:f.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:f.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let i,r;return this.expectOptionalToken(a.COLON)?(i=n,r=this.parseName()):r=n,this.node(t,{kind:f.FIELD,alias:i,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,n,a.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(n,{kind:f.ARGUMENT,name:i,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(a.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(a.NAME)?this.node(t,{kind:f.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:f.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:f.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:f.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case a.BRACKET_L:return this.parseList(t);case a.BRACE_L:return this.parseObject(t);case a.INT:return this.advanceLexer(),this.node(n,{kind:f.INT,value:n.value});case a.FLOAT:return this.advanceLexer(),this.node(n,{kind:f.FLOAT,value:n.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:f.BOOLEAN,value:!0});case"false":return this.node(n,{kind:f.BOOLEAN,value:!1});case"null":return this.node(n,{kind:f.NULL});default:return this.node(n,{kind:f.ENUM,value:n.value})}case a.DOLLAR:if(t)if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){const i=this._lexer.token.value;throw x(this._lexer.source,n.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:f.STRING,value:t.value,block:t.kind===a.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:f.LIST,values:this.any(a.BRACKET_L,n,a.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:f.OBJECT,fields:this.any(a.BRACE_L,n,a.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(n,{kind:f.OBJECT_FIELD,name:i,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(a.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(a.AT),this.node(n,{kind:f.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(a.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(a.BRACKET_R),n=this.node(t,{kind:f.LIST_TYPE,type:i})}else n=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(t,{kind:f.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:f.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),r=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(t,{kind:f.SCHEMA_DEFINITION,description:n,directives:i,operationTypes:r})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(a.COLON);const i=this.parseNamedType();return this.node(t,{kind:f.OPERATION_TYPE_DEFINITION,operation:n,type:i})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),r=this.parseConstDirectives();return this.node(t,{kind:f.SCALAR_TYPE_DEFINITION,description:n,name:i,directives:r})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),r=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:f.OBJECT_TYPE_DEFINITION,description:n,name:i,interfaces:r,directives:s,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),i=this.parseName(),r=this.parseArgumentDefs();this.expectToken(a.COLON);const s=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(t,{kind:f.FIELD_DEFINITION,description:n,name:i,arguments:r,type:s,directives:o})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),i=this.parseName();this.expectToken(a.COLON);const r=this.parseTypeReference();let s;this.expectOptionalToken(a.EQUALS)&&(s=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(t,{kind:f.INPUT_VALUE_DEFINITION,description:n,name:i,type:r,defaultValue:s,directives:o})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),r=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:f.INTERFACE_TYPE_DEFINITION,description:n,name:i,interfaces:r,directives:s,fields:o})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(t,{kind:f.UNION_TYPE_DEFINITION,description:n,name:i,directives:r,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(t,{kind:f.ENUM_TYPE_DEFINITION,description:n,name:i,directives:r,values:s})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),i=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(t,{kind:f.ENUM_VALUE_DEFINITION,description:n,name:i,directives:r})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw x(this._lexer.source,this._lexer.token.start,`${K(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),r=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(t,{kind:f.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:i,directives:r,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===a.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(n.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:f.SCHEMA_EXTENSION,directives:n,operationTypes:i})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(t,{kind:f.SCALAR_TYPE_EXTENSION,name:n,directives:i})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:f.OBJECT_TYPE_EXTENSION,name:n,interfaces:i,directives:r,fields:s})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:f.INTERFACE_TYPE_EXTENSION,name:n,interfaces:i,directives:r,fields:s})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:f.UNION_TYPE_EXTENSION,name:n,directives:i,types:r})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:f.ENUM_TYPE_EXTENSION,name:n,directives:i,values:r})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:f.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:i,fields:r})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);const i=this.parseName(),r=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(t,{kind:f.DIRECTIVE_DEFINITION,description:n,name:i,arguments:r,repeatable:s,locations:o})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(Ne,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new xt(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw x(this._lexer.source,n.start,`Expected ${Ke(t)}, found ${K(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===a.NAME&&n.value===t)this.advanceLexer();else throw x(this._lexer.source,n.start,`Expected "${t}", found ${K(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===a.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t!=null?t:this._lexer.token;return x(this._lexer.source,n.start,`Unexpected ${K(n)}.`)}any(t,n,i){this.expectToken(t);const r=[];for(;!this.expectOptionalToken(i);)r.push(n.call(this));return r}optionalMany(t,n,i){if(this.expectOptionalToken(t)){const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(i));return r}return[]}many(t,n,i){this.expectToken(t);const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(i));return r}delimitedMany(t,n){this.expectOptionalToken(t);const i=[];do i.push(n.call(this));while(this.expectOptionalToken(t));return i}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(t!==void 0&&n.kind!==a.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw x(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function K(e){const t=e.value;return Ke(e.kind)+(t!=null?` "${t}"`:"")}function Ke(e){return Dt(e)?`"${e}"`:e}var kn=Array.isArray;function Ye(e){return Array.isArray(e)&&e.length>0}function Ht(e){return e.hasOwnProperty("graphQLErrors")}var Zt=function(e){var t="";if(Ye(e.graphQLErrors)||Ye(e.clientErrors)){var n=(e.graphQLErrors||[]).concat(e.clientErrors||[]);n.forEach(function(i){var r=i?i.message:"Error message not found.";t+="".concat(r,`
`)})}return e.networkError&&(t+="".concat(e.networkError.message,`
`)),t=t.replace(/\n$/,""),t},xe=function(e){gt(t,e);function t(n){var i=n.graphQLErrors,r=n.clientErrors,s=n.networkError,o=n.errorMessage,u=n.extraInfo,l=e.call(this,o)||this;return l.name="ApolloError",l.graphQLErrors=i||[],l.clientErrors=r||[],l.networkError=s||null,l.message=o||Zt(l),l.extraInfo=u,l.__proto__=t.prototype,l}return t}(Error),te=new Map,Ie=new Map,et=!0,ie=!1;function tt(e){return e.replace(/[\s,]+/g," ").trim()}function Kt(e){return tt(e.source.body.substring(e.start,e.end))}function en(e){var t=new Set,n=[];return e.definitions.forEach(function(i){if(i.kind==="FragmentDefinition"){var r=i.name.value,s=Kt(i.loc),o=Ie.get(r);o&&!o.has(s)?et&&console.warn("Warning: fragment with name "+r+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||Ie.set(r,o=new Set),o.add(s),t.has(s)||(t.add(s),n.push(i))}else n.push(i)}),re(re({},e),{definitions:n})}function tn(e){var t=new Set(e.definitions);t.forEach(function(i){i.loc&&delete i.loc,Object.keys(i).forEach(function(r){var s=i[r];s&&typeof s=="object"&&t.add(s)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function nn(e){var t=tt(e);if(!te.has(t)){var n=Xt(e,{experimentalFragmentVariables:ie,allowLegacyFragmentVariables:ie});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");te.set(t,tn(en(n)))}return te.get(t)}function V(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var i=e[0];return t.forEach(function(r,s){r&&r.kind==="Document"?i+=r.loc.source.body:i+=r,i+=e[s+1]}),nn(i)}function rn(){te.clear(),Ie.clear()}function sn(){et=!1}function on(){ie=!0}function an(){ie=!1}var Q={gql:V,resetCaches:rn,disableFragmentWarnings:sn,enableExperimentalFragmentVariables:on,disableExperimentalFragmentVariables:an};(function(e){e.gql=Q.gql,e.resetCaches=Q.resetCaches,e.disableFragmentWarnings=Q.disableFragmentWarnings,e.enableExperimentalFragmentVariables=Q.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Q.disableExperimentalFragmentVariables})(V||(V={}));V.default=V;var k=V,cn=Symbol("default-apollo-client"),un=Symbol("apollo-clients");function me(e,t){return e?e.default:t!=null?t:void 0}function Ee(e,t){if(!e)throw new Error(`No apolloClients injection found, tried to resolve '${t}' clientId`);return e[t]}function nt(e){let t;const n=Oe;if(!X())t=r=>r?Ee(n,r):me(n,n.default);else{const r=Ve(un,null),s=Ve(cn,null);t=o=>{if(o){const l=Ee(r,o);return l||Ee(n,o)}const u=me(r,s);return u||me(n,n.default)}}function i(r=e){const s=t(r);if(!s)throw new Error(`Apollo client with id ${r!=null?r:"default"} not found. Use provideApolloClient() if you are outside of a component setup.`);return s}return{resolveClient:i,get client(){return i()}}}var Oe={};function Cn(e){return Oe={default:e},function(t){const n=t();return Oe={},n}}function ge(e){return ne(e)?e:typeof e=="function"?J(e):I(e)}function ln(e){return ne(e)?e:typeof e=="function"?J(e):e&&dt(e)}function se(){const e=[];function t(s){return e.push(s),{off:()=>n(s)}}function n(s){const o=e.indexOf(s);o!==-1&&e.splice(o,1)}function i(s){for(const o of e)o(s)}function r(){return e.length}return{on:t,off:n,trigger:i,getCount:r}}function pn(){var e,t,n;const i=X(),r=(n=(e=i==null?void 0:i.$root)!=null?e:i==null?void 0:i.root)!=null?n:(t=i==null?void 0:i.proxy)==null?void 0:t.$root;if(!r)throw new Error("Instance $root not found");let s;return r._apolloAppTracking?s=r._apolloAppTracking:s=r._apolloAppTracking={queries:I(0),mutations:I(0),subscriptions:I(0),components:new Map},{appTracking:s}}function dn(){const e=X();if(!e)throw new Error("getCurrentTracking must be used during a component setup");const{appTracking:t}=pn();let n;return t.components.has(e)?n=t.components.get(e):(t.components.set(e,n={queries:I(0),mutations:I(0),subscriptions:I(0)}),ht(()=>{t.components.delete(e)})),{appTracking:t,tracking:n}}function rt(e,t){const{appTracking:n,tracking:i}=dn();U(e,(r,s)=>{if(s!=null&&r!==s){const o=r?1:-1;i[t].value+=o,n[t].value+=o}},{immediate:!0}),be(()=>{e.value&&(i[t].value--,n[t].value--)})}function fn(e){rt(e,"queries")}function hn(e){rt(e,"mutations")}function it(e){return e instanceof Error?Ht(e)?e:new xe({networkError:e,errorMessage:e.message}):new xe({networkError:Object.assign(new Error,{originalError:e}),errorMessage:String(e)})}function mn(e){return new xe({graphQLErrors:e,errorMessage:`GraphQL response contains errors: ${e.map(t=>t.message).join(" | ")}`})}var M=typeof window=="undefined";function Dn(e,t,n){return En(e,t,n)}function En(e,t,n={},i=!1){var r;const s=X(),o=I(),u=ge(e),l=ge(t),c=ln(n),d=I(),E=se(),h=I(null),v=se(),m=I(!1);s&&fn(m);const N=I();let O,$;s&&((r=pt)==null||r(()=>{var p;if(!(!de.value||M&&((p=o.value)==null?void 0:p.prefetch)===!1))return new Promise((g,y)=>{O=()=>{g(),O=void 0,$=void 0},$=A=>{y(A),O=void 0,$=void 0}}).finally(S)}));const{resolveClient:Ce}=nt(),_=I();let F,C=!1,D=!1;function ce(){var p,g,y,A,w;if(C||!de.value||M&&((p=o.value)==null?void 0:p.prefetch)===!1){O&&O();return}C=!0,h.value=null,m.value=!0;const L=Ce((g=o.value)==null?void 0:g.clientId);if(_.value=L.watchQuery({query:Pe,variables:pe,...o.value,...M&&((y=o.value)==null?void 0:y.fetchPolicy)!=="no-cache"?{fetchPolicy:"network-only"}:{}}),De(),!M&&(((A=o.value)==null?void 0:A.fetchPolicy)!=="no-cache"||o.value.notifyOnNetworkStatusChange)){const b=_.value.getCurrentResult(!1);!b.loading||b.partial||((w=o.value)==null?void 0:w.notifyOnNetworkStatusChange)?(Se(b),D=!b.loading):b.error&&(we(b.error),D=!0)}if(!M)for(const b of Y)Ue(b)}function De(){F&&!F.closed||!_.value||(D=!1,F=_.value.subscribe({next:Se,error:we}))}function Se(p){var g;if(D){D=!1;return}h.value=null,W(p),!p.error&&((g=p.errors)==null?void 0:g.length)&&Le(mn(p.errors)),O&&(O(),S())}function W(p){d.value=p.data&&Object.keys(p.data).length===0?void 0:p.data,m.value=p.loading,N.value=p.networkStatus,E.trigger(p)}function we(p){var g,y,A,w;if(D){D=!1;return}const L=it(p),b=Ce((g=o.value)==null?void 0:g.clientId),P=((y=o.value)==null?void 0:y.errorPolicy)||((w=(A=b.defaultOptions)==null?void 0:A.watchQuery)==null?void 0:w.errorPolicy);P&&P!=="none"&&W(_.value.getCurrentResult()),Le(L),$&&($(L),S()),ot()}function Le(p){h.value=p,m.value=!1,N.value=8,v.trigger(p)}function ot(){if(!_.value)return;const p=_.value.getLastError(),g=_.value.getLastResult();_.value.resetLastResults(),De(),Object.assign(_.value,{lastError:p,lastResult:g})}let ue=[];function S(){O&&O(),C&&(C=!1,m.value=!1,ue.forEach(p=>p()),ue=[],_.value&&(_.value.stopPolling(),_.value=null),F&&(F.unsubscribe(),F=void 0))}let le=!1;function H(){!C||le||(le=!0,mt(()=>{C&&(S(),ce()),le=!1}))}let G,Re=!1;function Fe(){var p,g;o.value?((p=o.value)!=null&&p.throttle?G=_e(o.value.throttle,H):(g=o.value)!=null&&g.debounce?G=Et(o.value.debounce,H):G=H,Re=!0):G=H}function Z(){Re||Fe(),G()}let Pe;U(u,p=>{Pe=p,Z()},{immediate:!0});let pe,Me;U(l,(p,g)=>{const y=JSON.stringify(p);y!==Me&&(pe=p,Z()),Me=y},{deep:!0,immediate:!0}),U(()=>ft(c),p=>{o.value&&(o.value.throttle!==p.throttle||o.value.debounce!==p.debounce)&&Fe(),o.value=p,Z()},{deep:!0,immediate:!0});function at(p=void 0){if(_.value)return p&&(pe=p),h.value=null,m.value=!0,_.value.refetch(p).then(g=>{var y;const A=(y=_.value)==null?void 0:y.getCurrentResult();return A&&W(A),g})}function ct(p){if(_.value)return h.value=null,m.value=!0,_.value.fetchMore(p).then(g=>{var y;const A=(y=_.value)==null?void 0:y.getCurrentResult();return A&&W(A),g})}const Y=[];function ut(p){if(M)return;const g=ge(p);U(g,(y,A,w)=>{const L=Y.findIndex(P=>P.options===A);L!==-1&&Y.splice(L,1);const b={options:y,unsubscribeFns:[]};Y.push(b),Ue(b),w(()=>{b.unsubscribeFns.forEach(P=>P()),b.unsubscribeFns=[]})},{immediate:!0})}function Ue(p){if(!C)return;if(!_.value)throw new Error("Query is not defined");const g=_.value.subscribeToMore(p.options);ue.push(g),p.unsubscribeFns.push(g)}const Be=I(i),lt=J(()=>!o.value||o.value.enabled==null||o.value.enabled),de=J(()=>lt.value&&!Be.value);return U(de,p=>{p?ce():S()},{immediate:!0}),s&&be(()=>{S(),Y.length=0}),{result:d,loading:m,networkStatus:N,error:h,start:ce,stop:S,restart:Z,forceDisabled:Be,document:u,variables:l,options:c,query:_,refetch:at,fetchMore:ct,subscribeToMore:ut,onResult:E.on,onError:v.on}}function Sn(e,t={}){const n=X(),i=I(!1);n&&hn(i);const r=I(null),s=I(!1),o=se(),u=se(),{resolveClient:l}=nt();async function c(d,E={}){let h;typeof e=="function"?h=e():ne(e)?h=e.value:h=e;let v;typeof t=="function"?v=t():ne(t)?v=t.value:v=t;const m=l(v.clientId);r.value=null,i.value=!0,s.value=!0;try{const N=await m.mutate({mutation:h,...v,...E,variables:(d!=null?d:v.variables)?{...v.variables,...d}:void 0});return i.value=!1,o.trigger(N),N}catch(N){const O=it(N);if(r.value=O,i.value=!1,u.trigger(O),v.throws==="always"||v.throws!=="never"&&!u.getCount())throw O}return null}return n&&be(()=>{i.value=!1}),{mutate:c,loading:i,error:r,called:s,onDone:o.on,onError:u.on}}/*! js-cookie v3.0.1 | MIT */function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var gn={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Ae(e,t){function n(r,s,o){if(typeof document!="undefined"){o=ee({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var u="";for(var l in o)!o[l]||(u+="; "+l,o[l]!==!0&&(u+="="+o[l].split(";")[0]));return document.cookie=r+"="+e.write(s,r)+u}}function i(r){if(!(typeof document=="undefined"||arguments.length&&!r)){for(var s=document.cookie?document.cookie.split("; "):[],o={},u=0;u<s.length;u++){var l=s[u].split("="),c=l.slice(1).join("=");try{var d=decodeURIComponent(l[0]);if(o[d]=e.read(c,d),r===d)break}catch{}}return r?o[r]:o}}return Object.create({set:n,get:i,remove:function(r,s){n(r,"",ee({},s,{expires:-1}))},withAttributes:function(r){return Ae(this.converter,ee({},this.attributes,r))},withConverter:function(r){return Ae(ee({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var _n=Ae(gn,{path:"/"});const st=_n.get("user_id"),wn=k`
  query User($id: String!) {
    user(id: $id) {
      id
      current_space_id
      email
      name
      surname
      registration_passed
      socials
      spaces
      avatar
      telegram_chat_id
      updated_at
      created_at
      deleted_at
    }
  }
`,Ln=k`
  query pagesAll {
    pages {
      data {
        id
        parent_id
        page_type
        title
        content
        icon
        level
        is_public
        is_block
        position
        config
        created_at
        updated_at
        object {
          id
          type_id
        }
      }
      paginatorInfo {
        perPage
        count
        total
        currentPage
        from
        to
        lastPage
        hasMorePages
      }
    }
  }
`,Rn=k`
  query pages {
    rootPages {
      data {
        id
        parent_id
        page_type
        title
        content
        icon
        level
        is_public
        is_block
        position
        config
        created_at
        updated_at

        object {
          id
          type_id
        }
        children {
          data {
            id
            parent_id
            page_type
            title
            content
            icon
            level
            is_public
            is_block
            position
            config
            created_at
            updated_at
            object {
              id
              type_id
            }
          }
        }
      }
      paginatorInfo {
        perPage
        count
        total
        currentPage
        from
        to
        lastPage
        hasMorePages
      }
    }
  }
`,Fn=k`
  query getGroupSubjects($group_id: String!) {
    get_group(id: $group_id) {
      id
      author_id
      name
      description
      created_at
      updated_at
      type_id
      subject {
        id
        user_id
        fullname {
          first_name
          last_name
        }
        email {
          email
        }
        group {
          id
          name
        }
        modules {
          id
          name
        }
        tasks {
          id
          name
        }
      }
    }
  }
`,Pn=k`
  query getGroupSubjects {
    get_group(id: "6151953155520787188") {
      id
      author_id
      name
      description
      created_at
      updated_at
      subject {
        fullname {
          first_name
          last_name
        }
        group {
          id
          name
        }
        user_id
        id
      }
    }
  }
`,Mn=k`
  query getGroupSubjects {
    get_group(id: "1605164073721191913") {
      id
      author_id
      name
      description
      created_at
      updated_at
      subject {
        fullname {
          first_name
          last_name
        }
        group {
          id
          name
        }
        user_id
        id
      }
    }
  }
`,Un=k`
  query getSubject($id: String!) {
    get_subject(id: $id) {
      email {
        email
      }
      group {
        name
        id
      }
      fullname {
        first_name
        middle_name
        last_name
      }
    }
  }
`,Bn=k`
  query getPage($id: String!) {
    page(id: $id) {
      id
      parent_id
      page_type
      title
      content
      icon
      level
      is_public
      position
      config
      is_block
      created_at
      updated_at
      object {
        id
        type_id
      }
    }
  }
`,Vn=k`
  query getUserModules {
    paginate_subject(page: 1, perPage: 100) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        user_id
        fullname {
          first_name
          last_name
        }
        modules {
          id
          name
          created_at
          responsible {
            id
            user_id
            fullname {
              first_name
              last_name
            }
          }

          startdate {
            date
            time
          }
          expirationdate {
            date
            time
          }
          tasks {
            id
            status
          }
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;k`
  query getTasks {
    paginate_task(page: 1, perPage: 100) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        name
        description
        executor {
          id
          user_id
          fullname {
            first_name
            last_name
          }
        }
        status
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`;const jn=k`
  query getUserModules {
    paginate_subject(page: 1, perPage: 100, where: { column: "user_id", operator: EQ, value: ${st} }) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        user_id
        fullname {
          first_name
          last_name
        }
        modules {
          id
          name
          created_at
          responsible {
            id
            fullname {
              first_name
              last_name
            }
          }

          startdate {
            date
            time
          }
          expirationdate {
            date
            time
          }
          tasks {
            id
            status
          }
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`,$n=k`
  query getModuleById($module_id: String!) {
    get_module(id: $module_id) {
      id
      name
      created_at
      responsible {
        id
        fullname {
          first_name
          last_name
        }
      }
      startdate {
        date
        time
      }
      expirationdate {
        date
        time
      }
      tasks {
        id
        name
        created_at
        description
        executor {
          id
          fullname {
            first_name
            last_name
          }
        }
        status
      }
    }
  }
`,Gn=k`
  query getUserTasks {
    paginate_subject(page: 1, perPage: 100, where: { column: "user_id", operator: EQ, value: ${st} }) {
      data {
        id
        type_id
        author_id
        level
        position
        created_at
        updated_at
        user_id
        fullname {
          first_name
          last_name
        }
        tasks {
          id
          name
          description
          created_at
          executor {
            id
            fullname {
              first_name
              last_name
            }
          }
          status
          module {
            id
          }
        }
      }
      paginatorInfo {
        perPage
        currentPage
        lastPage
        total
        count
        from
        to
        hasMorePages
      }
    }
  }
`,Yn=k`
  query getProperty {
    property(id: "952775457880529425") {
      id
      type_id
      author_id
      property_group_id
      data_type
      name
      hint
      description
      label
      order
      required
      system
      unique
      multiple {
        status
        max_number
        button_text
      }
      guarded
      default
      meta
      created_at
      updated_at
    }
  }
`;export{xe as A,Sn as B,jn as C,Gn as D,Bn as E,Pn as F,Ln as G,Yn as H,Mn as I,$n as J,f as K,Un as L,It as Q,Ze as S,wn as U,gt as _,Tn as a,Dn as b,Vn as c,Cn as d,fe as e,jt as f,Fn as g,bn as h,An as i,re as j,On as k,kn as l,Ye as m,xn as n,In as o,Rn as p,yn as q,Ht as r,V as s,rn as t,Nn as u,sn as v,on as w,an as x,k as y,_n as z};
