import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "foil";
const pathData = "M265.993 47l111 1c31 0 62 3 71 30 9 28-19 51-48 75-6 4-12 9-18 15 4 3 8 5 11 6 22 11 54 33 54 71 0 37-33 51-54 62-3 1-7 2-12 5 5 7 12 11 19 18 29 24 58 47 48 75-9 24-41 27-70 27l-111-2c-15 31-45 50-80 50h-34c-51 0-91-40-91-91V91c0-51 40-91 91-91h34c35 0 63 19 79 47zm-113 385h34c24 0 43-19 43-43V91c0-24-19-43-43-43h-34c-24 0-43 19-43 43v298c0 24 19 43 43 43zm223-335l-95-2-3 288h110c-7-7-15-12-20-17-23-20-39-35-39-54 0-28 25-39 44-48 12-5 26-12 26-19 0-11-11-18-30-29-17-11-40-24-40-48 0-19 17-33 41-53 7-5 15-10 22-17-4 0-9-1-16-1z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/foil";
export { pathData, ltr, accData };