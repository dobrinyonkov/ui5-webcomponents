import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
import TemplateToolbarTypes from "./TemplateToolbarTypes.js";
const component = "ui5-toolbar";
export default {
    title: "Main/Toolbar",
    component: "Toolbar",
    subcomponents: {
        ToolbarButton: "ToolbarButton",
        ToolbarSelect: "ToolbarSelect",
        ToolbarSelectOption: "ToolbarSelectOption",
        ToolbarSeparator: "ToolbarSeparator",
        ToolbarSpacer: "ToolbarSpacer",
    },
    argTypes,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
};
const Template = (args) => {
    return html `<ui5-toolbar
		align-content="${ifDefined(args.alignContent)}"
	>
		${unsafeHTML(args.default)}
</ui5-toolbar>`;
};
export const Basic = Template.bind({});
Basic.storyName = "Basic";
Basic.args = {
    default: `
	<ui5-toolbar-button
	icon="decline"
	text="Mid 2">
	</ui5-toolbar-button>
	<ui5-toolbar-button
  		icon="add"
  		text="Right 1">
	</ui5-toolbar-button>
	<ui5-toolbar-button
  		icon="employee"
		text="Right 4">
	</ui5-toolbar-button>
	<ui5-toolbar-button
		id="myOverflowBtn"
		icon="employee"
		text="Call me later">
	</ui5-toolbar-button>`,
};
export const Types = TemplateToolbarTypes.bind({});
//# sourceMappingURL=Toolbar.stories.js.map