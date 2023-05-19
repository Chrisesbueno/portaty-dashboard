/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ADBrand } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ADBrandUpdateFormInputValues = {
    name?: string;
    image?: string;
    path?: string;
    abreviation?: string;
    createdBy?: string;
};
export declare type ADBrandUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    path?: ValidationFunction<string>;
    abreviation?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ADBrandUpdateFormOverridesProps = {
    ADBrandUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    path?: PrimitiveOverrideProps<TextFieldProps>;
    abreviation?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ADBrandUpdateFormProps = React.PropsWithChildren<{
    overrides?: ADBrandUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aDBrand?: ADBrand;
    onSubmit?: (fields: ADBrandUpdateFormInputValues) => ADBrandUpdateFormInputValues;
    onSuccess?: (fields: ADBrandUpdateFormInputValues) => void;
    onError?: (fields: ADBrandUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ADBrandUpdateFormInputValues) => ADBrandUpdateFormInputValues;
    onValidate?: ADBrandUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ADBrandUpdateForm(props: ADBrandUpdateFormProps): React.ReactElement;
