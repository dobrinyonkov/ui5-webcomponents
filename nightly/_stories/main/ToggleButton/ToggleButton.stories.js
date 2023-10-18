import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
import ButtonDesign from "@ui5/webcomponents/dist/types/ButtonDesign.js";
const component = "ui5-toggle-button";
export default {
    title: "Main/ToggleButton",
    component: "ToggleButton",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-toggle-button
	?pressed="${ifDefined(args.pressed)}"
	?disabled="${ifDefined(args.disabled)}"
	design="${ifDefined(args.design)}"
	icon="${ifDefined(args.icon)}"
>
	${unsafeHTML(args.default)}
</ui5-toggle-button>`;
export const Basic = Template.bind({});
Basic.args = {
    default: "Default",
};
export const DifferentDesigns = () => html `
	<ui5-toggle-button design="${ButtonDesign.Emphasized}"> Emphasized </ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Attention}"> Attention </ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Positive}"> Positive </ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Negative}"> Negative </ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Transparent}"> Transparent </ui5-toggle-button>
`;
export const IconOnlyToggleButtons = () => html `
	<ui5-toggle-button design="${ButtonDesign.Emphasized}" icon="business-suite/icon-target"></ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Attention}" icon="message-warning" tooltip="Warning Button"></ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Positive}" icon="business-suite/icon-completed" tooltip="Positive Button"></ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Negative}" icon="cancel" tooltip="Negative Button"></ui5-toggle-button>
	<ui5-toggle-button design="${ButtonDesign.Transparent}" icon="account" tooltip="Transparent Button"></ui5-toggle-button>
`;
IconOnlyToggleButtons.storyName = "Icon-Only Toggle Buttons";
//# sourceMappingURL=ToggleButton.stories.js.map