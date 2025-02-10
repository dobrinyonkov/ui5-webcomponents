import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "expense-report";
const pathData = "M134 0q11 0 18.5 7.5T160 26q0 10-7 17L51 157v329q0 11-7 18.5T26 512t-18.5-7.5T0 486V147q0-10 7-17L115 9q8-9 19-9zm160 352q11 0 18.5 7.5T320 378t-7.5 18-18.5 7h-76q-11 0-18.5-7t-7.5-18 7.5-18.5T218 352h76zm0-96q11 0 18.5 7.5T320 282t-7.5 18-18.5 7h-76q-11 0-18.5-7t-7.5-18 7.5-18.5T218 256h76zm-32 205q11 0 18.5 7t7.5 18-7.5 18.5T262 512H122q-11 0-18.5-7.5T96 486V192q0-10 6-17L245 9q6-9 19-9h190q11 0 18.5 7.5T480 26v108q0 11-7.5 18.5T454 160t-18-7.5-7-18.5V51H276l-19 23v67q0 21-15.5 36T205 192h-50l-8 9v260h115zm170-134q-2 0-5 2.5t-3 6.5 3 6.5 5 2.5h21q25 0 42 18t17 42q0 20-12.5 37.5T467 465v21q0 11-7 18.5t-18 7.5-18.5-7.5T416 486v-19h-17q-11 0-18.5-7.5T373 441t7.5-18 18.5-7h54q8 0 8-11 0-9-8-9h-21q-24 0-41.5-17.5T373 336q0-20 12.5-36.5T416 278v-22q0-11 7.5-18.5T442 230t18 7.5 7 18.5v20h19q11 0 18.5 7.5T512 302t-7.5 18-18.5 7h-54z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/expense-report";
export { pathData, ltr, accData };