import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "geographic-bubble-chart";
const pathData = "M432 160q-33 0-56.5-23.5T352 80t23.5-56.5T432 0t56.5 23.5T512 80t-23.5 56.5T432 160zm0-109q-12 0-20.5 8.5T403 80t8.5 20.5T432 109t20.5-8.5T461 80t-8.5-20.5T432 51zm54 173q13 0 19 10.5t7 21.5q0 62-22.5 109T431 443.5 348.5 491 254 507t-93.5-15.5-81.5-46T21.5 370 0 266q0-57 20-105.5t55-84 81.5-56T256 0h3q11 0 20 6.5t9 19.5v77q0 11-7.5 18t-18.5 7h-38v39q0 11-7.5 18t-18.5 7h-41l53 64h84q11 0 18.5 7.5T320 282v70h6q26 0 45.5 13.5T402 400q27-28 43-64t16-73q0-17 4-27t18-12h3zM56 212q-5 25-5 44 0 37 13 72t37 62.5 57 45.5 72 23v-53q-25-8-42.5-28.5T167 331z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/geographic-bubble-chart";
export { pathData, ltr, accData };