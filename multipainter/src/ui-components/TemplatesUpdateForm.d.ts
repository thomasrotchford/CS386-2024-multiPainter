/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TemplatesUpdateFormInputValues = {
    timeCreated?: string;
    numGrid?: number[];
    colorGrid?: string[];
    artName?: string;
    creator?: string;
    creationMessage?: string;
    tags?: string;
};
export declare type TemplatesUpdateFormValidationValues = {
    timeCreated?: ValidationFunction<string>;
    numGrid?: ValidationFunction<number>;
    colorGrid?: ValidationFunction<string>;
    artName?: ValidationFunction<string>;
    creator?: ValidationFunction<string>;
    creationMessage?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TemplatesUpdateFormOverridesProps = {
    TemplatesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timeCreated?: PrimitiveOverrideProps<TextFieldProps>;
    numGrid?: PrimitiveOverrideProps<TextFieldProps>;
    colorGrid?: PrimitiveOverrideProps<TextFieldProps>;
    artName?: PrimitiveOverrideProps<TextFieldProps>;
    creator?: PrimitiveOverrideProps<TextFieldProps>;
    creationMessage?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TemplatesUpdateFormProps = React.PropsWithChildren<{
    overrides?: TemplatesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    templates?: any;
    onSubmit?: (fields: TemplatesUpdateFormInputValues) => TemplatesUpdateFormInputValues;
    onSuccess?: (fields: TemplatesUpdateFormInputValues) => void;
    onError?: (fields: TemplatesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TemplatesUpdateFormInputValues) => TemplatesUpdateFormInputValues;
    onValidate?: TemplatesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TemplatesUpdateForm(props: TemplatesUpdateFormProps): React.ReactElement;
