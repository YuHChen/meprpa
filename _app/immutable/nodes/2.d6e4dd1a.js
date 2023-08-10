import{s as Me,n as Ee,r as ze}from"../chunks/scheduler.e108d1fd.js";import{S as Pe,i as Ue,g as he,m as we,s as Ce,e as Ae,h as le,j as me,n as Re,f as Y,c as Oe,k as ye,a as _e,x as ue,y as De,z as xe,H as qe,A as Ne,o as je,B as He}from"../chunks/index.744d187e.js";var Be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ke(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Le={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(p,c){(function(E,l){p.exports=l()})(Be,function E(){var l=typeof self<"u"?self:typeof window<"u"?window:l!==void 0?l:{},m=!l.document&&!!l.postMessage,K=l.IS_PAPA_WORKER||!1,S={},W=0,n={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(y(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!y(e.transform)&&e.transform,e.worker&&n.WORKERS_SUPPORTED){var i=function(){if(!n.WORKERS_SUPPORTED)return!1;var f=(U=l.URL||l.webkitURL||null,T=E.toString(),n.BLOB_URL||(n.BLOB_URL=U.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",T,")();"],{type:"text/javascript"})))),d=new l.Worker(f),U,T;return d.onmessage=Fe,d.id=W++,S[d.id]=d}();return i.userStep=e.step,i.userChunk=e.chunk,i.userComplete=e.complete,i.userError=e.error,e.step=y(e.step),e.chunk=y(e.chunk),e.complete=y(e.complete),e.error=y(e.error),delete e.worker,void i.postMessage({input:t,config:e,workerId:i.id})}var a=null;return n.NODE_STREAM_INPUT,typeof t=="string"?(t=function(f){return f.charCodeAt(0)===65279?f.slice(1):f}(t),a=e.download?new X(e):new ee(e)):t.readable===!0&&y(t.read)&&y(t.on)?a=new N(e):(l.File&&t instanceof File||t instanceof Object)&&(a=new fe(e)),a.stream(t)},unparse:function(t,e){var r=!1,i=!0,a=",",f=`\r
`,d='"',U=d+d,T=!1,o=null,A=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||n.BAD_DELIMITERS.filter(function(s){return e.delimiter.indexOf(s)!==-1}).length||(a=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(T=e.skipEmptyLines),typeof e.newline=="string"&&(f=e.newline),typeof e.quoteChar=="string"&&(d=e.quoteChar),typeof e.header=="boolean"&&(i=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");o=e.columns}e.escapeChar!==void 0&&(U=e.escapeChar+d),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(A=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var h=new RegExp(x(d),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return Z(null,t,T);if(typeof t[0]=="object")return Z(o||Object.keys(t[0]),t,T)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||o),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),Z(t.fields||[],t.data||[],T);throw new Error("Unable to serialize unrecognized input");function Z(s,w,H){var I="";typeof s=="string"&&(s=JSON.parse(s)),typeof w=="string"&&(w=JSON.parse(w));var q=Array.isArray(s)&&0<s.length,z=!Array.isArray(w[0]);if(q&&i){for(var P=0;P<s.length;P++)0<P&&(I+=a),I+=j(s[P],P);0<w.length&&(I+=f)}for(var u=0;u<w.length;u++){var _=q?s.length:w[u].length,R=!1,M=q?Object.keys(w[u]).length===0:w[u].length===0;if(H&&!q&&(R=H==="greedy"?w[u].join("").trim()==="":w[u].length===1&&w[u][0].length===0),H==="greedy"&&q){for(var k=[],B=0;B<_;B++){var D=z?s[B]:B;k.push(w[u][D])}R=k.join("").trim()===""}if(!R){for(var b=0;b<_;b++){0<b&&!M&&(I+=a);var V=q&&z?s[b]:b;I+=j(w[u][V],b)}u<w.length-1&&(!H||0<_&&!M)&&(I+=f)}}return I}function j(s,w){if(s==null)return"";if(s.constructor===Date)return JSON.stringify(s).slice(1,25);var H=!1;A&&typeof s=="string"&&A.test(s)&&(s="'"+s,H=!0);var I=s.toString().replace(h,U);return(H=H||r===!0||typeof r=="function"&&r(s,w)||Array.isArray(r)&&r[w]||function(q,z){for(var P=0;P<z.length;P++)if(-1<q.indexOf(z[P]))return!0;return!1}(I,n.BAD_DELIMITERS)||-1<I.indexOf(a)||I.charAt(0)===" "||I.charAt(I.length-1)===" ")?d+I+d:I}}};if(n.RECORD_SEP=String.fromCharCode(30),n.UNIT_SEP=String.fromCharCode(31),n.BYTE_ORDER_MARK="\uFEFF",n.BAD_DELIMITERS=["\r",`
`,'"',n.BYTE_ORDER_MARK],n.WORKERS_SUPPORTED=!m&&!!l.Worker,n.NODE_STREAM_INPUT=1,n.LocalChunkSize=10485760,n.RemoteChunkSize=5242880,n.DefaultDelimiter=",",n.Parser=de,n.ParserHandle=C,n.NetworkStreamer=X,n.FileStreamer=fe,n.StringStreamer=ee,n.ReadableStreamStreamer=N,l.jQuery){var g=l.jQuery;g.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(f){if(!(g(this).prop("tagName").toUpperCase()==="INPUT"&&g(this).attr("type").toLowerCase()==="file"&&l.FileReader)||!this.files||this.files.length===0)return!0;for(var d=0;d<this.files.length;d++)r.push({file:this.files[d],inputElem:this,instanceConfig:g.extend({},e)})}),i(),this;function i(){if(r.length!==0){var f,d,U,T,o=r[0];if(y(t.before)){var A=t.before(o.file,o.inputElem);if(typeof A=="object"){if(A.action==="abort")return f="AbortError",d=o.file,U=o.inputElem,T=A.reason,void(y(t.error)&&t.error({name:f},d,U,T));if(A.action==="skip")return void a();typeof A.config=="object"&&(o.instanceConfig=g.extend(o.instanceConfig,A.config))}else if(A==="skip")return void a()}var h=o.instanceConfig.complete;o.instanceConfig.complete=function(Z){y(h)&&h(Z,o.file,o.inputElem),a()},n.parse(o.file,o.instanceConfig)}else y(t.complete)&&t.complete()}function a(){r.splice(0,1),i()}}}function F(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=ke(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new C(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&y(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);i!==void 0&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var a=this._partialLine+e;this._partialLine="";var f=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var d=f.meta.cursor;this._finished||(this._partialLine=a.substring(d-this._baseIndex),this._baseIndex=d),f&&f.data&&(this._rowCount+=f.data.length);var U=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(K)l.postMessage({results:f,workerId:n.WORKER_ID,finished:U});else if(y(this._config.chunk)&&!r){if(this._config.chunk(f,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);f=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(f.data),this._completeResults.errors=this._completeResults.errors.concat(f.errors),this._completeResults.meta=f.meta),this._completed||!U||!y(this._config.complete)||f&&f.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),U||f&&f.meta.paused||this._nextChunk(),f}this._halted=!0},this._sendError=function(e){y(this._config.error)?this._config.error(e):K&&this._config.error&&l.postMessage({workerId:n.WORKER_ID,error:e,finished:!1})}}function X(t){var e;(t=t||{}).chunkSize||(t.chunkSize=n.RemoteChunkSize),F.call(this,t),this._nextChunk=m?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),m||(e.onload=ie(this._chunkLoaded,this),e.onerror=ie(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!m),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var i in r)e.setRequestHeader(i,r[i])}if(this._config.chunkSize){var a=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+a)}try{e.send(this._config.downloadRequestBody)}catch(f){this._chunkError(f.message)}m&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var i=r.getResponseHeader("Content-Range");return i===null?-1:parseInt(i.substring(i.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var i=e.statusText||r;this._sendError(new Error(i))}}function fe(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=n.LocalChunkSize),F.call(this,t);var i=typeof FileReader<"u";this.stream=function(a){this._input=a,r=a.slice||a.webkitSlice||a.mozSlice,i?((e=new FileReader).onload=ie(this._chunkLoaded,this),e.onerror=ie(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var a=this._input;if(this._config.chunkSize){var f=Math.min(this._start+this._config.chunkSize,this._input.size);a=r.call(a,this._start,f)}var d=e.readAsText(a,this._config.encoding);i||this._chunkLoaded({target:{result:d}})},this._chunkLoaded=function(a){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(a.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ee(t){var e;F.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,i=this._config.chunkSize;return i?(r=e.substring(0,i),e=e.substring(i)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function N(t){F.call(this,t=t||{});var e=[],r=!0,i=!1;this.pause=function(){F.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){F.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(a){this._input=a,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=ie(function(a){try{e.push(typeof a=="string"?a:a.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(f){this._streamError(f)}},this),this._streamError=ie(function(a){this._streamCleanUp(),this._sendError(a)},this),this._streamEnd=ie(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=ie(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function C(t){var e,r,i,a=Math.pow(2,53),f=-a,d=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,U=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,T=this,o=0,A=0,h=!1,Z=!1,j=[],s={data:[],errors:[],meta:{}};if(y(t.step)){var w=t.step;t.step=function(u){if(s=u,q())I();else{if(I(),s.data.length===0)return;o+=u.data.length,t.preview&&o>t.preview?r.abort():(s.data=s.data[0],w(s,T))}}}function H(u){return t.skipEmptyLines==="greedy"?u.join("").trim()==="":u.length===1&&u[0].length===0}function I(){return s&&i&&(P("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+n.DefaultDelimiter+"'"),i=!1),t.skipEmptyLines&&(s.data=s.data.filter(function(u){return!H(u)})),q()&&function(){if(!s)return;function u(R,M){y(t.transformHeader)&&(R=t.transformHeader(R,M)),j.push(R)}if(Array.isArray(s.data[0])){for(var _=0;q()&&_<s.data.length;_++)s.data[_].forEach(u);s.data.splice(0,1)}else s.data.forEach(u)}(),function(){if(!s||!t.header&&!t.dynamicTyping&&!t.transform)return s;function u(R,M){var k,B=t.header?{}:[];for(k=0;k<R.length;k++){var D=k,b=R[k];t.header&&(D=k>=j.length?"__parsed_extra":j[k]),t.transform&&(b=t.transform(b,D)),b=z(D,b),D==="__parsed_extra"?(B[D]=B[D]||[],B[D].push(b)):B[D]=b}return t.header&&(k>j.length?P("FieldMismatch","TooManyFields","Too many fields: expected "+j.length+" fields but parsed "+k,A+M):k<j.length&&P("FieldMismatch","TooFewFields","Too few fields: expected "+j.length+" fields but parsed "+k,A+M)),B}var _=1;return!s.data.length||Array.isArray(s.data[0])?(s.data=s.data.map(u),_=s.data.length):s.data=u(s.data,0),t.header&&s.meta&&(s.meta.fields=j),A+=_,s}()}function q(){return t.header&&j.length===0}function z(u,_){return R=u,t.dynamicTypingFunction&&t.dynamicTyping[R]===void 0&&(t.dynamicTyping[R]=t.dynamicTypingFunction(R)),(t.dynamicTyping[R]||t.dynamicTyping)===!0?_==="true"||_==="TRUE"||_!=="false"&&_!=="FALSE"&&(function(M){if(d.test(M)){var k=parseFloat(M);if(f<k&&k<a)return!0}return!1}(_)?parseFloat(_):U.test(_)?new Date(_):_===""?null:_):_;var R}function P(u,_,R,M){var k={type:u,code:_,message:R};M!==void 0&&(k.row=M),s.errors.push(k)}this.parse=function(u,_,R){var M=t.quoteChar||'"';if(t.newline||(t.newline=function(D,b){D=D.substring(0,1048576);var V=new RegExp(x(b)+"([^]*?)"+x(b),"gm"),$=(D=D.replace(V,"")).split("\r"),te=D.split(`
`),re=1<te.length&&te[0].length<$[0].length;if($.length===1||re)return`
`;for(var J=0,O=0;O<$.length;O++)$[O][0]===`
`&&J++;return J>=$.length/2?`\r
`:"\r"}(u,M)),i=!1,t.delimiter)y(t.delimiter)&&(t.delimiter=t.delimiter(u),s.meta.delimiter=t.delimiter);else{var k=function(D,b,V,$,te){var re,J,O,L;te=te||[",","	","|",";",n.RECORD_SEP,n.UNIT_SEP];for(var ce=0;ce<te.length;ce++){var v=te[ce],ge=0,ne=0,pe=0;O=void 0;for(var se=new de({comments:$,delimiter:v,newline:b,preview:10}).parse(D),ae=0;ae<se.data.length;ae++)if(V&&H(se.data[ae]))pe++;else{var oe=se.data[ae].length;ne+=oe,O!==void 0?0<oe&&(ge+=Math.abs(oe-O),O=oe):O=oe}0<se.data.length&&(ne/=se.data.length-pe),(J===void 0||ge<=J)&&(L===void 0||L<ne)&&1.99<ne&&(J=ge,re=v,L=ne)}return{successful:!!(t.delimiter=re),bestDelimiter:re}}(u,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);k.successful?t.delimiter=k.bestDelimiter:(i=!0,t.delimiter=n.DefaultDelimiter),s.meta.delimiter=t.delimiter}var B=ke(t);return t.preview&&t.header&&B.preview++,e=u,r=new de(B),s=r.parse(e,_,R),I(),h?{meta:{paused:!0}}:s||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,r.abort(),e=y(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){T.streamer._halted?(h=!1,T.streamer.parseChunk(e,!0)):setTimeout(T.resume,3)},this.aborted=function(){return Z},this.abort=function(){Z=!0,r.abort(),s.meta.aborted=!0,y(t.complete)&&t.complete(s),e=""}}function x(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function de(t){var e,r=(t=t||{}).delimiter,i=t.newline,a=t.comments,f=t.step,d=t.preview,U=t.fastMode,T=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(T=t.escapeChar),(typeof r!="string"||-1<n.BAD_DELIMITERS.indexOf(r))&&(r=","),a===r)throw new Error("Comment character same as delimiter");a===!0?a="#":(typeof a!="string"||-1<n.BAD_DELIMITERS.indexOf(a))&&(a=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var o=0,A=!1;this.parse=function(h,Z,j){if(typeof h!="string")throw new Error("Input must be a string");var s=h.length,w=r.length,H=i.length,I=a.length,q=y(f),z=[],P=[],u=[],_=o=0;if(!h)return Q();if(t.header&&!Z){var R=h.split(i)[0].split(r),M=[],k={},B=!1;for(var D in R){var b=R[D];y(t.transformHeader)&&(b=t.transformHeader(b,D));var V=b,$=k[b]||0;for(0<$&&(B=!0,V=b+"_"+$),k[b]=$+1;M.includes(V);)V=V+"_"+$;M.push(V)}if(B){var te=h.split(i);te[0]=M.join(r),h=te.join(i)}}if(U||U!==!1&&h.indexOf(e)===-1){for(var re=h.split(i),J=0;J<re.length;J++){if(u=re[J],o+=u.length,J!==re.length-1)o+=i.length;else if(j)return Q();if(!a||u.substring(0,I)!==a){if(q){if(z=[],pe(u.split(r)),ve(),A)return Q()}else pe(u.split(r));if(d&&d<=J)return z=z.slice(0,d),Q(!0)}}return Q()}for(var O=h.indexOf(r,o),L=h.indexOf(i,o),ce=new RegExp(x(T)+x(e),"g"),v=h.indexOf(e,o);;)if(h[o]!==e)if(a&&u.length===0&&h.substring(o,o+I)===a){if(L===-1)return Q();o=L+H,L=h.indexOf(i,o),O=h.indexOf(r,o)}else if(O!==-1&&(O<L||L===-1))u.push(h.substring(o,O)),o=O+w,O=h.indexOf(r,o);else{if(L===-1)break;if(u.push(h.substring(o,L)),oe(L+H),q&&(ve(),A))return Q();if(d&&z.length>=d)return Q(!0)}else for(v=o,o++;;){if((v=h.indexOf(e,v+1))===-1)return j||P.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:z.length,index:o}),ae();if(v===s-1)return ae(h.substring(o,v).replace(ce,e));if(e!==T||h[v+1]!==T){if(e===T||v===0||h[v-1]!==T){O!==-1&&O<v+1&&(O=h.indexOf(r,v+1)),L!==-1&&L<v+1&&(L=h.indexOf(i,v+1));var ge=se(L===-1?O:Math.min(O,L));if(h.substr(v+1+ge,w)===r){u.push(h.substring(o,v).replace(ce,e)),h[o=v+1+ge+w]!==e&&(v=h.indexOf(e,o)),O=h.indexOf(r,o),L=h.indexOf(i,o);break}var ne=se(L);if(h.substring(v+1+ne,v+1+ne+H)===i){if(u.push(h.substring(o,v).replace(ce,e)),oe(v+1+ne+H),O=h.indexOf(r,o),v=h.indexOf(e,o),q&&(ve(),A))return Q();if(d&&z.length>=d)return Q(!0);break}P.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:z.length,index:o}),v++}}else v++}return ae();function pe(G){z.push(G),_=o}function se(G){var Se=0;if(G!==-1){var be=h.substring(v+1,G);be&&be.trim()===""&&(Se=be.length)}return Se}function ae(G){return j||(G===void 0&&(G=h.substring(o)),u.push(G),o=s,pe(u),q&&ve()),Q()}function oe(G){o=G,pe(u),u=[],L=h.indexOf(i,o)}function Q(G){return{data:z,errors:P,meta:{delimiter:r,linebreak:i,aborted:A,truncated:!!G,cursor:_+(Z||0)}}}function ve(){f(Q()),z=[],P=[]}},this.abort=function(){A=!0},this.getCharIndex=function(){return o}}function Fe(t){var e=t.data,r=S[e.workerId],i=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var a={abort:function(){i=!0,Te(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Ie,resume:Ie};if(y(r.userStep)){for(var f=0;f<e.results.data.length&&(r.userStep({data:e.results.data[f],errors:e.results.errors,meta:e.results.meta},a),!i);f++);delete e.results}else y(r.userChunk)&&(r.userChunk(e.results,a,e.file),delete e.results)}e.finished&&!i&&Te(e.workerId,e.results)}function Te(t,e){var r=S[t];y(r.userComplete)&&r.userComplete(e),r.terminate(),delete S[t]}function Ie(){throw new Error("Not implemented.")}function ke(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=ke(t[r]);return e}function ie(t,e){return function(){t.apply(e,arguments)}}function y(t){return typeof t=="function"}return K&&(l.onmessage=function(t){var e=t.data;if(n.WORKER_ID===void 0&&e&&(n.WORKER_ID=e.workerId),typeof e.input=="string")l.postMessage({workerId:n.WORKER_ID,results:n.parse(e.input,e.config),finished:!0});else if(l.File&&e.input instanceof File||e.input instanceof Object){var r=n.parse(e.input,e.config);r&&l.postMessage({workerId:n.WORKER_ID,results:r,finished:!0})}}),(X.prototype=Object.create(F.prototype)).constructor=X,(fe.prototype=Object.create(F.prototype)).constructor=fe,(ee.prototype=Object.create(ee.prototype)).constructor=ee,(N.prototype=Object.create(F.prototype)).constructor=N,n})})(Le);var We=Le.exports;const $e=Ke(We);function Je(p){let c,E,l,m,K,S,W;return{c(){c=he("p"),E=we(`The published spreadsheet is located at
    `),l=he("a"),m=we(p[2]),K=Ce(),S=he("div"),W=new qe(!1),this.h()},l(n){c=le(n,"P",{});var g=me(c);E=Re(g,`The published spreadsheet is located at
    `),l=le(g,"A",{target:!0,href:!0});var F=me(l);m=Re(F,p[2]),F.forEach(Y),g.forEach(Y),K=Oe(n),S=le(n,"DIV",{});var X=me(S);W=Ne(X,!1),X.forEach(Y),this.h()},h(){ye(l,"target","_new"),ye(l,"href",p[2]),W.a=null},m(n,g){_e(n,c,g),ue(c,E),ue(c,l),ue(l,m),_e(n,K,g),_e(n,S,g),W.m(p[1],S)},p(n,g){g&4&&je(m,n[2]),g&4&&ye(l,"href",n[2]),g&2&&W.p(n[1])},d(n){n&&(Y(c),Y(K),Y(S))}}}function Qe(p){let c,E=`You can find the spreadsheet ID in a Google Sheets URL:
    <code>https://docs.google.com/spreadsheets/d/<strong>spreadsheetId</strong>/edit#gid=0</code>.
    Learn more
    <a target="_new" href="https://developers.google.com/sheets/api/guides/concepts">here</a>.`;return{c(){c=he("p"),c.innerHTML=E},l(l){c=le(l,"P",{"data-svelte-h":!0}),He(c)!=="svelte-1lfna9z"&&(c.innerHTML=E)},m(l,m){_e(l,c,m)},p:Ee,d(l){l&&Y(c)}}}function Ge(p){let c,E,l,m,K,S,W,n,g,F,X;function fe(C,x){return C[1]===void 0?Qe:Je}let ee=fe(p),N=ee(p);return{c(){c=he("form"),E=he("label"),l=we(`Spreadsheet ID:
    `),m=he("input"),K=Ce(),S=he("input"),n=Ce(),N.c(),g=Ae(),this.h()},l(C){c=le(C,"FORM",{});var x=me(c);E=le(x,"LABEL",{});var de=me(E);l=Re(de,`Spreadsheet ID:
    `),m=le(de,"INPUT",{}),de.forEach(Y),K=Oe(x),S=le(x,"INPUT",{type:!0}),x.forEach(Y),n=Oe(C),N.l(C),g=Ae(),this.h()},h(){m.required=!0,ye(S,"type","submit"),S.value="Fetch Spreadsheet",S.disabled=W=p[0]===""},m(C,x){_e(C,c,x),ue(c,E),ue(E,l),ue(E,m),De(m,p[0]),ue(c,K),ue(c,S),_e(C,n,x),N.m(C,x),_e(C,g,x),F||(X=[xe(m,"input",p[4]),xe(c,"submit",p[3])],F=!0)},p(C,[x]){x&1&&m.value!==C[0]&&De(m,C[0]),x&1&&W!==(W=C[0]==="")&&(S.disabled=W),ee===(ee=fe(C))&&N?N.p(C,x):(N.d(1),N=ee(C),N&&(N.c(),N.m(g.parentNode,g)))},i:Ee,o:Ee,d(C){C&&(Y(c),Y(n),Y(g)),N.d(C),F=!1,ze(X)}}}function Ye(p){return[`<h3>${p.name}</h3>`,Ze(p.ingredients)].join(`
`)}function Ze(p){console.log(JSON.parse(p));const c=["<ol>",...JSON.parse(p).map(E=>`<li>${E.amount} ${E.unit} ${E.name}</li>`),"</ol>"];return console.log(c),c.join(`
`)}function Ve(p,c,E){let l,m="",K;function S(g){return g.preventDefault(),m&&$e.parse(l,{download:!0,header:!0,complete:W}),!1}function W(g){const F=g.data;E(1,K=F.map(Ye).join(`
`)),console.log(F)}function n(){m=this.value,E(0,m)}return p.$$.update=()=>{p.$$.dirty&1&&E(2,l=`https://docs.google.com/spreadsheets/d/e/${m}/pub?output=csv`)},[m,K,l,S,n]}class tt extends Pe{constructor(c){super(),Ue(this,c,Ve,Ge,Me,{})}}export{tt as component};
