import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "incoming-call";
const pathData = "M410 405q5-5 5-10t-5-10q-16-17-64-65-2-2-4.5-3.5T336 315q-6 0-10 6l-56 56-22-15q-38-28-70.5-60T118 232l-15-22 31-31q7-6 13-12.5t13-12.5q5-5 5-10 0-4-4-8-17-19-33.5-35.5T94 68q-6-4-8-4-6 0-10 6-2 2-4 3.5T68 77q-8 9-17 17-11 11-15 22.5T32 140q0 6 1 12 3 32 21 71 51 105 156 176 32 22 60 33.5t56 15.5h13q29 0 48-19 4-5 7.5-9t8.5-8zm-42-107q17 16 65 64 15 15 15 32l-.5 9.5L433 428q-6 5-11.5 10.5T411 450q-15 17-33.5 23.5T339 480h-8q-4 0-9-1-36-4-68-18.5T192 426q-54-37-96-83.5T25 237q-10-20-16-40.5T1 154q-1-6-1-13 0-17 5-35.5T30 70q6-5 11.5-11T53 47q15-15 33-15 15 0 30 13l34 34q17 17 34 35 13 13 13 29 0 1-.5 10T182 176q-9 10-37 38 49 72 121 121 19-18 37-37 17-15 33-15 18 0 32 15zM358 5q5-5 11-5t11 5 5 11.5-5 11.5l-75 68h191q16 0 16 16t-16 16H305l75 69q5 5 5 11.5t-5 11.5-11 5-11-5l-92-86q-9-10-9-23t9-23z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/incoming-call";
export { pathData, ltr, accData };