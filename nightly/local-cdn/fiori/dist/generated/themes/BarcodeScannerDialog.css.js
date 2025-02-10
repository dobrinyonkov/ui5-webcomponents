import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-barcode-scanner-dialog-root::part(content){display:flex;flex-direction:column;padding:.4375rem}.ui5-barcode-scanner-dialog-video-wrapper{position:relative;min-height:0}.ui5-barcode-scanner-dialog-video-wrapper,.ui5-barcode-scanner-dialog-video,.ui5-barcode-scanner-dialog-overlay{height:100%;width:100%}.ui5-barcode-scanner-dialog-video{object-fit:cover}.ui5-barcode-scanner-dialog-overlay{display:none;position:absolute;inset:0}.ui5-barcode-scanner-dialog-footer{display:flex;justify-content:flex-end;width:100%;padding-top:.4375rem}.ui5-barcode-scanner-dialog-busy{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.ui5-barcode-scanner-dialog-busy:not([active]){display:none}
`;
//# sourceMappingURL=BarcodeScannerDialog.css.js.map