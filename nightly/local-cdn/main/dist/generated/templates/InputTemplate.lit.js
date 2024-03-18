/* eslint no-unused-vars: 0 */
import { html, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-input-root ui5-input-focusable-element" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><input id="${ifDefined(this._id)}-inner" class="ui5-input-inner" style="${styleMap(this.styles.innerInput)}" type="${ifDefined(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${ifDefined(this._innerValue)}" placeholder="${ifDefined(this._placeholder)}" maxlength="${ifDefined(this.maxlength)}" role="${ifDefined(this.accInfo.input.role)}" aria-controls="${ifDefined(this.accInfo.input.ariaControls)}" aria-invalid="${ifDefined(this.accInfo.input.ariaInvalid)}" aria-haspopup="${ifDefined(this.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(this.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(this.accInfo.input.ariaLabel)}" aria-required="${ifDefined(this.required)}" @input="${this._handleInput}" @change="${this._handleChange}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${ifDefined(this.nativeInputAttributes.step)}" min="${ifDefined(this.nativeInputAttributes.min)}" max="${ifDefined(this.nativeInputAttributes.max)}" />${this._effectiveShowClearIcon ? block1.call(this, context, tags, suffix) : undefined}${this.icon.length ? block2.call(this, context, tags, suffix) : undefined}<div class="ui5-input-value-state-icon">${unsafeHTML(this._valueStateInputIcon)}</div>${this.showSuggestions ? block3.call(this, context, tags, suffix) : undefined}${this.accInfo.input.ariaDescription ? block4.call(this, context, tags, suffix) : undefined}${this.hasValueState ? block5.call(this, context, tags, suffix) : undefined}</div><slot name="formSupport"></slot></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><${scopeTag("ui5-icon", tags, suffix)} tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></${scopeTag("ui5-icon", tags, suffix)}></div>` : html `<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></ui5-icon></div>`; }
function block2(context, tags, suffix) { return html `<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`; }
function block3(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-suggestionsText" class="ui5-hidden-text">${ifDefined(this.suggestionsText)}</span><span id="${ifDefined(this._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${ifDefined(this._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${ifDefined(this.availableSuggestionsCount)}</span>`; }
function block4(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-descr" class="ui5-hidden-text">${ifDefined(this.accInfo.input.ariaDescription)}</span>`; }
function block5(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(this.ariaValueStateHiddenText)}</span>`; }
export default block0;
//# sourceMappingURL=InputTemplate.lit.js.map