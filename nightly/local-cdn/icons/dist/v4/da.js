import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "da";
const pathData = "M256 512q-8 0-13-7L3 172q-3-5-3-10 0-6 3-9L117 6q5-6 12-6h267q9 0 13 7l100 146q3 4 3 9t-3 10L269 505q-5 7-13 7zM36 163l220 305 221-306-89-130H137zm341 23q-26 9-40 22.5T315 248q-3 8-11 8t-10-8q-9-26-22.5-39.5T232 186q-8-2-8-10t8-11q26-9 39.5-22.5T294 103q1-4 4-5.5t6-1.5q8 0 11 7 8 26 22 39.5t40 22.5q7 3 7 11 0 3-1.5 6t-5.5 4z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/da";
export { pathData, ltr, accData };