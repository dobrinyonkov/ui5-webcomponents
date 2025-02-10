import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "gate";
const pathData = "M6 386h32V105c0-35 27-63 62-63h31c23 0 43 11 54 30h321v93H194v221h31v94H6v-94zM116 73c-27 0-47 20-47 47 0 25 20 46 47 46s47-21 47-46c0-27-20-47-47-47zm86 77h63l23-63h-63zm117-63l-23 63h63l22-63h-62zm94 0l-23 63h62l23-63h-62z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/gate";
export { pathData, ltr, accData };