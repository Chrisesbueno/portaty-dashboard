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
export declare type CustomerShopCreateFormInputValues = {
    userID?: string;
    name?: string;
    email?: string;
    description?: string;
    owner?: string;
};
export declare type CustomerShopCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerShopCreateFormOverridesProps = {
    CustomerShopCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerShopCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerShopCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerShopCreateFormInputValues) => CustomerShopCreateFormInputValues;
    onSuccess?: (fields: CustomerShopCreateFormInputValues) => void;
    onError?: (fields: CustomerShopCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerShopCreateFormInputValues) => CustomerShopCreateFormInputValues;
    onValidate?: CustomerShopCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerShopCreateForm(props: CustomerShopCreateFormProps): React.ReactElement;
