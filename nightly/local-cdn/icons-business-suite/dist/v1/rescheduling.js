import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "rescheduling";
const pathData = "M99.902 99.902L199.805 0v49.951l-24.976 24.976h162.342L312.195 49.95V0l99.903 99.902-99.903 99.903v-49.951l24.976-24.976H174.829l24.976 24.976v49.95zM512 399.61h-99.902v-99.903H512v99.903zm-274.732 0h-99.902v-99.903h99.902v99.903zm137.366 0h-99.902v-99.903h99.902v99.903zM0 299.707h99.902v99.903H0v-99.903zm437.073 24.976v49.951h49.951v-49.951h-49.95zm-362.146 0H24.976v49.951h49.95v-49.951z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/rescheduling";
export { pathData, ltr, accData };