/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-select-root ui5-input-focusable-element" id="${ifDefined(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon ? block1.call(this, context, tags, suffix) : undefined}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${ifDefined(this.ariaLabelText)}" aria-describedby="${ifDefined(this.valueStateTextId)}" aria-disabled="${ifDefined(this.isDisabled)}" aria-required="${ifDefined(this.required)}" aria-readonly="${ifDefined(this.readonly)}" aria-expanded="${ifDefined(this._isPickerOpen)}" aria-roledescription="${ifDefined(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this.hasCustomLabel ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div>${!this.readonly ? block4.call(this, context, tags, suffix) : undefined}${this.hasValueState ? block5.call(this, context, tags, suffix) : undefined}</div>${this.options ? block6.call(this, context, tags, suffix) : undefined}${this.shouldOpenValueStateMessagePopover ? block17.call(this, context, tags, suffix) : undefined} `; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} mode="Decorative" class="ui5-select-option-icon" name="${ifDefined(this.selectedOptionIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon mode="Decorative" class="ui5-select-option-icon" name="${ifDefined(this.selectedOptionIcon)}"></ui5-icon>`; }
function block2(context, tags, suffix) { return html `<slot name="label"></slot>`; }
function block3(context, tags, suffix) { return html `${ifDefined(this.text)}`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" class="inputIcon" ?pressed="${this._iconPressed}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon name="slim-arrow-down" class="inputIcon" ?pressed="${this._iconPressed}"></ui5-icon>`; }
function block5(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(this.valueStateText)}</span>`; }
function block6(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} hide-arrow prevent-initial-focus part="popover" placement="Bottom" class="ui5-select-popover ${classMap(this.classes.popover)}" horizontal-align="Start" @ui5-open="${ifDefined(this._afterOpen)}" @ui5-before-open="${ifDefined(this._beforeOpen)}" @ui5-close="${ifDefined(this._afterClose)}" @keydown="${this._onkeydown}" style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block7.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block12.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-list", tags, suffix)} mode="SingleAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${ifDefined(this._handleItemPress)}"><slot></slot></${scopeTag("ui5-list", tags, suffix)}></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover hide-arrow prevent-initial-focus part="popover" placement="Bottom" class="ui5-select-popover ${classMap(this.classes.popover)}" horizontal-align="Start" @ui5-open="${ifDefined(this._afterOpen)}" @ui5-before-open="${ifDefined(this._beforeOpen)}" @ui5-close="${ifDefined(this._afterClose)}" @keydown="${this._onkeydown}" style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block7.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block12.call(this, context, tags, suffix) : undefined}<ui5-list mode="SingleAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${ifDefined(this._handleItemPress)}"><slot></slot></ui5-list></ui5-responsive-popover>`; }
function block7(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></${scopeTag("ui5-button", tags, suffix)}></div>${this.hasValueStateText ? block8.call(this, context, tags, suffix) : undefined}</div>` : html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></ui5-button></div>${this.hasValueStateText ? block8.call(this, context, tags, suffix) : undefined}</div>`; }
function block8(context, tags, suffix) { return html `<div class="${classMap(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.shouldDisplayDefaultValueStateMessage ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</div>`; }
function block9(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block10(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}`; }
function block11(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block12(context, tags, suffix) { return html `${this.hasValueStateText ? block13.call(this, context, tags, suffix) : undefined}`; }
function block13(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.responsivePopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}</div>`; }
function block14(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block15(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block16.call(this, context, tags, suffix, item, index))}`; }
function block16(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block17(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-popover", tags, suffix)} part="popover" skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.shouldDisplayDefaultValueStateMessage ? block18.call(this, context, tags, suffix) : block19.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}>` : html `<ui5-popover part="popover" skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage ? block18.call(this, context, tags, suffix) : block19.call(this, context, tags, suffix)}</div></ui5-popover>`; }
function block18(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block19(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block20.call(this, context, tags, suffix, item, index))}`; }
function block20(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
export default block0;
//# sourceMappingURL=SelectTemplate.lit.js.map