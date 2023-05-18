import type {
    IApiReader,
    IComponentAPI,
    IComponentData,
    IComponentUI5CustomData,
} from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";

export interface IGenerator {
    fieldName: string;
    generate(componentName: string, apiReader: IApiReader): IArgType;
}

export class ArgGenerator implements IGenerator {
    public fieldName: string = "properties";

    protected extractData(componentApi: IComponentData): IComponentAPI[] {
        return componentApi[this.fieldName as keyof IComponentData] as IComponentAPI[];
    }

    protected parseData?(
        data: any[],
        apiReader: IApiReader
    ): Record<string, IArgType>;

    public generate(componentName: string, apiReader: IApiReader): IArgType {
        if (!this.parseData || !this.extractData) {
            throw new Error("parseData and extractData must be implemented");
        }

        let result = {};
        const componentApi = apiReader.findApi(componentName);
        const extendsComponent = componentApi.extends;

        result = this.parseData(this.extractData(componentApi), apiReader);

        if (extendsComponent && extendsComponent !== "HTMLElement") {
            const parentSlots = this.generate(extendsComponent, apiReader);
            result = { ...parentSlots, ...result };
        }

        return result;
    }

    protected parseUI5CustomData(
        data: IComponentUI5CustomData
    ): Record<string, any> {
        const result: Record<string, any> = {};

        if (data.parameters) {
            result.parameters = data.parameters;
        }

        if (data.returnValue) {
            result.returnValue = data.returnValue;
        }

        return result;
    }
}
