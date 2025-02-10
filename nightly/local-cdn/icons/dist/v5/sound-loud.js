import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sound-loud";
const pathData = "M248 69q5-5 14-5 11 0 18.5 7.5T288 90v332q0 11-7.5 18.5T262 448q-7 0-14-5l-128-91H26q-11 0-18.5-7.5T0 326V186q0-11 7.5-18.5T26 160h94zm92 50q17 0 30.5 16.5t24 39 16 45.5 5.5 36-5.5 36.5-16 46-24 39T340 394q-11 0-18.5-7t-7.5-17q0-14 15-27 15-14 25.5-37.5T365 256t-10.5-49.5T329 169t-15-27q0-10 7.5-16.5T340 119zm87-56q40 38 62.5 88T512 256t-22.5 105-62.5 88q-9 7-17 7-11 0-18.5-7.5T384 430t8-19q32-30 50.5-70t18.5-85-18.5-85-50.5-70q-8-8-8-19t7.5-18.5T410 56q8 0 17 7zm-190 76l-94 67q-5 5-15 5H51v90h77q10 0 15 5l94 67V139z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/sound-loud";
export { pathData, ltr, accData };