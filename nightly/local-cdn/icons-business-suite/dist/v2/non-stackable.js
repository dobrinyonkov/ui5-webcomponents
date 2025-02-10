import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "non-stackable";
const pathData = "M405 29L159 506c-1 3-5 5-12 5-19 0-38-19-34-30L360 4c2-3 6-5 11-5s11 1 18 5c13 7 20 18 16 25zM136 356l-24 46-95-58c-8-6-12-14-12-24 0-9 4-16 12-22l86-53-91-55c-8-6-12-14-12-23s4-16 12-22L229 22c7-6 15-6 23 0l43 26-23 46-32-20-171 91 126 77-24 46-25-15-72 45zm274-85l91 56c7 5 11 13 11 22s-4 17-11 22L284 494c-7 6-15 6-23 0l-41-25 24-46 26 16 169-92-75-46-76 36 43-84 106-58-57-35 23-45 93 58c8 6 12 13 12 22 0 10-4 18-12 23z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/non-stackable";
export { pathData, ltr, accData };