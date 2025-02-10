import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-pm-rp{width:20rem}.ui5-pm-rp::part(content),.ui5-pm-rp::part(footer){padding-inline:.5rem}.ui5-pm-rp::part(header){box-shadow:none;padding:0}.ui5-pm-header{width:100%;padding-block-start:1rem;padding-inline:.5rem;display:flex;flex-direction:column}[on-phone] .ui5-pm-header{padding-inline:0}.ui5-pm-phone-header::part(startContent),.ui5-pm-phone-header::part(endContent){padding:0}.ui5-pm-phone-header [ui5-button]{margin-inline:.5rem;font-family:var(--sapFontSemiboldFamily)}.ui5-pm-rp::part(content){padding-top:0;padding-bottom:.5rem}.ui5-pm-rp::part(footer){padding-block:.5rem}.ui5-pm-selected-account{display:flex;align-items:center;flex-direction:column;margin-bottom:1rem}.ui5-pm--selected-account-avatar{margin-block:.5rem}.ui5-pm-selected-account-title{margin-block:.25rem;font-family:var(--sapFontBoldFamily);font-size:var(--sapFontLargeSize);color:var(--sapTextColor)}.ui5-pm-selected-account-subtitleText{margin-block:.25rem;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);color:var(--sapContent_LabelColor)}.ui5-pm-selected-account-description{margin-bottom:1rem;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);color:var(--sapContent_LabelColor)}.ui5-pm-decline-btn{align-self:flex-end;font-family:var(--sapFontSemiboldFamily)}.ui5-pm-manage-account-btn{margin-top:.5rem;font-family:var(--sapFontSemiboldFamily)}.ui5-pm-sign-out-btn{font-family:var(--sapFontSemiboldFamily)}.ui5-pm-other-accounts{margin-bottom:1rem}.ui5-pm-other-accounts::part(content){padding:0}.ui5-pm-other-accounts-content{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:1rem;padding-block:1rem}.ui5-user-menu-account-header{display:flex;flex:1;justify-content:space-between;align-items:center}.ui5-pm-footer{display:flex;flex:1;justify-content:flex-end;align-items:center}
`;
//# sourceMappingURL=UserMenu.css.js.map