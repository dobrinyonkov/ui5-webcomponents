import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as i}from"./index.be842d22.js";import{u as o}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.785a021f.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function g(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol",li:"li",h2:"h2"},o(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/Development/Custom UI5 Web Components"}),`
`,e.exports.jsx(t.h1,{id:"developing-custom-ui5-web-components",children:"Developing Custom UI5 Web Components"}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Note:"})," All examples in this tutorial are taken from the Demo UI5 Web Component (",e.exports.jsx(t.code,{children:"ui5-demo"}),`), generated by the package initialization script.
For more information on creating a new package with a demo Web Component inside, click `,e.exports.jsx(t.a,{href:"./?path=/docs/docs-development-custom-ui5-web-components-packages--docs",children:"here"}),"."]}),`
`,e.exports.jsx(t.h3,{id:"the-class-definition",children:"The class definition"}),`
`,e.exports.jsx("a",{name:"classdef"}),`
`,e.exports.jsxs(t.p,{children:["The main file representing the Web Component is ",e.exports.jsx(t.code,{children:"Demo.js"}),"."]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";


const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}


	static get dependencies() {
		return []; // array of components used internally
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.exports.jsx(t.h3,{id:"the-ui5element-base-class",children:"The UI5Element base class"}),`
`,e.exports.jsxs(t.p,{children:["Every UI5 Web Component must extend the base class ",e.exports.jsx(t.code,{children:"UI5Element"}),", provided by the ",e.exports.jsx(t.code,{children:"@ui5/webcomponents-base"})," package:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

class Demo extends UI5Element {

}

export default Demo;
`})}),`
`,e.exports.jsx(t.h3,{id:"the-metadata-object",children:"The metadata object"}),`
`,e.exports.jsx(t.p,{children:"Metadata is a JavaScript object, containing information about the public interface of a UI5 Web Component (tag name, properties, slots, events, etc.)."}),`
`,e.exports.jsxs(t.p,{children:["Metadata is passed via the ",e.exports.jsx(t.code,{children:"metadata"})," static getter:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}
}

export default Demo;
`})}),`
`,e.exports.jsxs(t.p,{children:["So far, we've defined a ",e.exports.jsx(t.code,{children:"ui5-demo"})," Web Component with no properties, slots or events."]}),`
`,e.exports.jsxs(t.p,{children:["For a complete reference to all metadata entities, click ",e.exports.jsx(t.a,{href:"./?path=/docs/docs-development-understanding-components-metadata--docs",children:"here"}),"."]}),`
`,e.exports.jsx(t.h3,{id:"the-render-engine",children:"The render engine"}),`
`,e.exports.jsxs(t.p,{children:["UI5 Web Components are agnostic of the DOM render engine used. However, all standard UI5 Web Components (",e.exports.jsx(t.code,{children:"@ui5/webcomponents"}),", ",e.exports.jsx(t.code,{children:"@ui5/webcomponents-fiori"}),`, etc.)
use `,e.exports.jsx(t.a,{href:"https://github.com/Polymer/lit-html",target:"_blank",rel:"nofollow noopener noreferrer",children:"lit-html"})," as the rendering technology of choice."]}),`
`,e.exports.jsxs(t.p,{children:["The render engine is defined via the ",e.exports.jsx(t.code,{children:"render"})," static getter:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}
}

export default Demo;
`})}),`
`,e.exports.jsxs(t.p,{children:["Here we import ",e.exports.jsx(t.code,{children:"LitRenderer.js"})," from the ",e.exports.jsx(t.code,{children:"@ui5/webcomponents-base"})," package which is a very tiny wrapper around ",e.exports.jsx(t.code,{children:"lit-html"}),"."]}),`
`,e.exports.jsx(t.h3,{id:"the-template",children:"The template"}),`
`,e.exports.jsx(t.p,{children:"Now that we've defined the rendering technology of choice, we can pass a template in that technology's syntax."}),`
`,e.exports.jsxs(t.p,{children:["This is done via the ",e.exports.jsx(t.code,{children:"template"})," static getter:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}
}

export default Demo;
`})}),`
`,e.exports.jsxs(t.p,{children:["The standard UI5 Web Components use ",e.exports.jsx(t.a,{href:"https://github.com/wycats/handlebars.js/",target:"_blank",rel:"nofollow noopener noreferrer",children:"handlebars"}),` templates that are automatically converted
to `,e.exports.jsx(t.code,{children:"lit-html"})," syntax by the build script."]}),`
`,e.exports.jsxs(t.p,{children:["If you have a ",e.exports.jsx(t.code,{children:"Demo.hbs"})," file along with the ",e.exports.jsx(t.code,{children:"Demo.js"})," file, the build script is going to create for you ",e.exports.jsx(t.code,{children:"generated/templates/DemoTemplate.lit.js"}),` file.
Therefore, we pass the content of this file to the `,e.exports.jsx(t.code,{children:"template"})," static getter."]}),`
`,e.exports.jsxs(t.p,{children:["For more information, see the ",e.exports.jsx(t.a,{href:"#hbs",children:"next chapter"})," of this tutorial."]}),`
`,e.exports.jsx(t.h3,{id:"the-css-definitions",children:"The CSS definitions"}),`
`,e.exports.jsxs(t.p,{children:["You can pass CSS to be inserted in the Shadow Root of the UI5 Web Component by using the ",e.exports.jsx(t.code,{children:"styles"})," static getter:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}
}

export default Demo;
`})}),`
`,e.exports.jsxs(t.p,{children:["If you have a ",e.exports.jsx(t.code,{children:"themes/Demo.css"})," file, the build script will automatically generate for you a ",e.exports.jsx(t.code,{children:"generated/themes/Demo.css.js"}),` file, which
in addition to your component's CSS, also contains definitions for all CSS Vars for the default theme. You can define your own CSS
Vars for each theme in the respective theme directory in `,e.exports.jsx(t.code,{children:"themes/"}),":"]}),`
`,e.exports.jsxs(t.table,{children:[e.exports.jsx(t.thead,{children:e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.th,{children:"File"}),e.exports.jsx(t.th,{children:"Descriptions"})]})}),e.exports.jsxs(t.tbody,{children:[e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_belize/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_belize"})," theme."]})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_belize_hcb/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_belize_hcb"})," theme."]})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_fiori_3/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_fiori_3"})," theme."]})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_fiori_3_dark/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_fiori_3_dark"})," theme."]})]})]})]}),`
`,e.exports.jsxs(t.p,{children:["For more information, see the ",e.exports.jsx(t.a,{href:"#css",children:"CSS"})," chapter of this tutorial."]}),`
`,e.exports.jsx(t.h3,{id:"the-dependencies",children:"The dependencies"}),`
`,e.exports.jsxs(t.p,{children:["You must import all other web components, used inside the ",e.exports.jsx(t.code,{children:".hbs"})," template file. Otherwise, the internally used web components won't be defined."]}),`
`,e.exports.jsxs(t.p,{children:["Furthermore, in order to make use of the ",e.exports.jsx(t.a,{href:"./?path=/docs/docs-advanced-scoping--docs",children:"Scoping"})," feature, you must list all the internally used web components in the ",e.exports.jsx(t.code,{children:"dependencies"}),` static getter,
as the framework reads the dependencies and scopes the tag names of the listed web components.`]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx("b",{children:"For Example:"})," If the ",e.exports.jsx(t.code,{children:"ui5-icon"})," tag (or any other standard or custom UI5 Web component) is used inside the template, you must import the ",e.exports.jsx(t.code,{children:"Icon"})," web component and add it to the ",e.exports.jsx(t.code,{children:"dependencies"})," static getter as shown below."]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";
// Styles
import DemoCss from "./generated/themes/Demo.css.js";

import Icon from "@ui5/webcomponents/dist/Icon.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return [Icon]; // array of components used internally
	}
}

export default Demo;
`})}),`
`,e.exports.jsx(t.h3,{id:"defining-the-web-component",children:"Defining the Web Component"}),`
`,e.exports.jsx(t.p,{children:"Defining a Web Component is necessary in order to register it in the browser."}),`
`,e.exports.jsxs(t.p,{children:["This is done by calling the ",e.exports.jsx(t.code,{children:"UI5Element.define"})," static method:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return []; // array of components used internally
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.exports.jsx(t.h3,{id:"adding-i18n-support",children:"Adding i18n support"}),`
`,e.exports.jsx(t.p,{children:"There are few steps to do that:"}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"Get and assign an i18n bundle during component definition"}),`
`]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`await Demo.i18nBundle = getI18nBundle("my-ui5-web-components");
`})}),`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsx(t.code,{children:"getI18nBundle"})," method is provided by the ",e.exports.jsx(t.code,{children:"i18nBundle.js"})," module from the ",e.exports.jsx(t.code,{children:"@ui5/webcomponents-base"})," package."]}),`
`,e.exports.jsxs(t.ol,{start:"2",children:[`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsxs(t.p,{children:['Get texts from the bundle (in this case for the "Count" word), according to the currently ',e.exports.jsx(t.a,{href:"./?path=/docs/docs-advanced-configuration--docs",children:"configured"}),` language
`,e.exports.jsx(t.code,{children:"return Demo.i18nBundle.getText(COUNT);"})]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsxs(t.p,{children:["And, create a simple getter ",e.exports.jsx(t.code,{children:"get countText()"})," to use it in the template later-on."]}),`
`]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"So the final source code is:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import DemoTemplate from "./generated/templates/DemoTemplate.lit.js";

// Styles
import DemoCss from "./generated/themes/Demo.css.js";

import { COUNT } from "./generated/i18n/i18n-defaults.js";


const metadata = {
	tag: "ui5-demo",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return []; // array of components used internally
	}

	static async onDefine() {
		Demo.i18nBundle = await getI18nBundle("my-ui5-web-components");
	}

	get counterText() {
		return Demo.i18nBundle.getText(COUNT);
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.exports.jsxs(t.p,{children:["Please, note that here we use the ",e.exports.jsx(t.code,{children:"onDefine"})," method of ",e.exports.jsx(t.code,{children:"UI5Element"}),` in order to ensure that i18n resources have been fetched
before the Web Component has been defined. The used namespace for resource registration (in this example `,e.exports.jsx(t.code,{children:"my-ui5-web-components"}),`)
is the `,e.exports.jsx(t.code,{children:"name"})," property of your ",e.exports.jsx(t.code,{children:"package.json"})," file."]}),`
`,e.exports.jsx(t.h2,{id:"adding-a-property",children:"Adding a property"}),`
`,e.exports.jsxs(t.p,{children:["To add a property, you need to change the metadata object. In this example, new ",e.exports.jsx(t.code,{children:"count"})," property has been added with default value ",e.exports.jsx(t.code,{children:"0"}),". Also, we use a custom type ",e.exports.jsx(t.code,{children:"Integer"})," as validator for the property."]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";

const metadata = {
	tag: "ui5-demo",
	properties: {
		counter: {
			validator: Integer,
			defaultValue: 0,
		}
	},
};

class Demo extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return DemoTemplate;
	}

	static get styles() {
		return DemoCss;
	}

	static get dependencies() {
		return []; // array of components used internally
	}

	static async onDefine() {
		Demo.i18nBundle = await getI18nBundle("my-ui5-web-components");
	}

	get countText() {
		return Demo.i18nBundle.getText(COUNT);
	}
}

Demo.define();

export default Demo;
`})}),`
`,e.exports.jsx(t.h2,{id:"the-template-file",children:"The template file"}),`
`,e.exports.jsx("a",{name:"hbs"}),`
`,e.exports.jsxs(t.p,{children:["The template of the Web Component is in the ",e.exports.jsx(t.code,{children:"Demo.hbs"}),` file.
In this particular example it looks like this:`]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-handlebars",children:`<div>{{countText}} :: {{count}}</div>
`})}),`
`,e.exports.jsxs(t.p,{children:["The context in the template is the ",e.exports.jsx(t.strong,{children:"Web Component instance"}),`, therefore you can directly use any properties/getters on the object.
Here, we see the `,e.exports.jsx(t.code,{children:"countText"}),` getter that will return the "Count" word, translated into the currently configured language
and the `,e.exports.jsx(t.code,{children:"count"}),' property, defined in the previous step (f.e. in English we will get "Count :: 0").']}),`
`,e.exports.jsxs(t.p,{children:["As explained above, the ",e.exports.jsx(t.code,{children:".hbs"})," file is transformed by the build script to a ",e.exports.jsx(t.code,{children:".js"})," file in the ",e.exports.jsx(t.code,{children:"lit-html"}),` syntax. More specifically, this file
is provided to the Web Component class.`]}),`
`,e.exports.jsxs(t.p,{children:["For a full description of the ",e.exports.jsx(t.code,{children:".hbs"})," template features and syntax, see ",e.exports.jsxs(t.a,{href:"./?path=/docs/docs-development-understanding-hbs-templates--docs",children:["Understanding the Handlebars (",e.exports.jsx(t.code,{children:".hbs"}),") templates"]}),"."]}),`
`,e.exports.jsx(t.h2,{id:"the-css",children:"The CSS"}),`
`,e.exports.jsx("a",{name:"css"}),`
`,e.exports.jsx(t.p,{children:"Let's inspect the following files (one with CSS declarations, the others with CSS Vars values for the themes)."}),`
`,e.exports.jsxs(t.table,{children:[e.exports.jsx(t.thead,{children:e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.th,{children:"File"}),e.exports.jsx(t.th,{children:"Purpose"})]})}),e.exports.jsxs(t.tbody,{children:[e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/Demo.css"})}),e.exports.jsx(t.td,{children:"All CSS rules for the Web Component, same for all themes; will be inserted in the shadow root."})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_belize/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_belize"})," theme."]})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_belize_hcb/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_belize_hcb"})," theme."]})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_fiori_3/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_fiori_3"})," theme."]})]}),e.exports.jsxs(t.tr,{children:[e.exports.jsx(t.td,{children:e.exports.jsx(t.code,{children:"themes/sap_fiori_3_dark/parameters-bundle.css"})}),e.exports.jsxs(t.td,{children:["Values for the component-specific CSS Vars for the ",e.exports.jsx(t.code,{children:"sap_fiori_3_dark"})," theme."]})]})]})]}),`
`,e.exports.jsxs(t.p,{children:["In the ",e.exports.jsx(t.code,{children:"Demo.css"})," file, in addition to other selectors, we have:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-css",children:`:host {
    border: 2px solid var(--ui5-demo-border-color);
    background-color: var(--sapBackgroundColor);
    color: var(--sapTextColor);
}
`})}),`
`,e.exports.jsxs(t.p,{children:["The CSS vars, starting with ",e.exports.jsx(t.code,{children:"--sap"}),` are standard and provided by the framework.
All the rest are custom for the specific Web Component.`]}),`
`,e.exports.jsxs(t.p,{children:["Respectively, the definitions file for, let's say ",e.exports.jsx(t.code,{children:"sap_fiori_3"}),", contains:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-css",children:`:root {
    --ui5-demo-border-color: green;
}
`})}),`
`,e.exports.jsxs(t.p,{children:["What's important to understand here is that you author all the ",e.exports.jsx(t.code,{children:".css"}),` files listed in the table above, but the build script
generates from them a single `,e.exports.jsx(t.code,{children:".js"})," file for you, and this is namely the file you pass to the Web Component class: ",e.exports.jsx(t.code,{children:"generated/themes/Demo.css.js"}),"."]}),`
`,e.exports.jsxs(t.p,{children:["Next: ",e.exports.jsx(t.a,{href:"./?path=/docs/docs-development-understanding-components-metadata--docs",children:"Understanding UI5 Web Components Metadata"})]})]})}}export{g as default};
//# sourceMappingURL=02-custom-UI5-Web-Components.a70a8029.js.map
