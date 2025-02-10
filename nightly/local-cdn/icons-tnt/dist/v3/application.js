import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "application";
const pathData = "M429 512H83c-46 0-83-38-83-84V83C0 37 37 0 83 0h346c46 0 83 37 83 83v345c0 46-37 84-83 84zm0-461H83c-17 0-32 14-32 32v70h410V83c0-18-15-32-32-32zm-35 77h-61c-14 0-26-12-26-26s12-25 26-25h61c14 0 26 11 26 25s-12 26-26 26zm67 76H51v224c0 18 15 32 32 32h346c17 0 32-14 32-32V204zM248 403H123c-22 0-40-15-40-35v-92c0-20 18-35 40-35h125c23 0 41 15 41 35v92c0 20-18 35-41 35zM122 280v85h128v-85c0-1-1-1-2-1H123z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/application";
export { pathData, ltr, accData };