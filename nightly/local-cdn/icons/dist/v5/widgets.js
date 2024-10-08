import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "widgets";
const pathData = "M198 32q11 0 18.5 7.5T224 58v150q2 20-13 34t-35 14-34-14-14-34q0-19 13-32.5t32-15.5V90l-77 20v98q2 20-13 34t-35 14-34-14-14-34q0-19 13-32.5T45 160V90q0-20 19-25l128-32q2-1 6-1zm295 256q8 0 13.5 6t5.5 14-6 14l-46 47 27 107q0 2 .5 2.5t.5 1.5q0 6-5 11l-3 4q-4 4-11 4-9 0-13-7l-44-74-39 40 7 35q0 1 .5 1.5t.5 2.5q0 6-4.5 10.5T365 512q-8 0-13-8l-18-35-34-18q-8-5-8-14 0-6 4.5-10.5T307 422h3l35 8 39-40-72-45q-7-4-7-14 0-6 4-10l3-4q4-4 11-4h4l106 28 46-47q6-6 14-6zm-43-186q26 0 44 18t18 43q0 23-15.5 40.5T458 224v6q0 11-7.5 18.5T432 256t-18.5-7.5T406 230v-6h-28q-11 0-18.5-7.5T352 198t7.5-18 18.5-7h72q11 0 11-10 0-9-11-9h-36q-26 0-44-18t-18-43q0-23 15.5-40.5T406 32v-6q0-11 7.5-18.5T432 0t18.5 7.5T458 26v6h28q11 0 18.5 7.5T512 58t-7.5 18-18.5 7h-72q-11 0-11 10 0 9 11 9h36zM178 379q14 2 14 16 0 7-4 11l-35 38 8 52q0 16-16 16-2 0-8-2l-41-23-41 23q-6 2-8 2-16 0-16-16l8-52-35-38q-4-4-4-11 0-14 14-16l48-7 19-42q4-10 15-10t15 10l19 42z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/widgets";
export { pathData, ltr, accData };