let Q=0,S=`string`,M=1,U=`Object`,O=`utf-8`,L=null,N=`undefined`,W=4,T=`function`,V=16,J=Array,P=Error,Y=Promise,X=Reflect,R=Uint8Array,K=undefined;var D=(async(a,b)=>{if(typeof Response===T&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===T){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var v=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h68bc8fe96621596b(b,c,g(d))});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==L){return `${a}`};if(b==S){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==L){return `Symbol`}else{return `Symbol(${b})`}};if(b==T){const b=a.name;if(typeof b==S&&b.length>Q){return `Function(${b})`}else{return `Function`}};if(J.isArray(a)){const b=a.length;let c=`[`;if(b>Q){c+=l(a[Q])};for(let d=M;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>M){d=c[M]}else{return toString.call(a)};if(d==U){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return U}};if(a instanceof P){return `${a.name}: ${a.message}\n${a.stack}`};return d});var t=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h2c42d6c934b44101(b,c,g(d))});var F=((a,b)=>{});var g=(a=>{if(d===b.length)b.push(b.length+ M);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var z=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h0c6c25de33c90d78(b,c,g(d),g(e))});function y(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var x=((a,b)=>{if(a===Q){return c(b)}else{return k(a,b)}});var r=(()=>{if(q===L||q.byteLength===Q){q=new Int32Array(a.memory.buffer)};return q});var w=(a=>a===K||a===L);var c=(a=>b[a]);var I=(async(b)=>{if(a!==K)return a;if(typeof b===N){b=new URL(`github_open_issue-f4bb439ed0ebe84e_bg.wasm`,import.meta.url)};const c=E();if(typeof b===S||typeof Request===T&&b instanceof Request||typeof URL===T&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var H=(b=>{if(a!==K)return a;const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===K;return b});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===L;return b});b.wbg.__wbindgen_is_falsy=(a=>{const b=!c(a);return b});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==M){b.a=Q;return !0};const c=!1;return c});b.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=c(a).document;return w(b)?Q:g(b)});b.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=c(a).body;return w(b)?Q:g(b)});b.wbg.__wbg_createComment_ce9f467394242d45=((a,b,d)=>{var e=x(b,d);const f=c(a).createComment(e);return g(f)});b.wbg.__wbg_createDocumentFragment_229f723f44e69ab9=(a=>{const b=c(a).createDocumentFragment();return g(b)});b.wbg.__wbg_createElement_1a136faad4101f43=function(){return y(((a,b,d)=>{var e=x(b,d);const f=c(a).createElement(e);return g(f)}),arguments)};b.wbg.__wbg_createTextNode_dbdd908f92bae1b1=((a,b,d)=>{var e=x(b,d);const f=c(a).createTextNode(e);return g(f)});b.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,d)=>{var e=x(b,d);c(a).innerHTML=e});b.wbg.__wbg_removeAttribute_5c264e727b67dbdb=function(){return y(((a,b,d)=>{var e=x(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_setAttribute_0918ea45d5a1c663=function(){return y(((a,b,d,e,f)=>{var g=x(b,d);var h=x(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_bed7b7b6e53dd469=function(){return y(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_ed2f62f1a8be044b=(a=>{c(a).remove()});b.wbg.__wbg_parentNode_f3957fdd408a62f7=(a=>{const b=c(a).parentNode;return w(b)?Q:g(b)});b.wbg.__wbg_childNodes_75d3da5f3a7bb985=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_previousSibling_4cd9e84aeb4df529=(a=>{const b=c(a).previousSibling;return w(b)?Q:g(b)});b.wbg.__wbg_nextSibling_13e9454ef5323f1a=(a=>{const b=c(a).nextSibling;return w(b)?Q:g(b)});b.wbg.__wbg_appendChild_bd383ec5356c0bdb=function(){return y(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_cloneNode_80501c66ab115588=function(){return y((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_log_9dfb3879776dd797=(a=>{console.log(c(a))});b.wbg.__wbg_instanceof_ShadowRoot_cb6366cb0956ce29=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_99e27ed8897850f2=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_value_c93cb4b4d352228e=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ M]=g;r()[b/W+ Q]=f});b.wbg.__wbg_byobRequest_004146c1db53bc14=(a=>{const b=c(a).byobRequest;return w(b)?Q:g(b)});b.wbg.__wbg_close_54a5b70c42a72ee3=function(){return y((a=>{c(a).close()}),arguments)};b.wbg.__wbg_close_21d8fce01634cc74=function(){return y((a=>{c(a).close()}),arguments)};b.wbg.__wbg_enqueue_61ebfae3475d5d91=function(){return y(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_target_791826e938c3e308=(a=>{const b=c(a).target;return w(b)?Q:g(b)});b.wbg.__wbg_cancelBubble_191799b8e0ab3254=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_d94a39b8c8f6eed1=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_length_d5ed87010607a669=(a=>{const b=c(a).length;return b});b.wbg.__wbg_append_517583bac5b5bb16=function(){return y(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_addEventListener_2f891d22985fd3c8=function(){return y(((a,b,d,e)=>{var f=x(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_1b158e9e95e0ab00=function(){return y(((a,b,d,e,f)=>{var g=x(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_view_d7afa0120e493b2d=(a=>{const b=c(a).view;return w(b)?Q:g(b)});b.wbg.__wbg_respond_3233ecfa19b9b617=function(){return y(((a,b)=>{c(a).respond(b>>>Q)}),arguments)};b.wbg.__wbg_setdata_4d5b377238fff97c=((a,b,d)=>{var e=x(b,d);c(a).data=e});b.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const d=c(a)[b>>>Q];return g(d)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{var c=x(a,b);const d=new Function(c);return g(d)});b.wbg.__wbg_get_5027b32da70f39b1=function(){return y(((a,b)=>{const d=X.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_call_a79f1973a4f07d5e=function(){return y(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_self_086b5302bcafb962=function(){return y((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_132fa5d7546f1de5=function(){return y((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return y((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return y((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_new_3a66822ed076951c=((a,b)=>{var c=x(a,b);const d=new P(c);return g(d)});b.wbg.__wbg_call_f6a2bc58c19c53c6=function(){return y(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_is_a5728dbfb61c82cd=((a,b)=>{const d=Object.is(c(a),c(b));return d});b.wbg.__wbg_new_1d93771b84541aa5=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=Q;try{return z(d,c.b,a,b)}finally{c.a=d}};const e=new Y(d);return g(e)}finally{c.a=c.b=Q}});b.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=Y.resolve(c(a));return g(b)});b.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_buffer_5d1b598a01b41a42=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_newwithbyteoffsetandlength_d695c7957788f922=((a,b,d)=>{const e=new R(c(a),b>>>Q,d>>>Q);return g(e)});b.wbg.__wbg_set_74906aa30864df5a=((a,b,d)=>{c(a).set(c(b),d>>>Q)});b.wbg.__wbg_length_f0764416ba5bb237=(a=>{const b=c(a).length;return b});b.wbg.__wbg_buffer_3da2aecfd9814cd8=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_byteLength_a8d894d93425b2e0=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_byteOffset_89d0a5265d5bde53=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_set_37a50e901587b477=function(){return y(((a,b,d)=>{const e=X.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ M]=g;r()[b/W+ Q]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new P(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbg_queueMicrotask_118eeb525d584d9a=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_26a89c14c53809c0=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_closure_wrapper113=((a,b,c)=>{const d=s(a,b,27,t);return g(d)});b.wbg.__wbindgen_closure_wrapper191=((a,b,c)=>{const d=s(a,b,52,u);return g(d)});b.wbg.__wbindgen_closure_wrapper2210=((a,b,c)=>{const d=s(a,b,139,v);return g(d)});return b});var u=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h759cc0fad63f13b6(b,c,g(d))});var e=(a=>{if(a<132)return;b[a]=d;d=a});var s=((b,c,d,e)=>{const f={a:b,b:c,cnt:M,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=Q;try{return e(c,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var p=((a,b,c)=>{if(c===K){const c=n.encode(a);const d=b(c.length,M)>>>Q;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,M)>>>Q;const f=j();let g=Q;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==Q){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,M)>>>Q;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var j=(()=>{if(i===L||i.byteLength===Q){i=new R(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>Q;return h.decode(j().subarray(a,a+ b))});var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;q=L;i=L;a.__wbindgen_start();return a});let a;const b=new J(128).fill(K);b.push(K,L,!0,!1);let d=b.length;const h=typeof TextDecoder!==N?new TextDecoder(O,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw P(`TextDecoder not available`)}};if(typeof TextDecoder!==N){h.decode()};let i=L;let m=Q;const n=typeof TextEncoder!==N?new TextEncoder(O):{encode:()=>{throw P(`TextEncoder not available`)}};const o=typeof n.encodeInto===T?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=L;class A{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=Q;return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-V);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=r()[e/W+ Q];var c=r()[e/W+ M];var d=x(b,c);if(b!==Q){a.__wbindgen_free(b,c,M)};return d}finally{a.__wbindgen_add_to_stack_pointer(V)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>Q}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,g(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}class B{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=Q;return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,g(b));return f(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return f(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,g(b));return f(d)}}class C{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=Q;return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default I;export{A as IntoUnderlyingByteSource,B as IntoUnderlyingSink,C as IntoUnderlyingSource,H as initSync}