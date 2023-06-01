import{x as h}from"./lit-element.179636e6.js";import{D as T}from"./docs.10aac2c6.js";import{l as i}from"./if-defined.9da98955.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.103070d4.js";import"./iframe.cf116cd3.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4fc8c727.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const w={},v={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},o="ui5-slider",z={title:"Main/Slider",component:o,parameters:{docs:{page:T({...v,component:o})}},argTypes:w},l=e=>h`
<ui5-slider
    value="${i(e.value)}"
    min="${i(e.min)}"
    max="${i(e.max)}"
    step="${i(e.step)}"
    ?show-tickmarks="${i(e.showTickmarks)}"
    label-interval="${i(e.labelInterval)}"
    ?show-tooltip="${i(e.showTooltip)}"
    ?disabled="${i(e.disabled)}"
    accessible-name="${i(e.accessibleName)}"
></ui5-slider>`,n=l.bind({}),a=l.bind({});a.args={min:0,max:20,showTooltip:!0,labelInterval:5};a.storyName="Slider with Tooltip";const s=l.bind({});s.args={min:20,max:100,labelInterval:5,disabled:!0,showTickmarks:!0};s.storyName="Disabled Slider with Tickmarks and Labels";const r=l.bind({});r.args={min:-20,max:20,step:2,value:12,showTooltip:!0,labelInterval:2,showTickmarks:!0};r.storyName="Slider Tooltip, Tickmarks and Labels";var t,d,m;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,f,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(p=(f=a.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var b,$,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(g=($=s.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var u,D,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(k=(D=r.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const A=["BasicSlider","SliderTooltip","DisabledTickmarksLabel","TickmarksLabelTooltip"];export{n as BasicSlider,s as DisabledTickmarksLabel,a as SliderTooltip,r as TickmarksLabelTooltip,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Slider.stories.a64b10f6.js.map
