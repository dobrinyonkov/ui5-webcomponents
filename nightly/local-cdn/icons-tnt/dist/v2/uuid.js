import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "uuid";
const pathData = "M15 335Q0 311 0 266V122h37v144q0 28 6 38 6 12 18 12 13 0 20-12 8-13 8-40V122h35v142q0 48-17 69-17 23-46 23-28 0-46-21zm156 0q-15-24-15-69V122h37v144q0 28 6 38 5 12 18 12t20-12q6-10 6-40V122h37v142q0 46-17 69t-46 23q-28 0-46-21zm143-213h36v231h-36V122zm71 0h56q19 0 36 12 16 12 26 38 9 25 9 63 0 37-9 64-9 26-23 40-16 14-33 14h-62V122zm56 191q11 0 18-9 5-5 7.5-11t4.5-15q5-20 5-43 0-18-2.5-32t-8.5-23q-9-18-28-18h-15v151h19z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/uuid";
export { pathData, ltr, accData };