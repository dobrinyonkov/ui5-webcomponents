import{_ as p}from"./iframe.cf116cd3.js";import{R as o,a}from"./index.bdfa8201.js";import{a as l}from"./client.69b06123.js";import{C as d,c as h,H as E,d as x}from"./index.4fc8c727.js";var n=new Map,R=({callback:e,children:t})=>{let r=a.exports.useRef();return a.exports.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},f=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(R,{callback:()=>s(null)},e))})},_=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=l.createRoot(e),n.set(e,t)),t},D={code:d,a:h,...E},y=class extends a.exports.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...D,...t==null?void 0:t.components},c=x;return new Promise((u,i)=>{p(()=>import("./index.f3d20384.js"),["./index.f3d20384.js","./index.3107f185.js","./index.bdfa8201.js","./_commonjsHelpers.b8add541.js"],import.meta.url).then(({MDXProvider:m})=>f(o.createElement(y,{showException:i,key:Math.random()},o.createElement(m,{components:s},o.createElement(c,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{_(e)}}};export{A as D,D as d};
//# sourceMappingURL=chunk-S4VUQJ4A.103070d4.js.map
