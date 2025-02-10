import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "robot";
const pathData = "M256 54q-11 0-19-7.5T229 28q0-12 8-20t19-8 19 8 8 20q0 11-8 18.5T256 54q47 0 89 18t73 49.5 49 73 18 89.5q0 47-18 88.5T418 445t-73 49-89 18-89-18-73-49-49-72.5T27 284q0-48 18-89.5t49-73T167 72t89-18zm0 432q42 0 79-16t64-43.5 43-64 16-78.5-16-79-43-64.5T335 97t-79-16-79 16-64 43.5T70 205t-16 79 16 78.5 43 64 64 43.5 79 16zm52-311q23 0 42.5 8.5t34 23.5 23 34.5T416 284q0 22-8.5 41.5t-23 34-34 23T308 391H200q-22 0-41.5-8.5t-34.5-23-23.5-34T92 284q0-23 8.5-42.5T124 207t34.5-23.5T200 175h108zm0 189q33 0 56.5-23.5T388 284q0-34-23.5-58T308 202H200q-33 0-57 24t-24 58q0 33 24 56.5t57 23.5h108zM202 256q11 0 19 8t8 20q0 11-8 18.5t-19 7.5-19-7.5-8-18.5q0-12 8-20t19-8zm108 0q11 0 19 8t8 20q0 11-8 18.5t-19 7.5-19-7.5-8-18.5q0-12 8-20t19-8z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/robot";
export { pathData, ltr, accData };