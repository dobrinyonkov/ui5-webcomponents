import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Label.css.ts", content: `:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%;cursor:inherit}:host{white-space:normal}:host([wrapping-type="None"]){white-space:nowrap}:host([wrapping-type="None"]) .ui5-label-root{display:inline-flex}:host([wrapping-type="None"]) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;flex:0 1 auto;min-width:0}:host([show-colon]) .ui5-label-required-colon:before{content:attr(data-colon)}:host([required]) .ui5-label-required-colon:after{content:"*";color:var(--sapField_RequiredColor);font-size:1.25rem;font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}:host([required][show-colon]) .ui5-label-required-colon:after{margin-inline-start:.125rem}bdi{padding-right:.075rem}:host([show-colon]) .ui5-label-required-colon{margin-inline-start:-.05rem;white-space:pre}
` };
export default styleData;
//# sourceMappingURL=Label.css.js.map