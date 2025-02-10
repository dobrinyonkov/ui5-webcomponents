import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "inspect-down";
const pathData = "M486 461q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486V26Q0 15 7.5 7.5T26 0t18 7.5T51 26v435h435zm0-461q11 0 18.5 7.5T512 26v332q0 11-7.5 18.5T486 384H154q-11 0-18.5-7.5T128 358V26q0-11 7.5-18.5T154 0h332zM250 288q-11 0-18.5-7.5T224 262t7-18l53-52-53-52q-7-7-7-18t7.5-18.5T250 96t18 7l52 53 52-53q7-7 18-7t18.5 7.5T416 122t-7 18l-53 52 53 52q7 7 7 18t-7.5 18.5T390 288t-18-7l-52-53-52 53q-7 7-18 7zM461 51H179v282h282V51z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/inspect-down";
export { pathData, ltr, accData };