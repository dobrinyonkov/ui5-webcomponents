import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Popover.css.ts", content: `:host{box-shadow:var(--_ui5-v1-24-0-rc-1_popover_box_shadow);background-color:var(--_ui5-v1-24-0-rc-1_popover_background);max-width:calc(100vw - (100vw - 100%) - 2 * var(--_ui5-v1-24-0-rc-1_popup_viewport_margin))}:host([hide-arrow]){box-shadow:var(--_ui5-v1-24-0-rc-1_popover_no_arrow_box_shadow)}:host([opened][actual-placement-type="Top"]){margin-top:var(--_ui5-v1-24-0-rc-1-popover-margin-bottom)}:host([opened][actual-placement-type="Bottom"]){margin-top:var(--_ui5-v1-24-0-rc-1-popover-margin-top)}:host([actual-placement-type="Bottom"]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5625rem}:host([actual-placement-type="Bottom"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-0-rc-1_popover_upward_arrow_margin)}:host([actual-placement-type="Left"]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement-type="Left"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-0-rc-1_popover_right_arrow_margin)}:host([actual-placement-type="Top"]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement-type="Top"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-0-rc-1_popover_downward_arrow_margin)}:host(:not([actual-placement-type])) .ui5-popover-arrow,:host([actual-placement-type="Right"]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement-type])) .ui5-popover-arrow:after,:host([actual-placement-type="Right"]) .ui5-popover-arrow:after{margin:var(--_ui5-v1-24-0-rc-1_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--_ui5-v1-24-0-rc-1_popover_background);box-shadow:var(--_ui5-v1-24-0-rc-1_popover_box_shadow);transform:rotate(-45deg)}
` };
export default styleData;
//# sourceMappingURL=Popover.css.js.map