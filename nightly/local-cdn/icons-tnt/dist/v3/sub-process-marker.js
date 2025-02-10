import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sub-process-marker";
const pathData = "M485 512H27c-15 0-27-12-27-27V26C0 11 12 0 27 0h458c15 0 27 11 27 26v459c0 15-12 27-27 27zM53 53v405h406V53H53zm283 231h-53v53c0 15-12 27-27 27s-27-12-27-27v-53h-53c-14 0-26-12-26-26s12-26 26-26h53v-53c0-15 12-27 27-27s27 12 27 27v53h53c14 0 26 12 26 26s-12 26-26 26z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/sub-process-marker";
export { pathData, ltr, accData };