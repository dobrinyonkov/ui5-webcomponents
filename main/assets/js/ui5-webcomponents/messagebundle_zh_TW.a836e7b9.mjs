const E = "\u5361\u7247\u5167\u5BB9", _ = "\u5361\u7247", T = "\u5361\u7247\u8868\u982D", A = "\u4E92\u52D5\u5F0F\u5361\u7247\u8868\u982D", I = "\u865B\u64EC\u500B\u4EBA\u982D\u50CF", R = "\u5DF2\u986F\u793A {0}\u3001\u5DF2\u96B1\u85CF {1}\u3002", O = "\u91DD\u5C0D\u5B8C\u6574\u6E05\u55AE\u800C\u555F\u7528\u3002", L = "\u500B\u5225\u865B\u64EC\u500B\u4EBA\u982D\u50CF\u3002", N = "\u7D50\u5408\u865B\u64EC\u500B\u4EBA\u982D\u50CF\u3002", S = "\u6309\u7BAD\u982D\u9375\u4EE5\u79FB\u52D5\u3002", C = "\u5FBD\u7AE0", P = "{0}/{1}", D = "\u8DEF\u5F91\u6307\u5F15\u8FFD\u8E64", B = "\u66F4\u591A", U = "\u53D6\u6D88", t = "\u8ACB\u7A0D\u5019", s = "\u6B63\u5411\u4F5C\u696D", n = "\u8CA0\u5411\u4F5C\u696D", o = "\u5F37\u8ABF", c = "/", M = "\u5DF2\u986F\u793A\u9805\u76EE {0}/{1}", G = "\u4E0A\u4E00\u9801", K = "\u4E0B\u4E00\u9801", V = "\u8ABF\u8272\u76E4 - \u9810\u5148\u5B9A\u7FA9\u7684\u8272\u5F69", H = "\u8ABF\u8272\u76E4", X = "\u8272\u5F69", Y = "\u53D6\u6D88", W = "\u78BA\u5B9A", F = "\u66F4\u6539\u8272\u5F69", Z = "\u66F4\u591A\u8272\u5F69...", e = "Alpha \u63A7\u5236", a = "\u8272\u8ABF\u63A7\u5236", l = "\u5341\u516D\u9032\u4F4D", p = "\u7D05\u8272", h = "\u7DA0\u8272", d = "\u85CD\u8272", m = "Alpha", r = "\u958B\u555F\u9078\u64C7\u5668", u = "\u65E5\u671F\u8F38\u5165", J = "\u65E5\u671F\u6642\u9593\u8F38\u5165", b = "\u65E5\u671F\u7BC4\u570D\u8F38\u5165", f = "\u522A\u9664", g = "\u700F\u89BD...", x = "\u4E0A\u50B3\u6A94\u6848", y = "\u7FA4\u7D44\u8868\u982D", z = "\u6E05\u55AE\u65B9\u584A", i = "\u9078\u64C7\u9078\u9805", j = "\u53EF\u7528\u5EFA\u8B70", k = "\u9078\u64C7", q = "1 \u500B\u53EF\u7528\u7684\u7D50\u679C", v = "{0} \u500B\u53EF\u7528\u7684\u7D50\u679C", w = "\u6C92\u6709\u7D50\u679C", Q = "\u8F15\u5FAE", $ = "\u5F37\u8ABF", EE = "\u6E05\u55AE\u9805\u76EE {0} / {1}", _E = "\u5DF2\u52FE\u9078", TE = "\u672A\u9078\u64C7", AE = "\u7FA4\u7D44\u8868\u982D", IE = "\u591A\u91CD\u9078\u64C7\u6A21\u5F0F", RE = "\u9805\u76EE\u9078\u64C7\u3002", OE = "\u5305\u542B\u53EF\u9078\u64C7\u7684\u9805\u76EE", LE = "\u5305\u542B\u53EF\u591A\u91CD\u9078\u64C7\u7684\u9805\u76EE", NE = "\u5305\u542B\u53EF\u522A\u9664\u7684\u9805\u76EE", SE = "\u8A0A\u606F\u5217\u95DC\u9589", CE = "\u53EF\u95DC\u9589", PE = "\u932F\u8AA4\u8CC7\u8A0A\u5217", DE = "\u8B66\u544A\u8CC7\u8A0A\u5217", BE = "\u6210\u529F\u8CC7\u8A0A\u5217", UE = "\u8CC7\u8A0A\u5217", tE = "\u78BA\u5B9A", sE = "\u5DF2\u9078\u64C7\u6B64\u503C\u3002", nE = "\u591A\u91CD\u503C\u8F38\u5165", oE = "\u8D85\u904E {0} \u500B", cE = "\u5C55\u958B/\u6536\u7E2E", ME = "\u7BC4\u570D", GE = "\u5DE6\u5074\u63A7\u9EDE", KE = "\u53F3\u5074\u63A7\u9EDE", VE = "\u5206\u7D1A", HE = "\u5206\u7D1A\u6307\u793A\u78BC", XE = "\u62D2\u7D55", YE = "\u5340\u6BB5\u6309\u9215\u7FA4\u7D44", WE = "\u6309\u4E0B SPACE \u6216 ENTER \u4EE5\u9078\u64C7\u9805\u76EE", FE = "\u5340\u6BB5\u6309\u9215", ZE = "\u6ED1\u687F\u63A7\u9EDE", eE = "\u8F03\u591A", aE = "\u8868\u982D\u5217 1/{0}", lE = "{0}/{1}", pE = "\u7FA4\u7D44\u8868\u982D\u5217", hE = "\u9805\u76EE\u9078\u64C7", dE = "\u9078\u64C7\u6240\u6709\u5217", mE = "Empty", rE = "\u6B63\u9762", uE = "\u8CA0\u9762", JE = "\u91CD\u8981", bE = "\u4E00\u822C", fE = "\u542B\u5B50\u9805\u76EE\u7684\u7D22\u5F15\u6A19\u7C64", gE = "\u4E0B\u4E00\u6B65", xE = "\u4E0A\u4E00\u6B65", yE = "\u6EA2\u4F4D\u529F\u80FD\u8868", zE = "\u66F4\u591A", iE = "\u53D6\u6D88", jE = "\u6309\u5411\u4E0B\u9375\u4EE5\u958B\u555F\u5B50\u9805\u76EE\u529F\u80FD\u8868", kE = "\u5269\u4E0B {0} \u500B\u5B57\u5143", qE = "\u8D85\u904E {0} \u500B\u5B57\u5143", vE = "\u5C0F\u6642", wE = "\u5206", QE = "\u79D2", $E = "\u6210\u529F", E_ = "\u53D6\u6D88", __ = "\u6642\u9593\u8F38\u5165", T_ = "\u65E5\u671F", A_ = "\u6642\u9593", I_ = "\u53EF\u522A\u9664", R_ = "\u7121\u8A18\u865F", O_ = "\u5305\u542B 1 \u500B\u8A18\u865F", L_ = "\u5305\u542B {0} \u500B\u8A18\u865F", N_ = "\u8868\u5FB5\u53C3\u6578\u91CF\u5316\u5668", S_ = "\u79FB\u9664", C_ = "\u6A39\u72C0\u7D50\u69CB\u9805\u76EE", P_ = "\u5C55\u958B\u7BC0\u9EDE", D_ = "\u6536\u7E2E\u7BC0\u9EDE", B_ = "\u503C\u72C0\u614B (\u932F\u8AA4)", U_ = "\u503C\u72C0\u614B (\u8B66\u544A)", t_ = "\u503C\u72C0\u614B (\u6210\u529F)", s_ = "\u503C\u72C0\u614B\u8CC7\u8A0A", n_ = "\u7121\u6548\u8F38\u5165\u9805", o_ = "\u5DF2\u767C\u51FA\u8B66\u544A", c_ = "\u8CC7\u8A0A\u8F38\u5165\u9805", M_ = "\u5DF2\u6210\u529F\u9A57\u8B49\u8F38\u5165\u9805", G_ = "\u4E0B\u4E00\u6B65", K_ = "\u4E0A\u4E00\u6B65", V_ = "\u9031\u6578", H_ = "\u975E\u5DE5\u4F5C\u65E5", X_ = "\u4ECA\u5929", Y_ = "\u6708\u4EFD\u9078\u64C7\u5668", W_ = "\u5E74\u4EFD\u9078\u64C7\u5668", F_ = "\u6E1B\u5C11", Z_ = "\u589E\u52A0", e_ = "\u5206\u5272\u6309\u9215", a_ = "\u6309\u4E0B\u7A7A\u683C\u9375\u6216 Enter \u4EE5\u9A45\u52D5\u9810\u8A2D\u52D5\u4F5C\uFF0C\u4EE5\u53CA Alt + \u5411\u4E0B\u7BAD\u982D\u6216 F4 \u4EE5\u9A45\u52D5\u7BAD\u982D\u52D5\u4F5C", l_ = "\u8FD4\u56DE", p_ = "\u62D2\u7D55", h_ = {
  ARIA_LABEL_CARD_CONTENT: E,
  ARIA_ROLEDESCRIPTION_CARD: _,
  ARIA_ROLEDESCRIPTION_CARD_HEADER: T,
  ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER: A,
  AVATAR_TOOLTIP: I,
  AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL: R,
  AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL: O,
  AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL: L,
  AVATAR_GROUP_ARIA_LABEL_GROUP: N,
  AVATAR_GROUP_MOVE: S,
  BADGE_DESCRIPTION: C,
  BREADCRUMB_ITEM_POS: P,
  BREADCRUMBS_ARIA_LABEL: D,
  BREADCRUMBS_OVERFLOW_ARIA_LABEL: B,
  BREADCRUMBS_CANCEL_BUTTON: U,
  BUSY_INDICATOR_TITLE: t,
  BUTTON_ARIA_TYPE_ACCEPT: s,
  BUTTON_ARIA_TYPE_REJECT: n,
  BUTTON_ARIA_TYPE_EMPHASIZED: o,
  CAROUSEL_OF_TEXT: c,
  CAROUSEL_DOT_TEXT: M,
  CAROUSEL_PREVIOUS_ARROW_TEXT: G,
  CAROUSEL_NEXT_ARROW_TEXT: K,
  COLORPALETTE_CONTAINER_LABEL: V,
  COLORPALETTE_POPOVER_TITLE: H,
  COLORPALETTE_COLOR_LABEL: X,
  COLOR_PALETTE_DIALOG_CANCEL_BUTTON: Y,
  COLOR_PALETTE_DIALOG_OK_BUTTON: W,
  COLOR_PALETTE_DIALOG_TITLE: F,
  COLOR_PALETTE_MORE_COLORS_TEXT: Z,
  COLORPICKER_ALPHA_SLIDER: e,
  COLORPICKER_HUE_SLIDER: a,
  COLORPICKER_HEX: l,
  COLORPICKER_RED: p,
  COLORPICKER_GREEN: h,
  COLORPICKER_BLUE: d,
  COLORPICKER_ALPHA: m,
  DATEPICKER_OPEN_ICON_TITLE: r,
  DATEPICKER_DATE_DESCRIPTION: u,
  DATETIME_DESCRIPTION: J,
  DATERANGE_DESCRIPTION: b,
  DELETE: f,
  FILEUPLOAD_BROWSE: g,
  FILEUPLOADER_TITLE: x,
  GROUP_HEADER_TEXT: y,
  SELECT_ROLE_DESCRIPTION: z,
  SELECT_OPTIONS: i,
  INPUT_SUGGESTIONS: j,
  INPUT_SUGGESTIONS_TITLE: k,
  INPUT_SUGGESTIONS_ONE_HIT: q,
  INPUT_SUGGESTIONS_MORE_HITS: v,
  INPUT_SUGGESTIONS_NO_HIT: w,
  LINK_SUBTLE: Q,
  LINK_EMPHASIZED: $,
  LIST_ITEM_POSITION: EE,
  LIST_ITEM_SELECTED: _E,
  LIST_ITEM_NOT_SELECTED: TE,
  LIST_ITEM_GROUP_HEADER: AE,
  ARIA_LABEL_LIST_ITEM_CHECKBOX: IE,
  ARIA_LABEL_LIST_ITEM_RADIO_BUTTON: RE,
  ARIA_LABEL_LIST_SELECTABLE: OE,
  ARIA_LABEL_LIST_MULTISELECTABLE: LE,
  ARIA_LABEL_LIST_DELETABLE: NE,
  MESSAGE_STRIP_CLOSE_BUTTON: SE,
  MESSAGE_STRIP_CLOSABLE: CE,
  MESSAGE_STRIP_ERROR: PE,
  MESSAGE_STRIP_WARNING: DE,
  MESSAGE_STRIP_SUCCESS: BE,
  MESSAGE_STRIP_INFORMATION: UE,
  MULTICOMBOBOX_DIALOG_OK_BUTTON: tE,
  VALUE_STATE_ERROR_ALREADY_SELECTED: sE,
  MULTIINPUT_ROLEDESCRIPTION_TEXT: nE,
  MULTIINPUT_SHOW_MORE_TOKENS: oE,
  PANEL_ICON: cE,
  RANGE_SLIDER_ARIA_DESCRIPTION: ME,
  RANGE_SLIDER_START_HANDLE_DESCRIPTION: GE,
  RANGE_SLIDER_END_HANDLE_DESCRIPTION: KE,
  RATING_INDICATOR_TOOLTIP_TEXT: VE,
  RATING_INDICATOR_TEXT: HE,
  RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON: XE,
  SEGMENTEDBUTTON_ARIA_DESCRIPTION: YE,
  SEGMENTEDBUTTON_ARIA_DESCRIBEDBY: WE,
  SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION: FE,
  SLIDER_ARIA_DESCRIPTION: ZE,
  LOAD_MORE_TEXT: eE,
  TABLE_HEADER_ROW_INFORMATION: aE,
  TABLE_ROW_POSITION: lE,
  TABLE_GROUP_ROW_ARIA_LABEL: pE,
  ARIA_LABEL_ROW_SELECTION: hE,
  ARIA_LABEL_SELECT_ALL_CHECKBOX: dE,
  ARIA_LABEL_EMPTY_CELL: mE,
  TAB_ARIA_DESIGN_POSITIVE: rE,
  TAB_ARIA_DESIGN_NEGATIVE: uE,
  TAB_ARIA_DESIGN_CRITICAL: JE,
  TAB_ARIA_DESIGN_NEUTRAL: bE,
  TAB_SPLIT_ROLE_DESCRIPTION: fE,
  TABCONTAINER_NEXT_ICON_ACC_NAME: gE,
  TABCONTAINER_PREVIOUS_ICON_ACC_NAME: xE,
  TABCONTAINER_OVERFLOW_MENU_TITLE: yE,
  TABCONTAINER_END_OVERFLOW: zE,
  TABCONTAINER_POPOVER_CANCEL_BUTTON: iE,
  TABCONTAINER_SUBTABS_DESCRIPTION: jE,
  TEXTAREA_CHARACTERS_LEFT: kE,
  TEXTAREA_CHARACTERS_EXCEEDED: qE,
  TIMEPICKER_HOURS_LABEL: vE,
  TIMEPICKER_MINUTES_LABEL: wE,
  TIMEPICKER_SECONDS_LABEL: QE,
  TIMEPICKER_SUBMIT_BUTTON: $E,
  TIMEPICKER_CANCEL_BUTTON: E_,
  TIMEPICKER_INPUT_DESCRIPTION: __,
  DATETIME_PICKER_DATE_BUTTON: T_,
  DATETIME_PICKER_TIME_BUTTON: A_,
  TOKEN_ARIA_DELETABLE: I_,
  TOKENIZER_ARIA_CONTAIN_TOKEN: R_,
  TOKENIZER_ARIA_CONTAIN_ONE_TOKEN: O_,
  TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS: L_,
  TOKENIZER_ARIA_LABEL: N_,
  TOKENIZER_POPOVER_REMOVE: S_,
  TREE_ITEM_ARIA_LABEL: C_,
  TREE_ITEM_EXPAND_NODE: P_,
  TREE_ITEM_COLLAPSE_NODE: D_,
  VALUE_STATE_TYPE_ERROR: B_,
  VALUE_STATE_TYPE_WARNING: U_,
  VALUE_STATE_TYPE_SUCCESS: t_,
  VALUE_STATE_TYPE_INFORMATION: s_,
  VALUE_STATE_ERROR: n_,
  VALUE_STATE_WARNING: o_,
  VALUE_STATE_INFORMATION: c_,
  VALUE_STATE_SUCCESS: M_,
  CALENDAR_HEADER_NEXT_BUTTON: G_,
  CALENDAR_HEADER_PREVIOUS_BUTTON: K_,
  DAY_PICKER_WEEK_NUMBER_TEXT: V_,
  DAY_PICKER_NON_WORKING_DAY: H_,
  DAY_PICKER_TODAY: X_,
  MONTH_PICKER_DESCRIPTION: Y_,
  YEAR_PICKER_DESCRIPTION: W_,
  STEPINPUT_DEC_ICON_TITLE: F_,
  STEPINPUT_INC_ICON_TITLE: Z_,
  SPLIT_BUTTON_DESCRIPTION: e_,
  SPLIT_BUTTON_KEYBOARD_HINT: a_,
  MENU_BACK_BUTTON_ARIA_LABEL: l_,
  MENU_CLOSE_BUTTON_ARIA_LABEL: p_
};
export {
  E as ARIA_LABEL_CARD_CONTENT,
  mE as ARIA_LABEL_EMPTY_CELL,
  NE as ARIA_LABEL_LIST_DELETABLE,
  IE as ARIA_LABEL_LIST_ITEM_CHECKBOX,
  RE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,
  LE as ARIA_LABEL_LIST_MULTISELECTABLE,
  OE as ARIA_LABEL_LIST_SELECTABLE,
  hE as ARIA_LABEL_ROW_SELECTION,
  dE as ARIA_LABEL_SELECT_ALL_CHECKBOX,
  _ as ARIA_ROLEDESCRIPTION_CARD,
  T as ARIA_ROLEDESCRIPTION_CARD_HEADER,
  A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,
  N as AVATAR_GROUP_ARIA_LABEL_GROUP,
  L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,
  R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,
  S as AVATAR_GROUP_MOVE,
  O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,
  I as AVATAR_TOOLTIP,
  C as BADGE_DESCRIPTION,
  D as BREADCRUMBS_ARIA_LABEL,
  U as BREADCRUMBS_CANCEL_BUTTON,
  B as BREADCRUMBS_OVERFLOW_ARIA_LABEL,
  P as BREADCRUMB_ITEM_POS,
  t as BUSY_INDICATOR_TITLE,
  s as BUTTON_ARIA_TYPE_ACCEPT,
  o as BUTTON_ARIA_TYPE_EMPHASIZED,
  n as BUTTON_ARIA_TYPE_REJECT,
  G_ as CALENDAR_HEADER_NEXT_BUTTON,
  K_ as CALENDAR_HEADER_PREVIOUS_BUTTON,
  M as CAROUSEL_DOT_TEXT,
  K as CAROUSEL_NEXT_ARROW_TEXT,
  c as CAROUSEL_OF_TEXT,
  G as CAROUSEL_PREVIOUS_ARROW_TEXT,
  X as COLORPALETTE_COLOR_LABEL,
  V as COLORPALETTE_CONTAINER_LABEL,
  H as COLORPALETTE_POPOVER_TITLE,
  m as COLORPICKER_ALPHA,
  e as COLORPICKER_ALPHA_SLIDER,
  d as COLORPICKER_BLUE,
  h as COLORPICKER_GREEN,
  l as COLORPICKER_HEX,
  a as COLORPICKER_HUE_SLIDER,
  p as COLORPICKER_RED,
  Y as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,
  W as COLOR_PALETTE_DIALOG_OK_BUTTON,
  F as COLOR_PALETTE_DIALOG_TITLE,
  Z as COLOR_PALETTE_MORE_COLORS_TEXT,
  u as DATEPICKER_DATE_DESCRIPTION,
  r as DATEPICKER_OPEN_ICON_TITLE,
  b as DATERANGE_DESCRIPTION,
  J as DATETIME_DESCRIPTION,
  T_ as DATETIME_PICKER_DATE_BUTTON,
  A_ as DATETIME_PICKER_TIME_BUTTON,
  H_ as DAY_PICKER_NON_WORKING_DAY,
  X_ as DAY_PICKER_TODAY,
  V_ as DAY_PICKER_WEEK_NUMBER_TEXT,
  f as DELETE,
  x as FILEUPLOADER_TITLE,
  g as FILEUPLOAD_BROWSE,
  y as GROUP_HEADER_TEXT,
  j as INPUT_SUGGESTIONS,
  v as INPUT_SUGGESTIONS_MORE_HITS,
  w as INPUT_SUGGESTIONS_NO_HIT,
  q as INPUT_SUGGESTIONS_ONE_HIT,
  k as INPUT_SUGGESTIONS_TITLE,
  $ as LINK_EMPHASIZED,
  Q as LINK_SUBTLE,
  AE as LIST_ITEM_GROUP_HEADER,
  TE as LIST_ITEM_NOT_SELECTED,
  EE as LIST_ITEM_POSITION,
  _E as LIST_ITEM_SELECTED,
  eE as LOAD_MORE_TEXT,
  l_ as MENU_BACK_BUTTON_ARIA_LABEL,
  p_ as MENU_CLOSE_BUTTON_ARIA_LABEL,
  CE as MESSAGE_STRIP_CLOSABLE,
  SE as MESSAGE_STRIP_CLOSE_BUTTON,
  PE as MESSAGE_STRIP_ERROR,
  UE as MESSAGE_STRIP_INFORMATION,
  BE as MESSAGE_STRIP_SUCCESS,
  DE as MESSAGE_STRIP_WARNING,
  Y_ as MONTH_PICKER_DESCRIPTION,
  tE as MULTICOMBOBOX_DIALOG_OK_BUTTON,
  nE as MULTIINPUT_ROLEDESCRIPTION_TEXT,
  oE as MULTIINPUT_SHOW_MORE_TOKENS,
  cE as PANEL_ICON,
  ME as RANGE_SLIDER_ARIA_DESCRIPTION,
  KE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,
  GE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,
  HE as RATING_INDICATOR_TEXT,
  VE as RATING_INDICATOR_TOOLTIP_TEXT,
  XE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,
  FE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,
  WE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,
  YE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,
  i as SELECT_OPTIONS,
  z as SELECT_ROLE_DESCRIPTION,
  ZE as SLIDER_ARIA_DESCRIPTION,
  e_ as SPLIT_BUTTON_DESCRIPTION,
  a_ as SPLIT_BUTTON_KEYBOARD_HINT,
  F_ as STEPINPUT_DEC_ICON_TITLE,
  Z_ as STEPINPUT_INC_ICON_TITLE,
  zE as TABCONTAINER_END_OVERFLOW,
  gE as TABCONTAINER_NEXT_ICON_ACC_NAME,
  yE as TABCONTAINER_OVERFLOW_MENU_TITLE,
  iE as TABCONTAINER_POPOVER_CANCEL_BUTTON,
  xE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,
  jE as TABCONTAINER_SUBTABS_DESCRIPTION,
  pE as TABLE_GROUP_ROW_ARIA_LABEL,
  aE as TABLE_HEADER_ROW_INFORMATION,
  lE as TABLE_ROW_POSITION,
  JE as TAB_ARIA_DESIGN_CRITICAL,
  uE as TAB_ARIA_DESIGN_NEGATIVE,
  bE as TAB_ARIA_DESIGN_NEUTRAL,
  rE as TAB_ARIA_DESIGN_POSITIVE,
  fE as TAB_SPLIT_ROLE_DESCRIPTION,
  qE as TEXTAREA_CHARACTERS_EXCEEDED,
  kE as TEXTAREA_CHARACTERS_LEFT,
  E_ as TIMEPICKER_CANCEL_BUTTON,
  vE as TIMEPICKER_HOURS_LABEL,
  __ as TIMEPICKER_INPUT_DESCRIPTION,
  wE as TIMEPICKER_MINUTES_LABEL,
  QE as TIMEPICKER_SECONDS_LABEL,
  $E as TIMEPICKER_SUBMIT_BUTTON,
  O_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,
  L_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,
  R_ as TOKENIZER_ARIA_CONTAIN_TOKEN,
  N_ as TOKENIZER_ARIA_LABEL,
  S_ as TOKENIZER_POPOVER_REMOVE,
  I_ as TOKEN_ARIA_DELETABLE,
  C_ as TREE_ITEM_ARIA_LABEL,
  D_ as TREE_ITEM_COLLAPSE_NODE,
  P_ as TREE_ITEM_EXPAND_NODE,
  n_ as VALUE_STATE_ERROR,
  sE as VALUE_STATE_ERROR_ALREADY_SELECTED,
  c_ as VALUE_STATE_INFORMATION,
  M_ as VALUE_STATE_SUCCESS,
  B_ as VALUE_STATE_TYPE_ERROR,
  s_ as VALUE_STATE_TYPE_INFORMATION,
  t_ as VALUE_STATE_TYPE_SUCCESS,
  U_ as VALUE_STATE_TYPE_WARNING,
  o_ as VALUE_STATE_WARNING,
  W_ as YEAR_PICKER_DESCRIPTION,
  h_ as default
};
