/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} hide-arrow content-only-on-desktop placement="Bottom" ?open="${this._open}" .opener="${ifDefined(this.opener)}" @ui5-close="${ifDefined(this.onAfterClose)}" @ui5-open="${ifDefined(this.onAfterOpen)}"><div slot="header" class="ui5-cp-header"><${scopeTag("ui5-title", tags, suffix)} level="H5" wrapping-type="None">${ifDefined(this._colorPaletteTitle)}</${scopeTag("ui5-title", tags, suffix)}></div><div><${scopeTag("ui5-color-palette", tags, suffix)} ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${ifDefined(this.defaultColor)}" popup-mode @ui5-item-click="${ifDefined(this.onSelectedColor)}">${repeat(this.colorPaletteColors, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-color-palette", tags, suffix)}></div><div slot="footer" class="ui5-cp-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this.closePopover}">${ifDefined(this._cancelButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover hide-arrow content-only-on-desktop placement="Bottom" ?open="${this._open}" .opener="${ifDefined(this.opener)}" @ui5-close="${ifDefined(this.onAfterClose)}" @ui5-open="${ifDefined(this.onAfterOpen)}"><div slot="header" class="ui5-cp-header"><ui5-title level="H5" wrapping-type="None">${ifDefined(this._colorPaletteTitle)}</ui5-title></div><div><ui5-color-palette ?show-more-colors="${this.showMoreColors}" ?show-recent-colors="${this.showRecentColors}" ?show-default-color="${this.showDefaultColor}" default-color="${ifDefined(this.defaultColor)}" popup-mode @ui5-item-click="${ifDefined(this.onSelectedColor)}">${repeat(this.colorPaletteColors, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</ui5-color-palette></div><div slot="footer" class="ui5-cp-footer"><ui5-button design="Transparent" @click="${this.closePopover}">${ifDefined(this._cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`; }
function block1(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item._individualSlot)}"></slot>`; }
export default block0;
//# sourceMappingURL=ColorPalettePopoverTemplate.lit.js.map