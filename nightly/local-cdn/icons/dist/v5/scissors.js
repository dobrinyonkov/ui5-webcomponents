import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "scissors";
const pathData = "M505 439q7 7 7 19 0 10-7.5 17.5T486 483t-18-7L285 292l-68 68q7 17 7 40 0 48-32 80t-80 32-80-32-32-80 32-80 80-32q44 0 76 29l61-61-61-61q-32 29-76 29-48 0-80-32T0 112t32-80 80-32 80 32 32 80q0 22-7 40zM371 195q-11 0-18-7.5t-7-17.5q0-12 7-19L468 36q7-7 18-7t18.5 7 7.5 18-7 18L389 188q-7 7-18 7zm-259-22q26 0 43.5-17.5T173 112t-17.5-43.5T112 51 68.5 68.5 51 112t17.5 43.5T112 173zm0 288q26 0 43.5-17.5T173 400t-17.5-43.5T112 339t-43.5 17.5T51 400t17.5 43.5T112 461z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/scissors";
export { pathData, ltr, accData };