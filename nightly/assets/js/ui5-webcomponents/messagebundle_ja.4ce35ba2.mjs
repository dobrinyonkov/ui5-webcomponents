const T = "\u4E2D\u6B62", I = "\u30ED\u30FC\u30C9\u4E2D", _ = "\u958B\u59CB\u5217", E = "\u4E2D\u592E\u5217", L = "\u7D42\u4E86\u5217", O = "\u958B\u59CB\u5217\u3092\u5C55\u958B", A = "\u958B\u59CB\u5217\u3092\u5727\u7E2E", N = "\u7D42\u4E86\u5217\u3092\u5C55\u958B", S = "\u7D42\u4E86\u5217\u3092\u5727\u7E2E", C = "\u901A\u77E5", R = "\u8A73\u7D30\u3092\u8868\u793A", D = "\u8A73\u7D30\u3092\u975E\u8868\u793A", M = "\u8A73\u7D30", U = "\u7D42\u4E86", B = "\u65E2\u8AAD", t = "\u672A\u8AAD", P = "\u9AD8\u512A\u5148\u5EA6", n = "\u4E2D\u512A\u5148\u5EA6", o = "\u4F4E\u512A\u5148\u5EA6", s = "\u901A\u77E5\u30B0\u30EB\u30FC\u30D7", c = "\u30AB\u30A6\u30F3\u30BF", F = "\u3059\u3079\u3066\u9589\u3058\u308B", G = "\u30B0\u30EB\u30FC\u30D7\u3092\u5727\u7E2E", V = "\u30B0\u30EB\u30FC\u30D7\u3092\u5C55\u958B", H = "\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3", X = "\u4E2D\u6B62", W = "\u540D\u79F0\u5909\u66F4", Y = "\u5F37\u5236\u7D42\u4E86\u6E08", Z = "\u4FDD\u7559", e = "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D", K = "\u5F37\u5236\u7D42\u4E86", a = "\u518D\u8A66\u884C", r = "\u7DE8\u96C6", i = "\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F", g = '\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u304B\u3001\u307E\u305F\u306F "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9" \u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002', l = "\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9", u = "\u3053\u3053\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059\u3002", d = "\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002", b = "\u30B7\u30A7\u30EB\u30D0\u30FC", f = "\u30ED\u30B4", j = "CoPilot", m = "{0} \u4EF6\u306E\u901A\u77E5", p = "\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB", x = "\u88FD\u54C1", h = "\u88FD\u54C1", k = "\u691C\u7D22", q = "\u8FFD\u52A0", v = "\u30AD\u30E3\u30F3\u30BB\u30EB", w = "\u30A6\u30A3\u30B6\u30FC\u30C9\u9032\u6357\u30D0\u30FC", y = "\u30A6\u30A3\u30B6\u30FC\u30C9\u30B9\u30C6\u30C3\u30D7", z = "\u6709\u52B9\u5316\u3059\u308B\u306B\u306F\u3001\u30B9\u30DA\u30FC\u30B9\u30D0\u30FC\u304B Enter \u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059", J = "\u30B9\u30C6\u30C3\u30D7", Q = "\u4EFB\u610F", $ = "\u6709\u52B9", TT = "\u7121\u52B9", IT = "\u30B9\u30C6\u30C3\u30D7 {0}", _T = "\u30A6\u30A3\u30B6\u30FC\u30C9", ET = "\u30B9\u30C6\u30C3\u30D7", LT = "\u30D3\u30E5\u30FC\u8A2D\u5B9A", OT = "OK", AT = "\u4E2D\u6B62", NT = "\u30EA\u30BB\u30C3\u30C8", ST = "\u30BD\u30FC\u30C8\u9806\u5E8F", CT = "\u30D5\u30A3\u30EB\u30BF\u57FA\u6E96", RT = "\u30BD\u30FC\u30C8\u57FA\u6E96", DT = "\u6607\u9806", MT = "\u964D\u9806", UT = "\u7D50\u679C\u3092\u53D6\u5F97\u3057\u307E\u3059", BT = "\u691C\u7D22\u57FA\u6E96\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002", tT = "\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3092\u307E\u3060\u8FFD\u52A0\u3057\u3066\u3044\u307E\u305B\u3093", PT = "\u8FFD\u52A0\u3057\u307E\u3059\u304B\u3002", nT = "\u5217\u3092\u8FFD\u52A0\u3057\u3066\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u307E\u3059", oT = "\u30C6\u30FC\u30D6\u30EB\u8A2D\u5B9A\u3067\u5FC5\u8981\u306A\u5217\u3092\u9078\u629E\u3057\u307E\u3059\u3002", sT = "\u30C7\u30FC\u30BF\u304C\u307E\u3060\u3042\u308A\u307E\u305B\u3093", cT = "\u5B58\u5728\u3059\u308B\u5834\u5408\u306F\u3001\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002", FT = "\u65B0\u3057\u3044\u30E1\u30FC\u30EB\u306F\u3042\u308A\u307E\u305B\u3093", GT = "\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", VT = "\u30A8\u30F3\u30C8\u30EA\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093", HT = "\u5B58\u5728\u3059\u308B\u5834\u5408\u306F\u3001\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002", XT = "\u65B0\u3057\u3044\u901A\u77E5\u306F\u5C4A\u3044\u3066\u3044\u307E\u305B\u3093", WT = "\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", YT = "\u304A\u6C17\u306B\u5165\u308A\u3092\u307E\u3060\u8FFD\u52A0\u3057\u3066\u3044\u307E\u305B\u3093", ZT = "\u304A\u6C17\u306B\u5165\u308A\u30A2\u30A4\u30C6\u30E0\u306E\u4E00\u89A7\u3092\u767B\u9332\u3057\u307E\u3059\u304B\u3002", eT = "\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093", KT = "\u691C\u7D22\u57FA\u6E96\u306E\u5909\u66F4\u3092\u8A66\u307F\u3066\u304F\u3060\u3055\u3044\u3002", aT = "\u65B0\u3057\u3044\u30BF\u30B9\u30AF\u306F\u3042\u308A\u307E\u305B\u3093", rT = "\u5B9F\u884C\u3059\u308B\u5834\u5408\u306F\u3001\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002", iT = "\u30C7\u30FC\u30BF\u3092\u30ED\u30FC\u30C9\u3067\u304D\u307E\u305B\u3093", gT = "\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u304C\u539F\u56E0\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001\u30EA\u30ED\u30FC\u30C9\u3092\u8A66\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u308C\u3067\u3082\u89E3\u6C7A\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u554F\u3044\u5408\u308F\u305B\u3066\u304F\u3060\u3055\u3044\u3002", lT = "\u30A4\u30E1\u30FC\u30B8\u3092\u30ED\u30FC\u30C9\u3067\u304D\u307E\u305B\u3093", uT = "\u6307\u5B9A\u3055\u308C\u305F\u5834\u6240\u306B\u30A4\u30E1\u30FC\u30B8\u304C\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u304B\u3001\u307E\u305F\u306F\u30B5\u30FC\u30D0\u304C\u5FDC\u7B54\u3057\u3066\u3044\u307E\u305B\u3093\u3002", dT = "\u30C7\u30FC\u30BF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3067\u304D\u307E\u305B\u3093", bT = "\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u3067\u554F\u984C\u304C\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u3068\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u3067\u3082\u89E3\u6C7A\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u554F\u3044\u5408\u308F\u305B\u3066\u304F\u3060\u3055\u3044\u3002", fT = "SAP Integration Suite \u306B\u79FB\u884C", jT = "\u7D71\u5408\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u65E2\u5B58\u306E Process Integration \u30B5\u30D6\u30B9\u30AF\u30EA\u30D7\u30B7\u30E7\u30F3\u304B\u3089 Cloud Integration \u6A5F\u80FD\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002", mT = "\u7A7A\u304D\u9818\u57DF\u304C\u3042\u308B\u3088\u3046\u3067\u3059", pT = "\u30C6\u30FC\u30D6\u30EB\u306E\u8A2D\u5B9A\u3067\u5217\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002", xT = "\u30AB\u30EC\u30F3\u30C0\u306B\u8AB0\u3082\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093", hT = "\u3059\u3050\u306B\u8AB0\u304B\u3092\u8FFD\u52A0\u3057\u307E\u3059\u304B\u3002", kT = "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002", qT = "\u3053\u308C\u304B\u3089\u3082\u9811\u5F35\u3063\u3066\u304F\u3060\u3055\u3044\u3002", vT = "\u307E\u3060\u8A08\u753B\u304C\u3042\u308A\u307E\u305B\u3093", wT = "\u3053\u306E\u6642\u9593\u67A0\u306B\u306F\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u304C\u3042\u308A\u307E\u305B\u3093\u3002", yT = "\u30D5\u30A3\u30EB\u30BF\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u53EF\u80FD\u3067\u3059", zT = "\u30D5\u30A3\u30EB\u30BF\u306F\u3001\u6700\u3082\u8A72\u5F53\u3059\u308B\u9805\u76EE\u3078\u306E\u96C6\u4E2D\u306B\u5F79\u7ACB\u3061\u307E\u3059\u3002", JT = "\u9805\u76EE\u3092\u30B0\u30EB\u30FC\u30D7\u5316\u3057\u3066\u6982\u8981\u3092\u628A\u63E1\u3067\u304D\u308B\u3088\u3045\u306B\u3057\u307E\u3059", QT = "\u30B0\u30EB\u30FC\u30D7\u5316\u306E\u30AB\u30C6\u30B4\u30EA\u306F\u3001\u30B0\u30EB\u30FC\u30D7\u8A2D\u5B9A\u3067\u9078\u629E\u3067\u304D\u307E\u3059\u3002", $T = "\u7D50\u679C\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093", TI = "\u30D5\u30A3\u30EB\u30BF\u57FA\u6E96\u306E\u8ABF\u6574\u3092\u8A66\u307F\u3066\u304F\u3060\u3055\u3044\u3002", II = "\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u304C\u3053\u306E\u30DA\u30FC\u30B8\u306F\u691C\u51FA\u3067\u304D\u307E\u305B\u3093", _I = "\u30A2\u30D7\u30EA\u306E\u547C\u51FA\u306B\u4F7F\u7528\u3057\u3066\u3044\u308B URL \u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002", EI = "\u30E6\u30FC\u30B6\u72EC\u81EA\u306E\u5217\u5E45\u3092\u9078\u629E\u3057\u307E\u3059", LI = "\u5217\u67A0\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u5217\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002", OI = "\u6700\u3082\u91CD\u8981\u306A\u9805\u76EE\u304C\u6700\u521D\u306B\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u304B\u3002", AI = "\u30BD\u30FC\u30C8\u57FA\u6E96\u3092\u30BD\u30FC\u30C8\u8A2D\u5B9A\u3067\u9078\u629E\u3057\u307E\u3059\u3002", NI = "\u3088\u304F\u3067\u304D\u307E\u3057\u305F\u3002", SI = "\u3053\u308C\u3067\u5B66\u7FD2\u306E\u5272\u308A\u5F53\u3066\u304C\u3059\u3079\u3066\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002", CI = "\u3053\u3053\u306B\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044", RI = "\u307E\u305F\u3001\u8907\u6570\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u4E00\u5EA6\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002", DI = "\u4E00\u90E8\u306E\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093", MI = "\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3057\u3066\u3001\u30C1\u30E3\u30FC\u30C8\u3092\u5B8C\u6210\u3057\u307E\u3059\u3002", UI = "\u30C1\u30E3\u30FC\u30C8\u30C7\u30FC\u30BF\u306A\u3057", BI = "\u30C1\u30E3\u30FC\u30C8\u8A2D\u5B9A\u306E\u8ABF\u6574\u3092\u8A66\u307F\u3066\u304F\u3060\u3055\u3044\u3002", tI = "\u3054\u610F\u898B\u3092\u304A\u5BC4\u305B\u304F\u3060\u3055\u3044\u3002", PI = "SAP \u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306B\u3064\u3044\u3066\u3001\u3054\u610F\u898B\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002\u7C21\u5358\u306A\u30B5\u30FC\u30D9\u30A4\u306B\u3054\u56DE\u7B54\u3044\u305F\u3060\u304D\u3001\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002\u304A\u6642\u9593\u306F\u6570\u5206\u307B\u3069\u3068\u306A\u308A\u307E\u3059\u3002", nI = "\u30B5\u30A4\u30C9\u30B3\u30F3\u30C6\u30F3\u30C4", oI = "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", sI = "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u4E00\u89A7\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC", cI = "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u4E00\u89A7\u30E1\u30CB\u30E5\u30FC\u30A2\u30A4\u30C6\u30E0", FI = "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u4E00\u89A7\u30C4\u30EA\u30FC", GI = "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u4E00\u89A7\u30C4\u30EA\u30FC\u30A2\u30A4\u30C6\u30E0", VI = {
  BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT: T,
  BARCODE_SCANNER_DIALOG_LOADING_TXT: I,
  FCL_START_COLUMN_TXT: _,
  FCL_MIDDLE_COLUMN_TXT: E,
  FCL_END_COLUMN_TXT: L,
  FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP: O,
  FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP: A,
  FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP: N,
  FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP: S,
  NOTIFICATION_LIST_ITEM_TXT: C,
  NOTIFICATION_LIST_ITEM_SHOW_MORE: R,
  NOTIFICATION_LIST_ITEM_SHOW_LESS: D,
  NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE: M,
  NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE: U,
  NOTIFICATION_LIST_ITEM_READ: B,
  NOTIFICATION_LIST_ITEM_UNREAD: t,
  NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT: P,
  NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT: n,
  NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT: o,
  NOTIFICATION_LIST_GROUP_ITEM_TXT: s,
  NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT: c,
  NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE: F,
  NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE: G,
  NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE: V,
  TIMELINE_ARIA_LABEL: H,
  UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT: X,
  UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT: W,
  UPLOADCOLLECTIONITEM_ERROR_STATE: Y,
  UPLOADCOLLECTIONITEM_READY_STATE: Z,
  UPLOADCOLLECTIONITEM_UPLOADING_STATE: e,
  UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT: K,
  UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT: a,
  UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT: r,
  UPLOADCOLLECTION_NO_DATA_TEXT: i,
  UPLOADCOLLECTION_NO_DATA_DESCRIPTION: g,
  UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION: l,
  UPLOADCOLLECTION_DRAG_FILE_INDICATOR: u,
  UPLOADCOLLECTION_DROP_FILE_INDICATOR: d,
  SHELLBAR_LABEL: b,
  SHELLBAR_LOGO: f,
  SHELLBAR_COPILOT: j,
  SHELLBAR_NOTIFICATIONS: m,
  SHELLBAR_PROFILE: p,
  SHELLBAR_PRODUCTS: x,
  PRODUCT_SWITCH_CONTAINER_LABEL: h,
  SHELLBAR_SEARCH: k,
  SHELLBAR_OVERFLOW: q,
  SHELLBAR_CANCEL: v,
  WIZARD_NAV_ARIA_LABEL: w,
  WIZARD_LIST_ARIA_LABEL: y,
  WIZARD_LIST_ARIA_DESCRIBEDBY: z,
  WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL: J,
  WIZARD_OPTIONAL_STEP_ARIA_LABEL: Q,
  WIZARD_STEP_ACTIVE: $,
  WIZARD_STEP_INACTIVE: TT,
  WIZARD_STEP_ARIA_LABEL: IT,
  WIZARD_NAV_ARIA_ROLE_DESCRIPTION: _T,
  WIZARD_NAV_STEP_DEFAULT_HEADING: ET,
  VSD_DIALOG_TITLE_SORT: LT,
  VSD_SUBMIT_BUTTON: OT,
  VSD_CANCEL_BUTTON: AT,
  VSD_RESET_BUTTON: NT,
  VSD_SORT_ORDER: ST,
  VSD_FILTER_BY: CT,
  VSD_SORT_BY: RT,
  VSD_ORDER_ASCENDING: DT,
  VSD_ORDER_DESCENDING: MT,
  IM_TITLE_BEFORESEARCH: UT,
  IM_SUBTITLE_BEFORESEARCH: BT,
  IM_TITLE_NOACTIVITIES: tT,
  IM_SUBTITLE_NOACTIVITIES: PT,
  IM_TITLE_NOCOLUMNSSET: nT,
  IM_SUBTITLE_NOCOLUMNSSET: oT,
  IM_TITLE_NODATA: sT,
  IM_SUBTITLE_NODATA: cT,
  IM_TITLE_NOMAIL: FT,
  IM_SUBTITLE_NOMAIL: GT,
  IM_TITLE_NOENTRIES: VT,
  IM_SUBTITLE_NOENTRIES: HT,
  IM_TITLE_NONOTIFICATIONS: XT,
  IM_SUBTITLE_NONOTIFICATIONS: WT,
  IM_TITLE_NOSAVEDITEMS: YT,
  IM_SUBTITLE_NOSAVEDITEMS: ZT,
  IM_TITLE_NOSEARCHRESULTS: eT,
  IM_SUBTITLE_NOSEARCHRESULTS: KT,
  IM_TITLE_NOTASKS: aT,
  IM_SUBTITLE_NOTASKS: rT,
  IM_TITLE_UNABLETOLOAD: iT,
  IM_SUBTITLE_UNABLETOLOAD: gT,
  IM_TITLE_UNABLETOLOADIMAGE: lT,
  IM_SUBTITLE_UNABLETOLOADIMAGE: uT,
  IM_TITLE_UNABLETOUPLOAD: dT,
  IM_SUBTITLE_UNABLETOUPLOAD: bT,
  IM_TITLE_UPLOADTOCLOUD: fT,
  IM_SUBTITLE_UPLOADTOCLOUD: jT,
  IM_TITLE_ADDCOLUMN: mT,
  IM_SUBTITLE_ADDCOLUMN: pT,
  IM_TITLE_ADDPEOPLE: xT,
  IM_SUBTITLE_ADDPEOPLE: hT,
  IM_TITLE_BALLOONSKY: kT,
  IM_SUBTITLE_BALLOONSKY: qT,
  IM_TITLE_EMPTYPLANNINGCALENDAR: vT,
  IM_SUBTITLE_EMPTYPLANNINGCALENDAR: wT,
  IM_TITLE_FILTERTABLE: yT,
  IM_SUBTITLE_FILTERTABLE: zT,
  IM_TITLE_GROUPTABLE: JT,
  IM_SUBTITLE_GROUPTABLE: QT,
  IM_TITLE_NOFILTERRESULTS: $T,
  IM_SUBTITLE_NOFILTERRESULTS: TI,
  IM_TITLE_PAGENOTFOUND: II,
  IM_SUBTITLE_PAGENOTFOUND: _I,
  IM_TITLE_RESIZECOLUMN: EI,
  IM_SUBTITLE_RESIZECOLUMN: LI,
  IM_TITLE_SORTCOLUMN: OI,
  IM_SUBTITLE_SORTCOLUMN: AI,
  IM_TITLE_SUCCESSSCREEN: NI,
  IM_SUBTITLE_SUCCESSSCREEN: SI,
  IM_TITLE_UPLOADCOLLECTION: CI,
  IM_SUBTITLE_UPLOADCOLLECTION: RI,
  IM_TITLE_ADDDIMENSIONS: DI,
  IM_SUBTITLE_ADDDIMENSIONS: MI,
  IM_TITLE_NODIMENSIONSSET: UI,
  IM_SUBTITLE_NODIMENSIONSSET: BI,
  IM_TITLE_SURVEY: tI,
  IM_SUBTITLE_SURVEY: PI,
  DSC_SIDE_ARIA_LABEL: nI,
  SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT: oI,
  SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC: sI,
  SIDE_NAVIGATION_COLLAPSED_LIST_ITEMS_ARIA_ROLE_DESC: cI,
  SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC: FI,
  SIDE_NAVIGATION_LIST_ITEMS_ARIA_ROLE_DESC: GI
};
export {
  T as BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT,
  I as BARCODE_SCANNER_DIALOG_LOADING_TXT,
  nI as DSC_SIDE_ARIA_LABEL,
  S as FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP,
  N as FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP,
  L as FCL_END_COLUMN_TXT,
  E as FCL_MIDDLE_COLUMN_TXT,
  A as FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP,
  O as FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP,
  _ as FCL_START_COLUMN_TXT,
  pT as IM_SUBTITLE_ADDCOLUMN,
  MI as IM_SUBTITLE_ADDDIMENSIONS,
  hT as IM_SUBTITLE_ADDPEOPLE,
  qT as IM_SUBTITLE_BALLOONSKY,
  BT as IM_SUBTITLE_BEFORESEARCH,
  wT as IM_SUBTITLE_EMPTYPLANNINGCALENDAR,
  zT as IM_SUBTITLE_FILTERTABLE,
  QT as IM_SUBTITLE_GROUPTABLE,
  PT as IM_SUBTITLE_NOACTIVITIES,
  oT as IM_SUBTITLE_NOCOLUMNSSET,
  cT as IM_SUBTITLE_NODATA,
  BI as IM_SUBTITLE_NODIMENSIONSSET,
  HT as IM_SUBTITLE_NOENTRIES,
  TI as IM_SUBTITLE_NOFILTERRESULTS,
  GT as IM_SUBTITLE_NOMAIL,
  WT as IM_SUBTITLE_NONOTIFICATIONS,
  ZT as IM_SUBTITLE_NOSAVEDITEMS,
  KT as IM_SUBTITLE_NOSEARCHRESULTS,
  rT as IM_SUBTITLE_NOTASKS,
  _I as IM_SUBTITLE_PAGENOTFOUND,
  LI as IM_SUBTITLE_RESIZECOLUMN,
  AI as IM_SUBTITLE_SORTCOLUMN,
  SI as IM_SUBTITLE_SUCCESSSCREEN,
  PI as IM_SUBTITLE_SURVEY,
  gT as IM_SUBTITLE_UNABLETOLOAD,
  uT as IM_SUBTITLE_UNABLETOLOADIMAGE,
  bT as IM_SUBTITLE_UNABLETOUPLOAD,
  RI as IM_SUBTITLE_UPLOADCOLLECTION,
  jT as IM_SUBTITLE_UPLOADTOCLOUD,
  mT as IM_TITLE_ADDCOLUMN,
  DI as IM_TITLE_ADDDIMENSIONS,
  xT as IM_TITLE_ADDPEOPLE,
  kT as IM_TITLE_BALLOONSKY,
  UT as IM_TITLE_BEFORESEARCH,
  vT as IM_TITLE_EMPTYPLANNINGCALENDAR,
  yT as IM_TITLE_FILTERTABLE,
  JT as IM_TITLE_GROUPTABLE,
  tT as IM_TITLE_NOACTIVITIES,
  nT as IM_TITLE_NOCOLUMNSSET,
  sT as IM_TITLE_NODATA,
  UI as IM_TITLE_NODIMENSIONSSET,
  VT as IM_TITLE_NOENTRIES,
  $T as IM_TITLE_NOFILTERRESULTS,
  FT as IM_TITLE_NOMAIL,
  XT as IM_TITLE_NONOTIFICATIONS,
  YT as IM_TITLE_NOSAVEDITEMS,
  eT as IM_TITLE_NOSEARCHRESULTS,
  aT as IM_TITLE_NOTASKS,
  II as IM_TITLE_PAGENOTFOUND,
  EI as IM_TITLE_RESIZECOLUMN,
  OI as IM_TITLE_SORTCOLUMN,
  NI as IM_TITLE_SUCCESSSCREEN,
  tI as IM_TITLE_SURVEY,
  iT as IM_TITLE_UNABLETOLOAD,
  lT as IM_TITLE_UNABLETOLOADIMAGE,
  dT as IM_TITLE_UNABLETOUPLOAD,
  CI as IM_TITLE_UPLOADCOLLECTION,
  fT as IM_TITLE_UPLOADTOCLOUD,
  F as NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE,
  c as NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT,
  G as NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE,
  V as NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE,
  s as NOTIFICATION_LIST_GROUP_ITEM_TXT,
  U as NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE,
  P as NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT,
  o as NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT,
  n as NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT,
  M as NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE,
  B as NOTIFICATION_LIST_ITEM_READ,
  D as NOTIFICATION_LIST_ITEM_SHOW_LESS,
  R as NOTIFICATION_LIST_ITEM_SHOW_MORE,
  C as NOTIFICATION_LIST_ITEM_TXT,
  t as NOTIFICATION_LIST_ITEM_UNREAD,
  h as PRODUCT_SWITCH_CONTAINER_LABEL,
  v as SHELLBAR_CANCEL,
  j as SHELLBAR_COPILOT,
  b as SHELLBAR_LABEL,
  f as SHELLBAR_LOGO,
  m as SHELLBAR_NOTIFICATIONS,
  q as SHELLBAR_OVERFLOW,
  x as SHELLBAR_PRODUCTS,
  p as SHELLBAR_PROFILE,
  k as SHELLBAR_SEARCH,
  sI as SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC,
  cI as SIDE_NAVIGATION_COLLAPSED_LIST_ITEMS_ARIA_ROLE_DESC,
  FI as SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC,
  GI as SIDE_NAVIGATION_LIST_ITEMS_ARIA_ROLE_DESC,
  oI as SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT,
  H as TIMELINE_ARIA_LABEL,
  X as UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT,
  r as UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT,
  Y as UPLOADCOLLECTIONITEM_ERROR_STATE,
  Z as UPLOADCOLLECTIONITEM_READY_STATE,
  W as UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT,
  a as UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT,
  K as UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT,
  e as UPLOADCOLLECTIONITEM_UPLOADING_STATE,
  l as UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION,
  u as UPLOADCOLLECTION_DRAG_FILE_INDICATOR,
  d as UPLOADCOLLECTION_DROP_FILE_INDICATOR,
  g as UPLOADCOLLECTION_NO_DATA_DESCRIPTION,
  i as UPLOADCOLLECTION_NO_DATA_TEXT,
  AT as VSD_CANCEL_BUTTON,
  LT as VSD_DIALOG_TITLE_SORT,
  CT as VSD_FILTER_BY,
  DT as VSD_ORDER_ASCENDING,
  MT as VSD_ORDER_DESCENDING,
  NT as VSD_RESET_BUTTON,
  RT as VSD_SORT_BY,
  ST as VSD_SORT_ORDER,
  OT as VSD_SUBMIT_BUTTON,
  J as WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL,
  z as WIZARD_LIST_ARIA_DESCRIBEDBY,
  y as WIZARD_LIST_ARIA_LABEL,
  w as WIZARD_NAV_ARIA_LABEL,
  _T as WIZARD_NAV_ARIA_ROLE_DESCRIPTION,
  ET as WIZARD_NAV_STEP_DEFAULT_HEADING,
  Q as WIZARD_OPTIONAL_STEP_ARIA_LABEL,
  $ as WIZARD_STEP_ACTIVE,
  IT as WIZARD_STEP_ARIA_LABEL,
  TT as WIZARD_STEP_INACTIVE,
  VI as default
};
