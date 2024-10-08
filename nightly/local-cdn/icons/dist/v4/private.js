import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "private";
const pathData = "M304 132q7-4 16-4V64q0-6 3.5-16.5t12.5-21T361 8t40-8 39 6 24 15 12.5 20.5T480 64v64q9 0 16 4 6 3 11 10t5 18v96q0 11-10.5 21.5T480 288H320q-9 0-16-4-6-3-11-9.5t-5-18.5v-96q0-11 5-18t11-10zm48-68v64h96V64q0-2-.5-7.5t-5-11-14-9.5-27.5-4-27.5 5T359 48q-2 4-4 7.5t-3 8.5zm-32 448H0v-64q0-26 10-49.5t27.5-41 41-27.5 49.5-10h32q-40 0-68-28t-28-68 28-68 68-28 68 28 28 68-28 68-68 28h32q27 0 50 10t40.5 27.5T310 398t10 50v64zM160 288q27 0 45.5-19t18.5-45-18.5-45-45.5-19q-26 0-45 19t-19 45 19 45 45 19zm277-32l-21-37q16-10 16-27 0-14-9-23t-23-9q-13 0-22.5 9t-9.5 23q0 9 4.5 15.5T384 219l-18 37h71zM32 448v32h256v-32q0-40-28-68t-68-28h-64q-40 0-68 28t-28 68z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/private";
export { pathData, ltr, accData };