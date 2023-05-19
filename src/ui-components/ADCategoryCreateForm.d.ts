/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ADCategoryCreateFormInputValues = {
    name?: string;
    image?: string;
    path?: string;
    abreviation?: string;
    createdBy?: string;
};
export declare type ADCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    path?: ValidationFunction<string>;
    abreviation?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ADCategoryCreateFormOverridesProps = {
    ADCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    path?: PrimitiveOverrideProps<TextFieldProps>;
    abreviation?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ADCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: ADCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ADCategoryCreateFormInputValues) => ADCategoryCreateFormInputValues;
    onSuccess?: (fields: ADCategoryCreateFormInputValues) => void;
    onError?: (fields: ADCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ADCategoryCreateFormInputValues) => ADCategoryCreateFormInputValues;
    onValidate?: ADCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function ADCategoryCreateForm(props: ADCategoryCreateFormProps): React.ReactElement;
