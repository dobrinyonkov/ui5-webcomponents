/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `${this._hasRowSelector ? block1.call(this, context, tags, suffix) : undefined}${repeat(this._visibleCells, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}${this._popinCells.length ? block4.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-table-header-cell", tags, suffix)} id="selection-cell" aria-selected="${ifDefined(this._isSelected)}" aria-label="${ifDefined(this._i18nSelection)}" ui5-table-selection-component>${this._isMultiSelect ? block2.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-table-header-cell", tags, suffix)}>` : html `<ui5-table-header-cell id="selection-cell" aria-selected="${ifDefined(this._isSelected)}" aria-label="${ifDefined(this._i18nSelection)}" ui5-table-selection-component>${this._isMultiSelect ? block2.call(this, context, tags, suffix) : undefined}</ui5-table-header-cell>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-checkbox", tags, suffix)} id="selection-component" tabindex="-1" ?checked="${this._isSelected}" accessible-name="${ifDefined(this._i18nRowSelector)}" @ui5-change="${ifDefined(this._informSelectionChange)}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : html `<ui5-checkbox id="selection-component" tabindex="-1" ?checked="${this._isSelected}" accessible-name="${ifDefined(this._i18nRowSelector)}" @ui5-change="${ifDefined(this._informSelectionChange)}"></ui5-checkbox>`; }
function block3(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item._individualSlot)}"></slot>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-table-header-cell", tags, suffix)} id="popin-cell" aria-label="${ifDefined(this._i18nRowPopin)}" excluded-from-navigation></${scopeTag("ui5-table-cell", tags, suffix)}>` : html `<ui5-table-header-cell id="popin-cell" aria-label="${ifDefined(this._i18nRowPopin)}" excluded-from-navigation></ui5-table-cell>`; }
export default block0;
//# sourceMappingURL=TableHeaderRowTemplate.lit.js.map