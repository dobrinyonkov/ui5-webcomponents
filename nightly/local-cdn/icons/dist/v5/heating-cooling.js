import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "heating-cooling";
const pathData = "M487 224q11 0 18 7t7 18-7 18.5-18 7.5h-54l44 48q6 6 6 16 0 11-7.5 18.5T458 365q-12 0-20-9l-73-81h-71v20l90 89q7 7 7 18t-7.5 18.5T366 428q-12 0-19-7l-53-54v120q0 11-7 18t-18 7-18.5-7-7.5-18v-85q-29-2-54-14.5t-43-32-28.5-45.5-10.5-55 10.5-54.5 28.5-45 43-32 54-14.5V25q0-11 7.5-18T269 0t18 7 7 18v119l59-60q7-7 19-7 10 0 17.5 7.5T397 102q0 12-7 19l-96 95v8h72l72-87q8-9 20-9 10 0 17.5 7.5T483 154q0 8-6 16l-44 54h54zm-329 31q0 38 24.5 64.5T243 350V161q-36 4-60.5 30.5T158 255zm-65-6q0 11-7 18.5T68 275H26q-11 0-18.5-7.5T0 249t7.5-18 18.5-7h42q11 0 18 7t7 18zm7 143q7-7 18-7t18.5 7.5T144 410q0 12-7 19l-40 40q-7 7-18 7t-18.5-7.5T53 450t7-18zM51 86q-7-7-7-19 0-10 7.5-17.5T70 42t18 7l40 40q7 7 7 18t-7.5 18.5T110 133q-12 0-19-7z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/heating-cooling";
export { pathData, ltr, accData };