import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "catching-message";
const pathData = "M256 512C115 512 0 397 0 255 0 114 115 0 256 0s256 114 256 255c0 142-115 257-256 257zm0-461C143 51 51 143 51 255c0 114 92 205 205 205s205-91 205-205c0-112-92-204-205-204zm0 383c-99 0-179-80-179-179 0-98 80-178 179-178s179 80 179 178c0 99-80 179-179 179zm0-306c-72 0-128 55-128 127 0 73 56 128 128 128s128-55 128-128c0-72-56-127-128-127zm56 190H200c-15 0-29-12-29-28v-80c0-16 14-29 29-29h112c16 0 29 13 29 29v80c0 16-13 28-29 28zM211 207l43 26c1 1 3 1 3 1l43-27h-89zm45 53c-6 0-11-2-16-5l-43-27v62c0 1 2 3 3 3h112c1 0 3-2 3-3v-63l-44 28c-5 3-10 5-15 5z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/catching-message";
export { pathData, ltr, accData };