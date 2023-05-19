/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ADCategory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ADCategoryUpdateFormInputValues = {
    name?: string;
    image?: string;
    path?: string;
    abreviation?: string;
    createdBy?: string;
};
export declare type ADCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    path?: ValidationFunction<string>;
    abreviation?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ADCategoryUpdateFormOverridesProps = {
    ADCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    path?: PrimitiveOverrideProps<TextFieldProps>;
    abreviation?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ADCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: ADCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aDCategory?: ADCategory;
    onSubmit?: (fields: ADCategoryUpdateFormInputValues) => ADCategoryUpdateFormInputValues;
    onSuccess?: (fields: ADCategoryUpdateFormInputValues) => void;
    onError?: (fields: ADCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ADCategoryUpdateFormInputValues) => ADCategoryUpdateFormInputValues;
    onValidate?: ADCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ADCategoryUpdateForm(props: ADCategoryUpdateFormProps): React.ReactElement;
