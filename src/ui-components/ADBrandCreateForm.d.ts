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
export declare type ADBrandCreateFormInputValues = {
    name?: string;
    image?: string;
    path?: string;
    abreviation?: string;
    createdBy?: string;
};
export declare type ADBrandCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    path?: ValidationFunction<string>;
    abreviation?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ADBrandCreateFormOverridesProps = {
    ADBrandCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    path?: PrimitiveOverrideProps<TextFieldProps>;
    abreviation?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ADBrandCreateFormProps = React.PropsWithChildren<{
    overrides?: ADBrandCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ADBrandCreateFormInputValues) => ADBrandCreateFormInputValues;
    onSuccess?: (fields: ADBrandCreateFormInputValues) => void;
    onError?: (fields: ADBrandCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ADBrandCreateFormInputValues) => ADBrandCreateFormInputValues;
    onValidate?: ADBrandCreateFormValidationValues;
} & React.CSSProperties>;
export default function ADBrandCreateForm(props: ADBrandCreateFormProps): React.ReactElement;
