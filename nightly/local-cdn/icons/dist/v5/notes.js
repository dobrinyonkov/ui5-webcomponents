import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "notes";
const pathData = "M262 320q11 0 18.5 7.5T288 346t-7.5 18-18.5 7H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 320h108zM390 64q38 0 64 26t26 64v268q0 38-26 64t-64 26H122q-38 0-64-26t-26-64V154q0-38 26-64t64-26h6V26q0-11 7.5-18.5T154 0t18 7.5 7 18.5v38h154V26q0-11 7-18.5T358 0t18.5 7.5T384 26v38h6zm-32 173q11 0 18.5 7.5T384 263t-7.5 18-18.5 7H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 237h204zm71-83q0-17-11-28t-28-11h-6v19q0 11-7.5 18.5T358 160t-18-7.5-7-18.5v-19H179v19q0 11-7 18.5t-18 7.5-18.5-7.5T128 134v-19h-6q-17 0-28 11t-11 28v268q0 17 11 28t28 11h268q17 0 28-11t11-28V154z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/notes";
export { pathData, ltr, accData };