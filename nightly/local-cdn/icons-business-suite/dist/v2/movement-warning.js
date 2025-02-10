import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "movement-warning";
const pathData = "M182.5 95l-53 53c-5 5-10 7-16 7-7 0-12-2-17-7-8-9-8-22 0-31l18-16h-59c-12 0-23-10-23-22 0-13 11-23 23-23h59l-18-16c-8-8-8-25 0-33 9-9 25-9 33 2l53 53c5 5 7 10 7 17 0 6-2 11-7 16zm145 4l132 131c13 15 20 31 20 50s-7 35-20 48l-132 132c-13 13-29 20-48 20s-35-7-50-20l-131-132c-27-27-27-71 0-98l131-131c27-27 73-27 98 0zm-65 32l-132 131c-4 4-8 11-8 18 0 5 3 11 8 16l132 132c9 9 24 9 33 0l133-132c11-9 11-23 0-34l-133-131c-9-11-24-11-33 0zm-6 131v-67c0-13 10-21 23-21 15 0 22 7 22 21v67c0 15-7 23-22 23-13 0-23-8-23-23zm23 57c19 0 32 13 32 32s-13 34-32 34-33-15-33-34 14-32 33-32z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/movement-warning";
export { pathData, ltr, accData };