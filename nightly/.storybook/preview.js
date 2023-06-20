import "@ui5/webcomponents-fiori/bundle.esm.js";
import getEffectiveContentDensity from "@ui5/webcomponents-base/dist/util/getEffectiveContentDensity.js";
import customElements from "./custom-elements.json";
import { setCustomElementsManifest } from "@storybook/web-components";
import { useOptions, themes } from "./useOptions";
import { enhanceArgTypes } from "./args/enhanceArgTypes";
import { htmlTransformation } from "./addons/html/HTMLTransformation";
if (customElements?.modules) {
    setCustomElementsManifest(customElements);
}
export const parameters = {
    html: {
        removeComments: true,
        root: "#root-inner",
        transform: (code) => {
            // script tag (if any) is not inside the #root-inner element - we add it to the final result
            const script = document.querySelector('#scripts-root');
            const html = htmlTransformation.transform(code);
            return html + script?.innerHTML;
        }
    },
    actions: { argTypesRegex: "^ui5-[a-z].*" },
    docs: {
        iframeHeight: "300px",
        transformSource: (source // this is called before rendering of the "code" inside the preview of the stories
        ) => source
            // Clean empty boolean attribute values
            .replace(/=\"\"/g, "")
            // Clean empty lines (empty slots)
            .replace(/^\s*[\r\n]/gm, ""),
    },
    options: {
        storySort: {
            order: [
                "Docs",
                "Main",
                "Fiori"
            ],
        },
    },
};
export const globalTypes = {
    theme: {
        name: "Toggle theme",
        description: "Global theme for components",
        defaultValue: "Morning Horizon",
        toolbar: {
            icon: "",
            items: Object.keys(themes),
            showName: true,
            dynamicTitle: true,
        },
    },
    rtl: {
        name: "Direction",
        description: "Global rtl mode for components",
        defaultValue: window["sap-ui-webcomponents-bundle"].configuration.getRTL(),
        toolbar: {
            icon: "",
            items: ["LTR", "RTL"],
            showName: true,
            dynamicTitle: true,
        },
    },
    density: {
        name: "Content Density",
        description: "Global content density mode for components",
        defaultValue: getEffectiveContentDensity(document.body) === "cozy" ? "Cozy" : "Compact",
        toolbar: {
            icon: "",
            items: ["Cozy", "Compact"],
            showName: true,
            dynamicTitle: true,
        },
    },
};
export const decorators = [useOptions];
export const argTypesEnhancers = [enhanceArgTypes];
//# sourceMappingURL=preview.js.map