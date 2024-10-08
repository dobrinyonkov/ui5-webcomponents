import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "thumb-down";
const pathData = "M454 0q24 0 41 17t17 41v204q0 24-17 41t-41 17h-90l-66 175q-7 17-30 17-15 0-28.5-6.5t-24-17.5-17-26-6.5-32v-78H90q-37 0-63.5-26T0 263q0-5 .5-10.5T2 242L43 69q8-31 32-50t56-19h323zm-89 269V51H131q-14 0-24.5 8T93 81L52 254q0 2-.5 4t-.5 4q0 16 11.5 27.5T90 301h128q11 0 18 7t7 18v104q0 18 15 26l64-171q3-8 9.5-12t14.5-4h19zm96-211q0-7-7-7h-38v218h38q7 0 7-7V58z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/thumb-down";
export { pathData, ltr, accData };