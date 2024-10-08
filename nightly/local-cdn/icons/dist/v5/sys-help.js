import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sys-help";
const pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 461q42 0 79.5-16.5t65-44 44-65T461 256t-16.5-79.5-44-65-65-44T256 51t-79 16-65 44-44.5 65.5T51 256t16 79 44 65 65.5 44.5T256 461zm0-109q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0-256q40 0 68 28t28 68q0 33-20 58.5T282 285v9q0 11-7.5 18.5T256 320t-18.5-7.5T230 294v-32q0-11 8-18t21-7q17 0 29.5-13t12.5-32-13-32-32-13-32 12.5-13 29.5q0 13-7 21t-18 8-18.5-9-7.5-26 7.5-32.5T188 123t30.5-19.5T256 96z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/sys-help";
export { pathData, ltr, accData };