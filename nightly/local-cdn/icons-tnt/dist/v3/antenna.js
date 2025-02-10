import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "antenna";
const pathData = "M143 52c-37 20-68 50-87 87-5 9-14 14-23 14-4 0-9-1-12-3-13-7-18-23-12-35C34 68 72 31 118 6c4-2 9-3 13-3 9 0 18 5 23 14 7 12 2 28-11 35zm33 76c-17 11-32 27-43 44-5 8-14 13-22 13-5 0-10-2-14-5-13-7-15-23-8-35 12-19 48-64 73-64 9 0 17 4 22 12 7 12 5 28-8 35zm326 338c8 8 10 19 6 29s-14 16-24 16H327c-9 0-17-5-22-13-5-7-5-17-1-25l41-81c-28 20-60 31-93 31-40 0-80-16-111-46-9-10-10-27 0-37l84-82-25-25c-22 0-42-16-42-39s18-40 40-40c21 0 38 17 38 40v2l25 25 83-84c5-5 11-7 18-7s14 2 20 7c59 60 60 157 2 218 5 1 10 3 14 7zM326 340l18-18c35-35 40-87 17-127L199 357c16 9 34 14 53 14 26 0 53-10 74-31zm44 119h51l-35-34z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/antenna";
export { pathData, ltr, accData };