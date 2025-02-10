import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "driver";
const pathData = "M256 384c0-70 57-128 128-128 70 0 128 58 128 128 0 71-58 128-128 128-71 0-128-57-128-128zM0 416v-64c0-70 57-128 128-128h32c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96h32c35 0 67 15 91 38-9 7-16 15-23 23-18-19-41-29-68-29h-64c-53 0-96 43-96 96v32h193v32H0zm384-144c-64 0-112 51-112 112 0 64 48 112 112 112 61 0 112-48 112-112 0-61-51-112-112-112zm0 192c-45 0-80-35-80-80 0-43 35-80 80-80 43 0 80 37 80 80 0 45-37 80-80 80zm0-144c-36 0-64 29-64 64 0 36 28 64 64 64 35 0 64-28 64-64 0-35-29-64-64-64zM96 128c0 35 29 64 64 64s64-29 64-64-29-64-64-64-64 29-64 64zm288 288c-17 0-32-13-32-32 0-17 15-32 32-32s32 15 32 32c0 19-15 32-32 32z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/driver";
export { pathData, ltr, accData };