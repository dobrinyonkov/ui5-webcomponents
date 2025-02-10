import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@ui5/webcomponents-base/jsx-runtime";
import Popover from "@ui5/webcomponents/dist/Popover.js";
import List from "@ui5/webcomponents/dist/List.js";
import ListItemStandard from "@ui5/webcomponents/dist/ListItemStandard.js";
export default function PopoversTemplate() {
    return (_jsxs(_Fragment, { children: [_jsx(Popover, { class: "ui5-shellbar-menu-popover", hideArrow: true, placement: "Bottom", preventInitialFocus: true, onBeforeOpen: this._menuPopoverBeforeOpen, onClose: this._menuPopoverAfterClose, children: _jsx(List, { separators: "None", selectionMode: "Single", onSelectionChange: this._menuItemPress, children: _jsx("slot", { name: "menuItems" }) }) }), _jsx(Popover, { class: "ui5-shellbar-overflow-popover", placement: "Bottom", preventInitialFocus: true, horizontalAlign: this.popoverHorizontalAlign, hideArrow: true, onBeforeOpen: this._overflowPopoverBeforeOpen, onClose: this._overflowPopoverAfterClose, children: _jsx(List, { separators: "None", onItemClick: this._handleActionListClick, children: this._hiddenIcons.map((icon, index) => (_jsx(ListItemStandard, { "data-count": icon.count, "data-ui5-external-action-item-id": icon.refItemid, icon: icon.icon ? icon.icon : "", type: "Active", "onui5-_press": icon.press, tooltip: icon.tooltip, children: icon.text }, index))) }) })] }));
}
//# sourceMappingURL=ShellBarPopoverTemplate.js.map