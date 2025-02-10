import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "unsaved-changes";
const pathData = "M17 241C17 110 125 2 256 2s239 108 239 239-108 239-239 239S17 372 17 241zm48 0c0 105 86 191 191 191s191-86 191-191S361 50 256 50 65 136 65 241zm99-97c0-27 20-48 47-48s48 21 48 48-21 48-48 48-47-21-47-48zm252 106l-12 12c-9 11-24 11-33 0l-19-18c-10-11-10-23 0-34l12-12c9-9 24-9 33 0l19 19c11 9 11 24 0 33zm-156-33l3 15c0 4 1 12-3 21-8 17-24 21-27 21h-96c-13 0-21-6-24-18-3-11 3-22 12-27l40-19c11-5 23-6 32-6h26c13 0 28 1 37 13zm7 174h-32c-11 0-12-4-12-12l1-31c0-7 2-12 7-16l80-80c4-5 10-7 17-7s12 2 16 7l19 18c10 11 10 23 0 34l-80 80c-5 5-11 7-16 7z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/unsaved-changes";
export { pathData, ltr, accData };