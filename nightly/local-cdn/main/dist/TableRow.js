var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { isEnter } from "@ui5/webcomponents-base/dist/Keys.js";
import getActiveElement from "@ui5/webcomponents-base/dist/util/getActiveElement.js";
import Button from "./Button.js";
import RadioButton from "./RadioButton.js";
import TableRowTemplate from "./generated/templates/TableRowTemplate.lit.js";
import TableRowBase from "./TableRowBase.js";
import TableRowCss from "./generated/themes/TableRow.css.js";
import TableCell from "./TableCell.js";
import "@ui5/webcomponents-icons/dist/overflow.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-table-row` component represents a row in the `ui5-table`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TableRow.js";`
 *
 * @constructor
 * @extends TableRowBase
 * @since 2.0.0
 * @public
 * @experimental This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.
 */
let TableRow = class TableRow extends TableRowBase {
    constructor() {
        super(...arguments);
        /**
         * Unique identifier of the row.
         *
         * @default ""
         * @public
         */
        this.rowKey = "";
        /**
         * Defines the position of the row respect to the total number of rows within the table when the `ui5-table-virtualizer` feature is used.
         *
         * @default -1
         * @since 2.5.0
         * @public
         */
        this.position = -1;
        /**
         * Defines the interactive state of the row.
         *
         * @default false
         * @public
         */
        this.interactive = false;
        /**
         * Defines the navigated state of the row.
         *
         * @default false
         * @public
         */
        this.navigated = false;
        /**
         * Defines whether the row is movable.
         *
         * @default false
         * @since 2.6.0
         * @public
         */
        this.movable = false;
        this._renderNavigated = false;
    }
    onBeforeRendering() {
        super.onBeforeRendering();
        this.toggleAttribute("_interactive", this._isInteractive);
        if (this.position !== -1) {
            this.setAttribute("aria-rowindex", `${this.position + 1}`);
        }
        if (this._renderNavigated && this.navigated) {
            this.setAttribute("aria-current", "true");
        }
        else {
            this.removeAttribute("aria-current");
        }
        if (this.movable) {
            this.setAttribute("draggable", "true");
        }
        else {
            this.removeAttribute("draggable");
        }
    }
    async focus(focusOptions) {
        this.setAttribute("tabindex", "-1");
        HTMLElement.prototype.focus.call(this, focusOptions);
        return Promise.resolve();
    }
    _onkeydown(e, eventOrigin) {
        super._onkeydown(e, eventOrigin);
        if (e.defaultPrevented) {
            return;
        }
        if (eventOrigin === this && this._isInteractive && isEnter(e)) {
            this.toggleAttribute("_active", true);
            this._table?._onRowClick(this);
        }
    }
    _onclick() {
        if (this._isInteractive && this === getActiveElement()) {
            this._table?._onRowClick(this);
        }
    }
    _onkeyup() {
        this.removeAttribute("_active");
    }
    _onfocusout() {
        this.removeAttribute("_active");
    }
    _onOverflowButtonClick(e) {
        const ctor = this.actions[0].constructor;
        ctor.showMenu(this._overflowActions, e.target);
    }
    get _isInteractive() {
        return this.interactive;
    }
    get _hasRowActions() {
        return this._rowActionCount > 0 && this.actions.some(action => action.isFixedAction() || !action.invisible);
    }
    get _hasOverflowActions() {
        let renderedActionsCount = 0;
        return this.actions.some(action => {
            if (action.isFixedAction() || !action.invisible) {
                renderedActionsCount++;
            }
            return renderedActionsCount > this._rowActionCount;
        });
    }
    get _flexibleActions() {
        const flexibleActions = this.actions.filter(action => !action.isFixedAction());
        const fixedActionsCount = this.actions.length - flexibleActions.length;
        let maxFlexibleActionsCount = this._rowActionCount - fixedActionsCount;
        if (maxFlexibleActionsCount < 1) {
            return []; // fixed actions occupy all the available space
        }
        if (flexibleActions.length <= maxFlexibleActionsCount) {
            return flexibleActions; // all actions fit the available space
        }
        const visibleFlexibleActions = flexibleActions.filter(action => !action.invisible);
        if (visibleFlexibleActions.length > maxFlexibleActionsCount) {
            maxFlexibleActionsCount--; // preserve space for the overflow button
        }
        return visibleFlexibleActions.slice(0, maxFlexibleActionsCount);
    }
    get _fixedActions() {
        let maxFixedActionsCount = this._rowActionCount;
        if (this._hasOverflowActions) {
            maxFixedActionsCount--;
        }
        const fixedActions = this.actions.filter(action => action.isFixedAction());
        return fixedActions.slice(0, maxFixedActionsCount);
    }
    get _overflowActions() {
        const fixedActions = this._fixedActions;
        const flexibleActions = this._flexibleActions;
        const overflowActions = [];
        this.actions.forEach(action => {
            if (!action.invisible && !fixedActions.includes(action) && !flexibleActions.includes(action)) {
                overflowActions.push(action);
            }
        });
        return overflowActions;
    }
};
__decorate([
    slot({
        type: HTMLElement,
        "default": true,
        individualSlots: true,
        invalidateOnChildChange: {
            properties: ["_popin"],
            slots: false,
        },
    })
], TableRow.prototype, "cells", void 0);
__decorate([
    slot({
        type: HTMLElement,
        individualSlots: true,
    })
], TableRow.prototype, "actions", void 0);
__decorate([
    property()
], TableRow.prototype, "rowKey", void 0);
__decorate([
    property({ type: Number })
], TableRow.prototype, "position", void 0);
__decorate([
    property({ type: Boolean })
], TableRow.prototype, "interactive", void 0);
__decorate([
    property({ type: Boolean })
], TableRow.prototype, "navigated", void 0);
__decorate([
    property({ type: Boolean })
], TableRow.prototype, "movable", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], TableRow.prototype, "_renderNavigated", void 0);
TableRow = __decorate([
    customElement({
        tag: "ui5-table-row",
        styles: [TableRowBase.styles, TableRowCss],
        template: TableRowTemplate,
        dependencies: [...TableRowBase.dependencies, RadioButton, TableCell, Button],
    })
], TableRow);
TableRow.define();
export default TableRow;
//# sourceMappingURL=TableRow.js.map