import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "attachment-zip-file";
const pathData = "M40 128L168 0h96v31h-64v97q0 13-9.5 22t-23.5 9H72v321h368V31h-32V0h32q14 0 23 9t9 23v448q0 13-9 22.5t-23 9.5H72q-13 0-22.5-9.5T40 480V128zm287 264q-30 0-51-22t-21-52q0-8 3-21t7-25l33-81v-31h31v31h30l36 99 6 28q0 30-22 52t-52 22zm-2-36q15 0 27.5-12.5T365 316q0-14-12-24-10-12-24-12-15 0-27.5 12.5T289 320q0 13 11.5 24.5T325 356zm4-259V64h-34V33h34v31h31v33h-31zm0 63v-32h-34V97h34v31h31v32h-31zm0-127V0h31v33h-31z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/attachment-zip-file";
export { pathData, ltr, accData };