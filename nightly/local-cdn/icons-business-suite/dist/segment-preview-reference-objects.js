import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/segment-preview-reference-objects.js";
import { pathData as pathDatav2 } from "./v2/segment-preview-reference-objects.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/segment-preview-reference-objects";
export { pathData, ltr, accData };