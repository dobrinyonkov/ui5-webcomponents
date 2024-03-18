import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/DayPicker.css.ts", content: `:host(:not([hidden])){display:block}:host{height:100%;width:100%}:host([hide-week-numbers]) .ui5-dp-content{flex-basis:100%}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item{flex-direction:column;justify-content:var(--_ui5-v1-24-0-rc-1_day_picker_item_justify_content)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-daytext{height:1.5625rem;padding-inline-end:var(--_ui5-v1-24-0-rc-1_dp_two_calendar_item_text_padding_top)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-daysectext{font-size:.75rem;height:var(--_ui5-v1-24-0-rc-1_dp_two_calendar_item_secondary_text_height);padding-block:var(--_ui5-v1-24-0-rc-1_dp_two_calendar_item_secondary_text_padding_block);padding-inline:50% .4375rem}.ui5-dp-weekname,.ui5-dp-dayname,.ui5-dp-item{width:var(--_ui5-v1-24-0-rc-1_day_picker_item_width);height:var(--_ui5-v1-24-0-rc-1_day_picker_item_height);margin-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_item_margin);margin-inline-end:var(--_ui5-v1-24-0-rc-1_daypicker_item_margin);font-family:"72override",var(--sapFontFamily);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius)}.ui5-dp-weekname{color:var(--_ui5-v1-24-0-rc-1_daypicker_weekname_color)}.ui5-dp-weeks-row{display:flex}.ui5-dp-content{display:flex;flex-basis:87.5%;flex-direction:column;font-family:"72override",var(--sapFontFamily)}.ui5-dp-days-names-container{display:flex;height:var(--_ui5-v1-24-0-rc-1_daypicker_daynames_container_height)}.ui5-dp-weeknumber-container{padding-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_weeknumbers_container_padding_top);flex-basis:12.5%}.ui5-dp-weekname,.ui5-dp-dayname,.ui5-dp-weekname-container,.ui5-dp-item{display:flex;flex-grow:1;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);outline:none;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ui5-dp-item{position:relative;color:var(--sapTextColor);background:var(--sapLegend_WorkingBackground);font-size:var(--sapFontSize);border:var(--_ui5-v1-24-0-rc-1_daypicker_item_border);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius)}.ui5-dp-item:hover{background:var(--sapList_Hover_Background)}.ui5-dp-daytext{display:flex;width:100%;height:100%;justify-content:center;align-items:center;box-sizing:border-box}.ui5-dp-dayname{color:var(--_ui5-v1-24-0-rc-1_daypicker_dayname_color);height:100%}.ui5-dp-item.ui5-dp-item--weeekend{background:var(--sapLegend_NonWorkingBackground)}.ui5-dp-item.ui5-dp-item--disabled{pointer-events:none;opacity:.5}.ui5-dp-item.ui5-dp-item--weeekend:hover{background:var(--sapList_Hover_Background);filter:var(--_ui5-v1-24-0-rc-1_daypicker_item_weeekend_filter)}.ui5-dp-item.ui5-dp-item--othermonth{color:var(--_ui5-v1-24-0-rc-1_daypicker_item_othermonth_color);background:var(--_ui5-v1-24-0-rc-1_daypicker_item_othermonth_background_color);border-color:transparent}.ui5-dp-item.ui5-dp-item--othermonth:hover,.ui5-dp-item.ui5-dp-item--weeekend.ui5-dp-item--othermonth:hover{color:var(--_ui5-v1-24-0-rc-1_daypicker_item_othermonth_hover_color);background:var(--sapList_Hover_Background)}.ui5-dp-item:focus:after{content:"";border:var(--_ui5-v1-24-0-rc-1_daypicker_item_not_selected_focus_border);position:absolute;inset:var(--_ui5-v1-24-0-rc-1_daypicker_item_no_selected_inset);outline:none;border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius_focus_after)}.ui5-dp-item.ui5-dp-item--now:before{position:absolute;inset:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_not_selected_inset);border:.125rem solid var(--_ui5-v1-24-0-rc-1_daypicker_item_now_border_color);content:"";border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius);z-index:1}.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected{box-shadow:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_box_shadow)}.ui5-dp-item.ui5-dp-item--selected{background:var(--sapContent_Selected_Background)}.ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext:after{position:absolute;inset:0;border:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_border);content:"";border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius_item);z-index:1}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext{border:var(--_ui5-v1-24-0-rc-1_day_picker_item_selected_now_border);outline:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_text_outline);outline-offset:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_selected_outline_offset);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius_item);font-family:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_text_font)}.ui5-dp-item.ui5-dp-item--selected .ui5-dp-daytext{background:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_background);color:var(--sapContent_Selected_TextColor);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius);border:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_text_border);font-family:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_text_font)}.ui5-dp-item.ui5-dp-item--selected .ui5-dp-daytext{background:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_daytext_hover_background);color:var(--sapContent_Selected_TextColor)}.ui5-dp-item.ui5-dp-item--now:focus:after{inset:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_inset);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_border_radius_focus_after);border:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_border_focus_after);position:absolute;content:"";width:auto;height:auto}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now:focus:after{inset:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_inset);border-radius:var(--_ui5-v1-24-0-rc-1_day_picker_item_selected_now_border_radius_focus);border:var(--_ui5-v1-24-0-rc-1_day_picker_item_selected_now_border_focus);position:absolute;content:"";width:auto;height:auto}.ui5-dp-item.ui5-dp-item--selected:hover{background:var( --_ui5-v1-24-0-rc-1_daypicker_item_selected_hover);color:var(--sapContent_ContrastTextColor)}.ui5-dp-item.ui5-dp-item--selected:focus:after{border-color:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_focus_color);border-width:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_focus_width)}.ui5-dp-items-container{outline:none}.ui5-dp-item.ui5-dp-item--selected-between .ui5-dp-daytext,.ui5-dp-item[hovered] .ui5-dp-daytext{border:var(--_ui5-v1-24-0-rc-1_daypicker_item_select_between_border);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_border_radius);background-color:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_between_text_background);color:var(--sapTextColor);font-weight:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_between_text_font)}.ui5-dp-item.ui5-dp-item--selected-between.ui5-dp-item--now:not(.ui5-dp-item--selected) .ui5-dp-daytext:after{content:"";position:absolute;inset:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_selected_between_inset);border:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_selected_between_border);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_selected_between_border_radius)}.ui5-dp-item.ui5-dp-item--selected-between,.ui5-dp-item[hovered]{border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_between_border);background:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_between_background)}.ui5-dp-item.ui5-dp-item--selected-between:hover{background:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_between_hover_background)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--selected-between:focus:after{border-color:var(--sapContent_FocusColor)}.ui5-dp-items-container>:first-child{justify-content:flex-end}.ui5-dp-emptyweek{height:var(--_ui5-v1-24-0-rc-1_day_picker_empty_height)}.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype:focus:after{outline-offset:-.1875rem;border-radius:var(--_ui5-v1-24-0-rc-1-dp-item_withsecondtype_border)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype .ui5-dp-daysectext,.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext{border:none;outline:none}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext:after{border-width:.0625rem}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--now .ui5-dp-daysectext{height:var(--_ui5-v1-24-0-rc-1_dp_two_calendar_item_secondary_text_height);padding-block-start:0;border-radius:var(--_ui5-v1-24-0-rc-1_dp_two_calendar_item_secondary_text_border_radios)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext{border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_border_radius);margin-block-end:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_margin_bottom)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item:focus:after{inset:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_no_selected_inset);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_border_focus_border_radius)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--now:after{inset:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_no_selected_focus_inset);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_no_select_focus_border_radius)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected:focus:after{border-width:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_now_selected_border_width);inset:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_now_selected_border_inset);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_border_focus_border_radius)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now:after{inset:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_now_inset);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_selected_now_border_radius_focus)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext:not(.ui5-dp-daysectext):before{content:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_now_day_text_content);position:absolute;inset:.25rem;border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_selected_now_border_radius_focus);outline:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected__secondary_type_text_outline);z-index:1}.ui5-dp-specialday{width:100%;height:.375rem;position:absolute;box-sizing:border-box;inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_special_day_top);border-end-end-radius:var(--_ui5-v1-24-0-rc-1_daypicker_special_day_border_bottom_radius);border-end-start-radius:var(--_ui5-v1-24-0-rc-1_daypicker_special_day_border_bottom_radius);border-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_special_day_border_top)}.ui5-dp-item--selected .ui5-dp-specialday{width:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_special_day_width)}.ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_top);width:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_width);border-end-end-radius:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_border_bottom_radius);border-end-start-radius:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_border_bottom_radius)}.ui5-dp-item--now .ui5-dp-specialday,.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{height:.3125rem;border-end-end-radius:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_border_bottom_radius_alternate);border-end-start-radius:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_border_bottom_radius_alternate);inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_specialday_top);width:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_specialday_width)}.ui5-dp-item:not(:focus).ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{border-end-end-radius:var(--_ui5-v1-24-0-rc-1_daypicker_special_day_selected_border_radius_bottom);border-end-start-radius:var(--_ui5-v1-24-0-rc-1_daypicker_special_day_selected_border_radius_bottom)}.ui5-dp-item--now .ui5-dp-specialday{width:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_width);inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_selected_item_now_special_day_top)}.ui5-dp-item[special-day].ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-daytext{border-radius:var(--_ui5-v1-24-0-rc-1-daypicker_item_selected_now_border_radius)}.ui5-dp-item[special-day].ui5-dp-item--selected.ui5-dp-item--now:focus:after,.ui5-dp-item[special-day].ui5-dp-item--now:focus:after{margin:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_focus_margin)}.ui5-dp-item.ui5-dp-item--now:focus .ui5-dp-specialday{inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_specialday_focused_top);width:var(--_ui5-v1-24-0-rc-1_daypicker_specialday_focused_width);border-end-end-radius:var(--_ui5-v1-24-0-rc-1_daypicker_specialday_focused_border_bottom);border-end-start-radius:var(--_ui5-v1-24-0-rc-1_daypicker_specialday_focused_border_bottom);height:.3125rem}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item[special-day].ui5-dp-item--selected.ui5-dp-item--now:after,.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item[special-day].ui5-dp-item--now:after{inset:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_now_inset);border-radius:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_now_border_radius);border-width:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_after_border_width);border-color:var(--_ui5-v1-24-0-rc-1_daypicker_item_selected_focus_color)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item[special-day].ui5-dp-item--now:not(.ui5-dp-item--selected):after{inset:.1875rem}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item .ui5-dp-specialday{inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_top);inset-inline-end:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_right)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item:not(.ui5-dp-item--now) .ui5-dp-daysectext{padding-block:var(--_ui5-v1-24-0-rc-1_dp_two_calendar_item_secondary_text_padding)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype:focus .ui5-dp-specialday{inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_selected_two_calendar_focus_special_day_top);inset-inline-end:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_selected_two_calendar_focus_special_day_right)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype:focus .ui5-dp-daysectext{padding-block:var(--_ui5-v1-24-0-rc-1_daypicker_item_now_selected_two_calendar_focus_secondary_text_padding_block)}.ui5-dp-item--withsecondtype .ui5-dp-daytext{font-size:.75rem}.ui5-dp-item.ui5-dp-item--withsecondtype .ui5-dp-specialday,.ui5-dp-item.ui5-dp-item--withsecondtype.ui5-dp-item--now:focus .ui5-dp-specialday,.ui5-dp-item.ui5-dp-item--withsecondtype:not(:focus).ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{border-radius:100%;width:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_dot);inset-block-start:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_top);inset-inline-end:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_right);height:var(--_ui5-v1-24-0-rc-1_daypicker_twocalendar_item_special_day_dot);border-block-start:none}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now:focus .ui5-dp-daytext{margin-block-end:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_selected_focus_margin_bottom);padding-inline-end:var(--_ui5-v1-24-0-rc-1_daypicker_two_calendar_item_selected_focus_padding_right)}.Type01{background:var(--sapLegendColor1)}.Type02{background:var(--sapLegendColor2)}.Type03{background:var(--sapLegendColor3)}.Type04{background:var(--sapLegendColor4)}.Type05{background:var(--sapLegendColor5)}.Type06{background:var(--sapLegendColor6)}.Type07{background:var(--sapLegendColor7)}.Type08{background:var(--sapLegendColor8)}.Type09{background:var(--sapLegendColor9)}.Type10{background:var(--sapLegendColor10)}.Type11{background:var(--sapLegendColor11)}.Type12{background:var(--sapLegendColor12)}.Type13{background:var(--sapLegendColor13)}.Type14{background:var(--sapLegendColor14)}.Type15{background:var(--sapLegendColor15)}.Type16{background:var(--sapLegendColor16)}.Type17{background:var(--sapLegendColor17)}.Type18{background:var(--sapLegendColor18)}.Type19{background:var(--sapLegendColor19)}.Type20{background:var(--sapLegendColor20)}
` };
export default styleData;
//# sourceMappingURL=DayPicker.css.js.map