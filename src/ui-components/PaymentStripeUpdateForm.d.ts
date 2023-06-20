/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PaymentStripe } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PaymentStripeUpdateFormInputValues = {
    paymentStripeID?: string;
    metadata?: string;
};
export declare type PaymentStripeUpdateFormValidationValues = {
    paymentStripeID?: ValidationFunction<string>;
    metadata?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentStripeUpdateFormOverridesProps = {
    PaymentStripeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    paymentStripeID?: PrimitiveOverrideProps<TextFieldProps>;
    metadata?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentStripeUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentStripeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    paymentStripe?: PaymentStripe;
    onSubmit?: (fields: PaymentStripeUpdateFormInputValues) => PaymentStripeUpdateFormInputValues;
    onSuccess?: (fields: PaymentStripeUpdateFormInputValues) => void;
    onError?: (fields: PaymentStripeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentStripeUpdateFormInputValues) => PaymentStripeUpdateFormInputValues;
    onValidate?: PaymentStripeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentStripeUpdateForm(props: PaymentStripeUpdateFormProps): React.ReactElement;
