/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PaymentStripe } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PaymentStripeUpdateForm(props) {
  const {
    id: idProp,
    paymentStripe: paymentStripeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    paymentStripeID: "",
    metadata: "",
  };
  const [paymentStripeID, setPaymentStripeID] = React.useState(
    initialValues.paymentStripeID
  );
  const [metadata, setMetadata] = React.useState(initialValues.metadata);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = paymentStripeRecord
      ? { ...initialValues, ...paymentStripeRecord }
      : initialValues;
    setPaymentStripeID(cleanValues.paymentStripeID);
    setMetadata(cleanValues.metadata);
    setErrors({});
  };
  const [paymentStripeRecord, setPaymentStripeRecord] = React.useState(
    paymentStripeModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PaymentStripe, idProp)
        : paymentStripeModelProp;
      setPaymentStripeRecord(record);
    };
    queryData();
  }, [idProp, paymentStripeModelProp]);
  React.useEffect(resetStateValues, [paymentStripeRecord]);
  const validations = {
    paymentStripeID: [{ type: "Required" }],
    metadata: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          paymentStripeID,
          metadata,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PaymentStripe.copyOf(paymentStripeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PaymentStripeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Payment stripe id"
        isRequired={true}
        isReadOnly={false}
        value={paymentStripeID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paymentStripeID: value,
              metadata,
            };
            const result = onChange(modelFields);
            value = result?.paymentStripeID ?? value;
          }
          if (errors.paymentStripeID?.hasError) {
            runValidationTasks("paymentStripeID", value);
          }
          setPaymentStripeID(value);
        }}
        onBlur={() => runValidationTasks("paymentStripeID", paymentStripeID)}
        errorMessage={errors.paymentStripeID?.errorMessage}
        hasError={errors.paymentStripeID?.hasError}
        {...getOverrideProps(overrides, "paymentStripeID")}
      ></TextField>
      <TextField
        label="Metadata"
        isRequired={false}
        isReadOnly={false}
        value={metadata}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              paymentStripeID,
              metadata: value,
            };
            const result = onChange(modelFields);
            value = result?.metadata ?? value;
          }
          if (errors.metadata?.hasError) {
            runValidationTasks("metadata", value);
          }
          setMetadata(value);
        }}
        onBlur={() => runValidationTasks("metadata", metadata)}
        errorMessage={errors.metadata?.errorMessage}
        hasError={errors.metadata?.hasError}
        {...getOverrideProps(overrides, "metadata")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || paymentStripeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || paymentStripeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
