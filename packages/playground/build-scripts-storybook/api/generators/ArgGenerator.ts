import { IApiReader, IComponentParsedAPI } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";

export interface IGenerator {
    isMatch(dataParsed: IComponentParsedAPI): boolean;
    generate(dataParsed: IComponentParsedAPI, accumulator?: IArgType, apiReader?: IApiReader): IArgType;
}