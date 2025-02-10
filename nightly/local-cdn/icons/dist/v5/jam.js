import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "jam";
const pathData = "M52 322q0 20 14.5 31.5T102 365h15q11 0 18 7.5t7 18.5v43l80-63q6-6 16-6h57q14 0 26-8.5t12-24.5q0-14-10.5-22.5T298 301h-15q-11 0-18-8t-7-23q0-23-18.5-41T192 211t-46 20q12 6 26.5 18t14.5 28q0 10-7 17t-17 7q-14 0-22-11-4-5-14-12t-25-7q-20 0-35 15t-15 36zm204-222q-1 26 18.5 43t44.5 17h38l54 59q6 5 14 5 9 0 16-6.5t7-16.5v-41q27 0 45.5-10.5T512 113q0-22-13-33t-32-11h-12q0-29-20-49T386 0q-23 0-40 12.5T322 46h-8q-24 0-40 15.5T256 100zM122 512q-11 0-18.5-7.5T96 486v-70q-42-2-69-29T0 322q0-36 23.5-64.5T81 222l10-1q14-29 41.5-45t59.5-16q42 0 74 25t40 66q32 2 55 25.5t23 56.5q0 18-7.5 33T357 392.5 329 410t-34 6h-48l-110 90q-6 6-15 6z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/jam";
export { pathData, ltr, accData };