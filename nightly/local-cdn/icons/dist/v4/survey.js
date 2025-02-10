import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "survey";
const pathData = "M416 32H96v448h320V32zM136 418l37-36-37-36 18-18 37 37 36-37 18 18-37 36 37 36-18 18-36-37-37 37zm37-125l-37-37 18-18 19 17 54-55 18 19zM416 0q14 0 23 9t9 23v448q0 13-9 22.5t-23 9.5H96q-14 0-23-9.5T64 480V32q0-14 9-23t23-9h320zm-48 352q16 0 16 16 0 6-4.5 11t-11.5 5h-64q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h64zM173 165l-37-35 18-19 19 17 54-55 18 19zm195 59q16 0 16 16 0 6-4.5 11t-11.5 5h-64q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h64zm0-128q16 0 16 16 0 6-4.5 11t-11.5 5h-64q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h64z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/survey";
export { pathData, ltr, accData };