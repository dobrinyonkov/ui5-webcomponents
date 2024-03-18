import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Breadcrumbs.css.ts", content: `:host(:not([hidden])){display:block;width:100%}.ui5-breadcrumbs-root{white-space:nowrap;outline:none;margin:var(--_ui5-v1-24-0-rc-1_breadcrumbs_margin)}.ui5-breadcrumbs-root>ol{margin:0;padding:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:flex}.ui5-breadcrumbs-root>ol>li{display:inline}.ui5-breadcrumbs-dropdown-arrow-link-wrapper[hidden]{display:none}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]{width:var(--sapFontSize);height:var(--sapFontSize);padding-left:.675rem;vertical-align:text-top;color:var(--sapLinkColor)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]{color:var(--_ui5-v1-24-0-rc-1_link_focus_color)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]:before{content:"...";vertical-align:middle;position:absolute;left:0;bottom:0}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]:after,.ui5-breadcrumbs-dropdown-arrow-link-wrapper:hover [ui5-icon]:after{content:"";position:absolute;border-bottom:.0625rem solid;inset:0 0 1px}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%}.ui5-breadcrumbs-separator:after{content:"/";padding:0 .25rem;cursor:auto;color:var(--sapContent_LabelColor);display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}:host([separator-style="DoubleSlash"]) .ui5-breadcrumbs-separator:after{content:"//"}:host([separator-style="BackSlash"]) .ui5-breadcrumbs-separator:after{content:"\\\\"}:host([separator-style="DoubleBackSlash"]) .ui5-breadcrumbs-separator:after{content:"\\\\\\\\"}:host([separator-style="GreaterThan"]) .ui5-breadcrumbs-separator:after{content:">"}:host([separator-style="DoubleGreaterThan"]) .ui5-breadcrumbs-separator:after{content:">>"}
` };
export default styleData;
//# sourceMappingURL=Breadcrumbs.css.js.map