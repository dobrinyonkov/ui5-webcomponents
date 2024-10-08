var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProductSwitch_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import i18n from "@ui5/webcomponents-base/dist/decorators/i18n.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { isDown, isUp, } from "@ui5/webcomponents-base/dist/Keys.js";
import ProductSwitchTemplate from "./generated/templates/ProductSwitchTemplate.lit.js";
import { PRODUCT_SWITCH_CONTAINER_LABEL, } from "./generated/i18n/i18n-defaults.js";
// Styles
import ProductSwitchCss from "./generated/themes/ProductSwitch.css.js";
/**
 * @class
 * ### Overview
 *
 * The `ui5-product-switch` is an SAP Fiori specific web component that is used in `ui5-shellbar`
 * and allows the user to easily switch between products.
 *
 * ### Keyboard Handling
 * The `ui5-product-switch` provides advanced keyboard handling.
 * When focused, the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Tab] - Move focus to the next interactive element after the `ui5-product-switch`
 * - [Up] or [Down] - Navigates up and down the items
 * - [Left] or [Right] - Navigates left and right the items
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents-fiori/dist/ProductSwitch.js";`
 *
 * `import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";` (for `ui5-product-switch-item`)
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.5
 */
let ProductSwitch = ProductSwitch_1 = class ProductSwitch extends UI5Element {
    constructor() {
        super();
        this._currentIndex = 0;
        this._rowSize = 4;
        this._itemNavigation = new ItemNavigation(this, {
            rowSize: this._rowSize,
            getItemsCallback: () => this.items,
        });
        this._handleResizeBound = this._handleResize.bind(this);
    }
    static get ROW_MIN_WIDTH() {
        return {
            ONE_COLUMN: 600,
            THREE_COLUMN: 900,
        };
    }
    get _ariaLabelText() {
        return ProductSwitch_1.i18nBundle.getText(PRODUCT_SWITCH_CONTAINER_LABEL);
    }
    onEnterDOM() {
        ResizeHandler.register(document.body, this._handleResizeBound);
    }
    onExitDOM() {
        ResizeHandler.deregister(document.body, this._handleResizeBound);
    }
    onBeforeRendering() {
        this.desktopColumns = this.items.length > 6 ? 4 : 3;
    }
    _handleResize() {
        const documentWidth = document.body.clientWidth;
        if (documentWidth <= this.constructor.ROW_MIN_WIDTH.ONE_COLUMN) {
            this._setRowSize(1);
        }
        else if (documentWidth <= this.constructor.ROW_MIN_WIDTH.THREE_COLUMN || this.items.length <= 6) {
            this._setRowSize(3);
        }
        else {
            this._setRowSize(4);
        }
    }
    handleProductSwitchItemClick(e) {
        this.items.forEach(item => { item.selected = false; });
        e.target.selected = true;
    }
    _onfocusin(e) {
        const target = e.target;
        this._itemNavigation.setCurrentItem(target);
        this._currentIndex = this.items.indexOf(target);
    }
    _setRowSize(size) {
        this._rowSize = size;
        this._itemNavigation.setRowSize(size);
    }
    _onkeydown(e) {
        if (isDown(e)) {
            this._handleDown(e);
        }
        else if (isUp(e)) {
            this._handleUp(e);
        }
    }
    _handleDown(e) {
        const itemsLength = this.items.length;
        if (this._currentIndex + this._rowSize > itemsLength) { // border reached, do nothing
            e.stopPropagation();
        }
    }
    _handleUp(e) {
        if (this._currentIndex - this._rowSize < 0) { // border reached, do nothing
            e.stopPropagation();
        }
    }
};
__decorate([
    property({ type: Number })
], ProductSwitch.prototype, "desktopColumns", void 0);
__decorate([
    slot({ type: HTMLElement, "default": true })
], ProductSwitch.prototype, "items", void 0);
__decorate([
    i18n("@ui5/webcomponents-fiori")
], ProductSwitch, "i18nBundle", void 0);
ProductSwitch = ProductSwitch_1 = __decorate([
    customElement({
        tag: "ui5-product-switch",
        renderer: litRender,
        styles: ProductSwitchCss,
        template: ProductSwitchTemplate,
    })
], ProductSwitch);
ProductSwitch.define();
export default ProductSwitch;
//# sourceMappingURL=ProductSwitch.js.map