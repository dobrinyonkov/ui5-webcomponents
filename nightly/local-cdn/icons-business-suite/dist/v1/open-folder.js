import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "open-folder";
const pathData = "M37 146v164l20-90c4-17 16-37 36-37h328v-22c-1-5-2-8-4-11-3-2-6-3-11-4H238l-37-36H52c-9 2-14 5-14 15-1 5-1 12-1 21zm430 110c2-9 3-15 4-18v-6c0-8-3-10-11-12H109c-5 1-9 2-12 4-3 3-6 6-7 11s-3 12-5 21c-1 7-3 16-6 29s-6 27-10 44-8 34-12 53c-5 19-9 38-13 57-2 9-3 15-3 18-1 3-1 6-1 7 0 8 5 10 12 10 5 1 12 1 21 1h308c9 0 17 0 22-1 5 0 9-1 12-4 3-2 5-5 6-10s3-12 5-21 5-22 9-39c1-9 3-17 5-26l13-53c2-9 4-18 6-26 3-17 6-30 8-39zm-10-110v37h18c9 0 18 3 26 10 7 7 11 15 11 22 0 1 0 3-1 5l-57 255c-2 9-6 18-12 26-7 7-15 11-24 11H36c-9 0-18-4-25-11-7-8-11-17-11-26V110c0-19 18-37 37-37h182l37 37h165c19 0 36 17 36 36zm19-101l27-27v73h-73l27-27c-21-21-37-33-50-35-13-1-22-2-28-2-33 0-63 16-86 38l-19-20c20-18 41-31 63-38 13-5 27-7 42-7 7 0 19 1 35 3 16 3 37 17 62 42z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/open-folder";
export { pathData, ltr, accData };