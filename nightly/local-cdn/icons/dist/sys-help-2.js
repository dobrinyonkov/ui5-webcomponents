import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/sys-help-2.js";
import { pathData as pathDatav5 } from "./v5/sys-help-2.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "sys-help-2";
export { pathData, ltr, accData };