import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "product-view";
const pathData = "M478.125 396c12 4 18 17 14 29-11 32-40 55-73 55h-324c-27 0-50-14-65-37-15-27-16-54-3-81l162-318c13-27 39-42 68-42 31 0 55 15 70 42l24 49c5 12 1 25-11 32s-27 1-32-11l-24-48c-8-15-22-16-27-16s-19 1-27 16l-160 318c-5 12-5 23 1 33 3 4 9 15 24 15h324c16 0 25-12 28-21 4-12 19-19 31-15zm-310-131c43-52 100-82 161-82 63 0 119 30 162 82 9 9 9 19 0 29-43 52-99 82-162 82-61 0-118-30-161-82-7-10-7-20 0-29zm181-32c19 8 31 24 31 47 0 21-12 38-31 46 35-4 64-21 91-46-27-27-56-43-91-47zm-131 47c27 25 58 42 91 46-17-8-30-25-30-46 0-23 13-39 30-47-33 4-64 20-91 47z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/product-view";
export { pathData, ltr, accData };