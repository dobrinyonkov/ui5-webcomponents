import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "alarm";
const pathData = "M20.002 440c-6-10-3-21 5-29 2-2 14-18 21-29 14-19 24-48 24-83v-53c0-120 56-213 187-213 130 0 187 94 187 213v53c0 35 10 64 24 83 7 14 17 27 19 30 8 9 12 18 9 29-5 10-15 15-26 15h-136c-10 32-40 56-77 56s-67-24-77-56h-136c-11 0-19-5-24-16zm74-34h323c-13-27-29-62-29-107v-53c0-37-6-80-27-109-19-30-48-51-107-51-56 0-88 21-104 51-18 29-26 72-26 109v53c0 45-14 80-30 107z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/alarm";
export { pathData, ltr, accData };