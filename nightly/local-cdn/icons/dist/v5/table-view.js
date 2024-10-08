import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "table-view";
const pathData = "M390 32q38 0 64 26t26 64v268q0 38-26 64t-64 26H122q-38 0-64-26t-26-64V122q0-38 26-64t64-26h268zm-89 269v-90h-90v90h90zm-90 51v77h90v-77h-90zM83 301h77v-90H83v90zm218-141V83h-90v77h90zm51 141h77v-90h-77v90zm77-179q0-17-11-28t-28-11h-38v77h77v-38zM122 83q-17 0-28 11t-11 28v38h77V83h-38zM83 390q0 17 11 28t28 11h38v-77H83v38zm307 39q17 0 28-11t11-28v-38h-77v77h38z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/table-view";
export { pathData, ltr, accData };