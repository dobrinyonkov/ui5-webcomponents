import { camelToKebabCase, kebabToCamelCase } from "./util/StringHelper.js";
import { getSlottedNodes } from "./util/SlotsHelper.js";
import { getEffectiveScopingSuffixForTag } from "./CustomElementsScopeUtils.js";
/**
 * @class
 * @public
 */
class UI5ElementMetadata {
    constructor(metadata) {
        this.metadata = metadata;
    }
    getInitialState() {
        if (Object.prototype.hasOwnProperty.call(this, "_initialState")) {
            return this._initialState;
        }
        const initialState = {};
        const slotsAreManaged = this.slotsAreManaged();
        // Initialize slots
        if (slotsAreManaged) {
            const slots = this.getSlots();
            for (const [slotName, slotData] of Object.entries(slots)) { // eslint-disable-line
                const propertyName = slotData.propertyName || slotName;
                initialState[propertyName] = [];
                initialState[kebabToCamelCase(propertyName)] = initialState[propertyName];
            }
        }
        this._initialState = initialState;
        return initialState;
    }
    /**
     * Validates the slot's value and returns it if correct
     * or throws an exception if not.
     * **Note:** Only intended for use by UI5Element.js
     * @public
     */
    static validateSlotValue(value, slotData) {
        return validateSingleSlot(value, slotData);
    }
    /**
     * Returns the tag of the UI5 Element without the scope
     * @public
     */
    getPureTag() {
        return this.metadata.tag || "";
    }
    /**
     * Returns the tag of the UI5 Element
     * @public
     */
    getTag() {
        const pureTag = this.metadata.tag;
        if (!pureTag) {
            return "";
        }
        const suffix = getEffectiveScopingSuffixForTag(pureTag);
        if (!suffix) {
            return pureTag;
        }
        return `${pureTag}-${suffix}`;
    }
    /**
     * Determines whether a property should have an attribute counterpart
     * @public
     * @param propName
     */
    hasAttribute(propName) {
        const propData = this.getProperties()[propName];
        return propData.type !== Object && propData.type !== Array && !propData.noAttribute;
    }
    /**
     * Returns an array with the properties of the UI5 Element (in camelCase)
     * @public
     */
    getPropertiesList() {
        return Object.keys(this.getProperties());
    }
    /**
     * Returns an array with the attributes of the UI5 Element (in kebab-case)
     * @public
     */
    getAttributesList() {
        return this.getPropertiesList().filter(this.hasAttribute.bind(this)).map(camelToKebabCase);
    }
    /**
     * Determines whether this UI5 Element has a default slot of type Node, therefore can slot text
     */
    canSlotText() {
        return (this.getSlots().default)?.type === Node;
    }
    /**
     * Determines whether this UI5 Element supports any slots
     * @public
     */
    hasSlots() {
        return !!Object.entries(this.getSlots()).length;
    }
    /**
     * Determines whether this UI5 Element supports any slots with "individualSlots: true"
     * @public
     */
    hasIndividualSlots() {
        return this.slotsAreManaged() && Object.values(this.getSlots()).some(slotData => slotData.individualSlots);
    }
    /**
     * Determines whether this UI5 Element needs to invalidate if children are added/removed/changed
     * @public
     */
    slotsAreManaged() {
        return !!this.metadata.managedSlots;
    }
    /**
     * Determines whether this control supports F6 fast navigation
     * @public
     */
    supportsF6FastNavigation() {
        return !!this.metadata.fastNavigation;
    }
    /**
     * Returns an object with key-value pairs of properties and their metadata definitions
     * @public
     */
    getProperties() {
        if (!this.metadata.properties) {
            this.metadata.properties = {};
        }
        return this.metadata.properties;
    }
    /**
     * Returns an object with key-value pairs of events and their metadata definitions
     * @public
     */
    getEvents() {
        if (!this.metadata.events) {
            this.metadata.events = {};
        }
        return this.metadata.events;
    }
    /**
     * Returns an object with key-value pairs of slots and their metadata definitions
     * @public
     */
    getSlots() {
        if (!this.metadata.slots) {
            this.metadata.slots = {};
        }
        return this.metadata.slots;
    }
    /**
     * Determines whether this UI5 Element has any translatable texts (needs to be invalidated upon language change)
     */
    isLanguageAware() {
        return !!this.metadata.languageAware;
    }
    /**
     * Determines whether this UI5 Element has any theme dependant carachteristics.
     */
    isThemeAware() {
        return !!this.metadata.themeAware;
    }
    /**
     * Determines whether this UI5 Element needs CLDR assets to be fetched to work correctly
     */
    needsCLDR() {
        return !!this.metadata.cldr;
    }
    getShadowRootOptions() {
        return this.metadata.shadowRootOptions || {};
    }
    /**
     * Determines whether this UI5 Element has any theme dependant carachteristics.
     */
    isFormAssociated() {
        return !!this.metadata.formAssociated;
    }
    /**
     * Matches a changed entity (property/slot) with the given name against the "invalidateOnChildChange" configuration
     * and determines whether this should cause and invalidation
     *
     * @param slotName the name of the slot in which a child was changed
     * @param type the type of change in the child: "property" or "slot"
     * @param name the name of the property/slot that changed
     */
    shouldInvalidateOnChildChange(slotName, type, name) {
        const config = this.getSlots()[slotName].invalidateOnChildChange;
        // invalidateOnChildChange was not set in the slot metadata - by default child changes do not affect the component
        if (config === undefined) {
            return false;
        }
        // The simple format was used: invalidateOnChildChange: true/false;
        if (typeof config === "boolean") {
            return config;
        }
        // The complex format was used: invalidateOnChildChange: { properties, slots }
        if (typeof config === "object") {
            // A property was changed
            if (type === "property") {
                // The config object does not have a properties field
                if (config.properties === undefined) {
                    return false;
                }
                // The config object has the short format: properties: true/false
                if (typeof config.properties === "boolean") {
                    return config.properties;
                }
                // The config object has the complex format: properties: [...]
                if (Array.isArray(config.properties)) {
                    return config.properties.includes(name);
                }
                throw new Error("Wrong format for invalidateOnChildChange.properties: boolean or array is expected");
            }
            // A slot was changed
            if (type === "slot") {
                // The config object does not have a slots field
                if (config.slots === undefined) {
                    return false;
                }
                // The config object has the short format: slots: true/false
                if (typeof config.slots === "boolean") {
                    return config.slots;
                }
                // The config object has the complex format: slots: [...]
                if (Array.isArray(config.slots)) {
                    return config.slots.includes(name);
                }
                throw new Error("Wrong format for invalidateOnChildChange.slots: boolean or array is expected");
            }
        }
        throw new Error("Wrong format for invalidateOnChildChange: boolean or object is expected");
    }
    getI18n() {
        if (!this.metadata.i18n) {
            this.metadata.i18n = {};
        }
        return this.metadata.i18n;
    }
}
const validateSingleSlot = (value, slotData) => {
    value && getSlottedNodes(value).forEach(el => {
        if (!(el instanceof slotData.type)) {
            throw new Error(`The element is not of type ${slotData.type.toString()}`);
        }
    });
    return value;
};
export default UI5ElementMetadata;
//# sourceMappingURL=UI5ElementMetadata.js.map