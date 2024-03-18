import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/add-photo.js";
import { pathData as pathDatav5 } from "./v5/add-photo.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "add-photo";
export { pathData, ltr, accData };