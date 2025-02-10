import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "manage-charging-stations";
const pathData = "M9.5 410V137c0-40 31-69 70-69h91c37 0 69 29 69 69v160h70c12 0 21 9 21 22v91c0 7 2 12 7 15 3 3 8 4 15 4 9 0 14-1 17-4 5-3 7-8 7-15V294c-47-4-83-43-83-94v-28c0-7 2-13 7-16 5-5 10-7 16-7h25V90c0-13 11-22 24-22 15 0 23 7 23 22v59h20V90c0-15 8-22 23-22 12 0 22 9 22 22v59h25c7 0 13 2 17 7 5 4 7 9 7 16v28c0 51-34 87-81 94v116c0 40-29 67-69 67-15 0-31-5-43-16-16-13-24-30-24-51v-67h-46v67c0 39-32 70-69 70h-91c-39 0-70-31-70-70zm183-160h-136v160c0 15 8 23 23 23h91c15 0 22-8 22-23V250zm-113-137c-15 0-23 11-23 24v67h136v-67c0-13-9-24-22-24h-91zm2 236c-3-4-4-10 0-15l30-59c2-5 8-8 12-8 2 0 4 0 5 1 9 5 12 12 8 21l-20 37h36c5 0 10 3 14 8 2 5 2 10 0 15l-30 60c-3 6-7 9-12 9-2 0-5 0-8-2-8-4-12-12-5-20l17-39h-35c-5 0-9-3-12-8zm257-154v5c0 27 19 47 46 47h27c25 0 45-20 45-47v-5h-118z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/manage-charging-stations";
export { pathData, ltr, accData };