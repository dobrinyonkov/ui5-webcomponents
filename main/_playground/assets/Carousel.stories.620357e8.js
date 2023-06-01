import{x as r}from"./lit-element.179636e6.js";import{l as i}from"./if-defined.9da98955.js";import{o as u}from"./unsafe-html.ff185b2f.js";import{D as g}from"./docs.10aac2c6.js";import{C as f}from"./CarouselArrowsPlacement.741a0b97.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.103070d4.js";import"./iframe.cf116cd3.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4fc8c727.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const h={arrowsPlacement:{control:"select",options:["Content","Navigation"]},pageIndicatorStyle:{control:"select",options:["Default","Numeric"]},navigateTo:{description:"Changes the currently displayed page.",table:{category:"methods"}}},P={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},s="ui5-carousel",k={title:"Main/Carousel",component:s,parameters:{docs:{page:g({...P,component:s})}},argTypes:h},p=e=>r`
<ui5-carousel
    ?cyclic="${i(e.cyclic)}"
    items-per-page-s="${i(e.itemsPerPageS)}"
    items-per-page-m="${i(e.itemsPerPageM)}"
    items-per-page-l="${i(e.itemsPerPageL)}"
    ?hide-navigation-arrows="${i(e.hideNavigationArrows)}"
    ?hide-page-indicator="${i(e.hidePageIndicator)}"
    page-indicator-style="${i(e.pageIndicatorStyle)}"
    arrows-placement="${i(e.arrowsPlacement)}"
>
    ${u(e.default)}
</ui5-carousel>`,a=p.bind({});a.args={cyclic:!0,default:`<img src="../assets/images/sample1.jpg" alt="Landscape 1">
    <img src="../assets/images/sample2.jpg" alt="Landscape 2">
    <img src="../assets/images/sample3.jpg" alt="Bulb">`};a.decorators=[e=>r`<style>
    img {
        max-height: 30rem;
    }
</style>
${e()}`];const t=p.bind({});t.args={itemsPerPageS:1,itemsPerPageM:2,itemsPerPageL:2,arrowsPlacement:f.Navigation,default:`<ui5-card class="medium">
    <ui5-card-header slot="header" title-text="Activities" subtitle-text="For Today"></ui5-card-header>
    <ui5-timeline>
        <ui5-timeline-item id="test-item" title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
        <ui5-timeline-item title-text="Weekly Sync - CP Design" timestamp="1517349600000" icon="calendar">MR SOF02 2.43</ui5-timeline-item>
        <ui5-timeline-item title-text="Video Conference Call - UI5" timestamp="1485813600000" icon="calendar">Online meeting</ui5-timeline-item>
    </ui5-timeline>
</ui5-card>
<ui5-card class="small">
    <ui5-card-header slot="header" title-text="David Williams" subtitle-text="Sales Manager">
        <img src="../assets/images/avatars/man_avatar_1.png" alt="" slot="avatar">
    </ui5-card-header>
    <ui5-list separators="Inner">
        <ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
        <ui5-li icon="wallet" icon-end>Finance</ui5-li>
        <ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
    </ui5-list>
</ui5-card>
<ui5-card class="medium">
    <ui5-card-header slot="header" title-text="Team Dolphins" subtitle-text="Direct Reports" status="1 of 2">
        <ui5-icon name="group" slot="avatar"></ui5-icon>
    </ui5-card-header>
    <div class="card-content">
        <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li image="../assets/images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>
            <ui5-li image="../assets/images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>
            <ui5-li image="../assets/images/avatars/woman_avatar_2.png" description="UX Specialist">Michael Adams</ui5-li>
        </ui5-list>
    </div>
</ui5-card>
<ui5-card class="medium">
    <ui5-card-header slot="header" title-text="Team Bears" subtitle-text="Direct Reports" interactive="" status="2 of 2">
        <ui5-icon name="group" slot="avatar"></ui5-icon>
    </ui5-card-header>
    <div class="card-content">
        <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
            <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
            <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
        </ui5-list>
    </div>
</ui5-card>`};t.decorators=[e=>r`<style>
    ui5-carousel::part(content) {
        padding-block: 0.75rem;
    }

    ui5-card {
        min-width: 18rem;
    }

    ui5-li::part(icon) {
        padding-inline-end: 0;
    }

    .card-content {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
    }
</style>
${e()}`];var n,o,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`
<ui5-carousel
    ?cyclic="\${ifDefined(args.cyclic)}"
    items-per-page-s="\${ifDefined(args.itemsPerPageS)}"
    items-per-page-m="\${ifDefined(args.itemsPerPageM)}"
    items-per-page-l="\${ifDefined(args.itemsPerPageL)}"
    ?hide-navigation-arrows="\${ifDefined(args.hideNavigationArrows)}"
    ?hide-page-indicator="\${ifDefined(args.hidePageIndicator)}"
    page-indicator-style="\${ifDefined(args.pageIndicatorStyle)}"
    arrows-placement="\${ifDefined(args.arrowsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-carousel>\`;
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-carousel
    ?cyclic="\${ifDefined(args.cyclic)}"
    items-per-page-s="\${ifDefined(args.itemsPerPageS)}"
    items-per-page-m="\${ifDefined(args.itemsPerPageM)}"
    items-per-page-l="\${ifDefined(args.itemsPerPageL)}"
    ?hide-navigation-arrows="\${ifDefined(args.hideNavigationArrows)}"
    ?hide-page-indicator="\${ifDefined(args.hidePageIndicator)}"
    page-indicator-style="\${ifDefined(args.pageIndicatorStyle)}"
    arrows-placement="\${ifDefined(args.arrowsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-carousel>\`;
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const R=["SingleItemPerPage","MultipleItemsPerPage"];export{t as MultipleItemsPerPage,a as SingleItemPerPage,R as __namedExportsOrder,k as default};
//# sourceMappingURL=Carousel.stories.620357e8.js.map
