/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ADProduct } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ADProductUpdateFormInputValues = {
    name?: string;
    images?: string[];
    paths?: string[];
    description?: string;
    suggestedPrice?: number;
    createdBy?: string;
};
export declare type ADProductUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    paths?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    suggestedPrice?: ValidationFunction<number>;
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ADProductUpdateFormOverridesProps = {
    ADProductUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    paths?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    suggestedPrice?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ADProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: ADProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aDProduct?: ADProduct;
    onSubmit?: (fields: ADProductUpdateFormInputValues) => ADProductUpdateFormInputValues;
    onSuccess?: (fields: ADProductUpdateFormInputValues) => void;
    onError?: (fields: ADProductUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ADProductUpdateFormInputValues) => ADProductUpdateFormInputValues;
    onValidate?: ADProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ADProductUpdateForm(props: ADProductUpdateFormProps): React.ReactElement;
