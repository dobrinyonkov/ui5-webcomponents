import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/DatePicker.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5-v1-24-0-rc-1_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v1-24-0-rc-1_input_icon_padding);border-inline-start:var(--_ui5-v1-24-0-rc-1_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v1-24-0-rc-1_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5-v1-24-0-rc-1_input_icon_pressed_bg);box-shadow:var(--_ui5-v1-24-0-rc-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-0-rc-1_select_hover_icon_left_border);color:var(--_ui5-v1-24-0-rc-1_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v1-24-0-rc-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-24-0-rc-1_select_hover_icon_left_border);color:var(--_ui5-v1-24-0-rc-1_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-24-0-rc-1_input_icon_hover_bg);box-shadow:var(--_ui5-v1-24-0-rc-1_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-24-0-rc-1_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-24-0-rc-1_input_icon_box_shadow)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v1-24-0-rc-1_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v1-24-0-rc-1_input_readonly_background)}:host([disabled]){opacity:var(--_ui5-v1-24-0-rc-1_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v1-24-0-rc-1-input_disabled_background);border-color:var(--_ui5-v1-24-0-rc-1_input_disabled_border_color)}:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-0-rc-1_input_error_icon_box_shadow)}:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-0-rc-1_input_warning_icon_box_shadow)}:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-0-rc-1_input_information_icon_box_shadow)}:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v1-24-0-rc-1_input_success_icon_box_shadow)}:host([value-state="Error"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v1-24-0-rc-1_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Warning"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v1-24-0-rc-1_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Success"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v1-24-0-rc-1_input_value_state_success_border_color);border-width:var(--_ui5-v1-24-0-rc-1_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v1-24-0-rc-1_input_value_state_information_border_color);border-width:var(--_ui5-v1-24-0-rc-1_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Error"]) [input-icon]:active,:host([value-state="Error"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-0-rc-1_input_error_icon_box_shadow);color:var(--_ui5-v1-24-0-rc-1_input_icon_error_pressed_color)}:host([value-state="Warning"]) [input-icon]:active,:host([value-state="Warning"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-0-rc-1_input_warning_icon_box_shadow);color:var(--_ui5-v1-24-0-rc-1_input_icon_warning_pressed_color)}:host([value-state="Information"]) [input-icon]:active,:host([value-state="Information"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-0-rc-1_input_information_icon_box_shadow);color:var(--_ui5-v1-24-0-rc-1_input_icon_information_pressed_color)}:host([value-state="Success"]) [input-icon]:active,:host([value-state="Success"]) [input-icon][pressed]{box-shadow:var(--_ui5-v1-24-0-rc-1_input_success_icon_box_shadow);color:var(--_ui5-v1-24-0-rc-1_input_icon_success_pressed_color)}:host([value-state="Error"]) [input-icon],:host([value-state="Warning"]) [input-icon]{padding:var(--_ui5-v1-24-0-rc-1_input_error_warning_icon_padding)}:host([value-state="Information"]) [input-icon]{padding:var(--_ui5-v1-24-0-rc-1_input_information_icon_padding)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal;height:var(--_ui5-v1-24-0-rc-1_input_height);border-radius:var(--_ui5-v1-24-0-rc-1_input_border_radius)}:host{min-width:calc(var(--_ui5-v1-24-0-rc-1_input_min_width) + var(--_ui5-v1-24-0-rc-1_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-v1-24-0-rc-1-datepicker_border_radius);margin:var(--_ui5-v1-24-0-rc-1_input_margin_top_bottom) 0;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host(:not([disabled]):not([readonly]):active){background:var(--_ui5-v1-24-0-rc-1-datepicker-hover-background)}:host(:not([disabled]):not([readonly]):hover){background:var(--_ui5-v1-24-0-rc-1-datepicker-hover-background)}.ui5-date-picker-root{border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-date-picker-input{width:100%;min-width:12.5625rem;color:inherit;background-color:inherit;border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;margin:inherit}:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused]{background-color:var(--_ui5-v1-24-0-rc-1-datepicker-hover-background)}
` };
export default styleData;
//# sourceMappingURL=DatePicker.css.js.map