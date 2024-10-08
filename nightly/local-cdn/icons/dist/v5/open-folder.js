import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "open-folder";
const pathData = "M443 192q29 0 49 19.5t20 49.5v4.5l-1 5.5-26 124q-5 24-24.5 38.5T417 448H102q-25 0-45-15t-23-40L0 139v-7q0-28 17.5-47T62 64h106q11 0 19 8l35 37h126q25 0 44.5 15t23.5 40l4 28h23zM64 115q-13 2-13 16l13 101q8-18 25.5-29t38.5-11h241l-3-18q-3-14-18-14H211q-10 0-18-8l-36-37H64zm397 144q0-8-5.5-12t-12.5-4H128q-5 0-10.5 3.5T110 256L84 381q0 8 5.5 12t12.5 4h315q5 0 10.5-3.5t7.5-9.5z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/open-folder";
export { pathData, ltr, accData };