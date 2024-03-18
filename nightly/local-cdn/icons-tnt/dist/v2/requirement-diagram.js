import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "requirement-diagram";
const pathData = "M256 188q0-9-11-9h-22q-6 11-18 18.5t-26 7.5h-51q-14 0-25.5-7.5T84 179H62q-11 0-11 9v212q0 9 11 9h183q11 0 11-9V188zm205 221h-51v51h51v-51zM128 153h51v-25h-51v25zm282-51h51V51h-51v51zm0 179h51v-51h-51v51zm-220-42q7-7 19-7 11 0 18 7 7 8 7 18.5t-7 18.5l-74 73q-9 7-17 7-10 0-19-7l-37-37q-7-8-7-18t7-18q10-8 19-8 10 0 18 8l19 19zm128-9h41v-25q0-11 7-18.5t18-7.5h103q11 0 18 7.5t7 18.5v102q0 11-7 18t-18 7H384q-11 0-18-7t-7-18v-26h-41l76 77h93q11 0 18 7.5t7 17.5v103q0 11-7 18t-18 7H384q-11 0-18-7t-7-18v-92l-52-51v57q0 25-18 42.5T245 460H62q-26 0-44-17.5T0 400V188q0-25 18-42.5T62 128h15q0-21 15-36t36-15h51q22 0 37 15t15 36h14q21 0 37 12t22 31l55-54V26q0-11 7-18.5T384 0h103q11 0 18 7.5t7 18.5v102q0 11-7 18t-18 7h-93z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/requirement-diagram";
export { pathData, ltr, accData };