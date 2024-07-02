var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ColorPaletteItem_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { isPhone } from "@ui5/webcomponents-base/dist/Device.js";
import ColorPaletteItemTemplate from "./generated/templates/ColorPaletteItemTemplate.lit.js";
import { COLORPALETTE_COLOR_LABEL, } from "./generated/i18n/i18n-defaults.js";
// Styles
import ColorPaletteItemCss from "./generated/themes/ColorPaletteItem.css.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-color-palette-item` component represents a color in the the `ui5-color-palette`.
 * @constructor
 * @extends UI5Element
 * @since 1.0.0-rc.12
 * @implements { IColorPaletteItem }
 * @public
 */
let ColorPaletteItem = ColorPaletteItem_1 = class ColorPaletteItem extends UI5Element {
    static async onDefine() {
        ColorPaletteItem_1.i18nBundle = await getI18nBundle("@ui5/webcomponents");
    }
    constructor() {
        super();
        /**
         * Defines if the component is selected.
         *
         * **Note:** Only one item must be selected per <code>ui5-color-palette</code>.
         * If more than one item is defined as selected, the last one would be considered as the selected one.
         *
         * @public
         * @default false
         * @since 2.0.0
         */
        this.selected = false;
        /**
         * Defines the tab-index of the element, helper information for the ItemNavigation.
         * @private
         */
        this.forcedTabIndex = "-1";
        /**
         * Defines if the ColorPalette is on phone mode.
         * @private
         */
        this.onPhone = false;
        /**
         * @private
         * @since 1.0.0-rc.15
         */
        this._disabled = false;
    }
    onBeforeRendering() {
        this._disabled = !this.value;
        this.onPhone = isPhone();
        this.setAttribute("style", `background-color: ${this.value}`);
    }
    get colorLabel() {
        return ColorPaletteItem_1.i18nBundle.getText(COLORPALETTE_COLOR_LABEL);
    }
    get styles() {
        return {
            root: {
                "background-color": this.value,
            },
        };
    }
    get classes() {
        return {
            root: {
                "ui5-cp-item": true,
            },
        };
    }
};
__decorate([
    property()
], ColorPaletteItem.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], ColorPaletteItem.prototype, "selected", void 0);
__decorate([
    property({ noAttribute: true })
], ColorPaletteItem.prototype, "forcedTabIndex", void 0);
__decorate([
    property({ type: Number })
], ColorPaletteItem.prototype, "index", void 0);
__decorate([
    property({ type: Boolean })
], ColorPaletteItem.prototype, "onPhone", void 0);
__decorate([
    property({ type: Boolean })
], ColorPaletteItem.prototype, "_disabled", void 0);
ColorPaletteItem = ColorPaletteItem_1 = __decorate([
    customElement({
        tag: "ui5-color-palette-item",
        renderer: litRender,
        styles: ColorPaletteItemCss,
        template: ColorPaletteItemTemplate,
    })
], ColorPaletteItem);
ColorPaletteItem.define();
export default ColorPaletteItem;
//# sourceMappingURL=ColorPaletteItem.js.map