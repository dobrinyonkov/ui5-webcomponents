import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host{font-family:var(--sapFontSemiboldDuplexFamily);color:var(--sapList_HeaderTextColor);align-items:center;flex-wrap:nowrap;max-width:100%;gap:.125rem}:host(:empty){padding:0}[ui5-icon]{margin-inline-start:.375rem;width:1rem;height:1rem;flex-shrink:0}::slotted([ui5-label]){color:inherit;font-family:inherit;overflow:hidden}
`;
//# sourceMappingURL=TableHeaderCell.css.js.map