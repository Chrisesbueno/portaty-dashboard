/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CustomerShop } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerShopUpdateFormInputValues = {
    userID?: string;
    name?: string;
    email?: string;
    description?: string;
    owner?: string;
};
export declare type CustomerShopUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerShopUpdateFormOverridesProps = {
    CustomerShopUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerShopUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerShopUpdateFormOverridesProps | undefined | null;
} & {
    userID?: string;
    customerShop?: CustomerShop;
    onSubmit?: (fields: CustomerShopUpdateFormInputValues) => CustomerShopUpdateFormInputValues;
    onSuccess?: (fields: CustomerShopUpdateFormInputValues) => void;
    onError?: (fields: CustomerShopUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerShopUpdateFormInputValues) => CustomerShopUpdateFormInputValues;
    onValidate?: CustomerShopUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerShopUpdateForm(props: CustomerShopUpdateFormProps): React.ReactElement;
