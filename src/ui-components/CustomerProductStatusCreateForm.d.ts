/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerProductStatusCreateFormInputValues = {
    status?: string;
    owner?: string;
};
export declare type CustomerProductStatusCreateFormValidationValues = {
    status?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerProductStatusCreateFormOverridesProps = {
    CustomerProductStatusCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerProductStatusCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerProductStatusCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerProductStatusCreateFormInputValues) => CustomerProductStatusCreateFormInputValues;
    onSuccess?: (fields: CustomerProductStatusCreateFormInputValues) => void;
    onError?: (fields: CustomerProductStatusCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerProductStatusCreateFormInputValues) => CustomerProductStatusCreateFormInputValues;
    onValidate?: CustomerProductStatusCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerProductStatusCreateForm(props: CustomerProductStatusCreateFormProps): React.ReactElement;
