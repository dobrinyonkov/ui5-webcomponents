import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "checklist";
const pathData = "M323 45H189c-12 0-22-10-22-23 0-12 10-22 22-22h134c12 0 22 10 22 22 0 13-10 23-22 23zm44 67H145c-12 0-22-10-22-22 0-13 10-23 22-23h222c13 0 23 10 23 23 0 12-10 22-23 22zm67 66v197c0 24-13 46-33 58l-134 76c-3 2-7 3-11 3s-7-1-11-3l-133-76c-21-12-34-34-34-58V178c0-25 20-44 45-44h267c24 0 44 19 44 44zM234 317l-41-41c-5-6-13-8-20-8s-14 2-20 8c-10 11-10 28 0 39l61 61c6 5 13 8 20 8s14-3 19-8l107-107c11-11 11-28 0-39-5-6-12-8-19-8s-14 2-20 8z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/checklist";
export { pathData, ltr, accData };