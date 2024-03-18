import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "network";
const pathData = "M256 0q53 0 100 20t81.5 55 54.5 81.5 20 99.5q0 45-14.5 85.5T457 414l-4 7h-1q-35 42-85.5 66.5T256 512q-53 0-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm-32 54q-70 11-117 61 62 42 135 59 2-3 7-8-11-32-16.5-60T224 56v-2zM86 148q16 54 43 102t65 84q13-8 26-8 25 0 40 20 12-4 23.5-9t23.5-10q0-9 .5-16t5.5-15q-7-11-13.5-20.5T288 255q-20 0-36.5-11T233 211q-78-21-147-63zm7 228q19 0 38.5-2t38.5-5q0-3 1-5-38-34-65.5-77.5T61 194q-5 15-7.5 30T51 256q0 34 10.5 64T90 376h3zm163 85q20 0 39.5-4t37.5-11q-43-9-83-27-13 10-30 10-14 0-24.5-6T178 407q-14 2-27 3.5t-24 2.5h-2q26 23 59.5 35.5T256 461zm132-48q11-9 20-20-8-6-15.5-12.5T377 368q-5 2-9.5 3t-9.5 1q-17 0-32-12-14 7-27.5 12.5T271 383v3q26 12 55 19t62 8zm43-51q28-45 30-103-13 14-26 26.5T408 309q1 4 1 11 0 13-4 21 6 5 12.5 10.5T431 362zm24-157q-66 19-124 18-3 9-9 15 9 16 21 33 10-2 15-2 15 0 28 8 18-15 35.5-32.5T455 205zm-124-20q26 0 54-3.5t57-12.5q-24-51-72-83.5T262 51v1q2 20 7.5 45.5T285 153q16 0 28.5 9t17.5 23z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/network";
export { pathData, ltr, accData };