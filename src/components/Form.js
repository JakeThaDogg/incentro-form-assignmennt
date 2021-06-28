import { Formik, Form as RawForm } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { EMAIL, INSERTION, NUMBER, REQUIRED } from "../utils/validation";
import Input from "./Input";

const FormContainer = styled(RawForm)`
  display: flex;
  justify-content: center;
`;

const Form = () => {
  return (
    <Formik
      initialValues={SCHEMA.default()}
      validationSchema={SCHEMA}
      onSubmit={(values) => console.log({ values })}
      enableReinitialize
    >
      {({ errors, values }) => (
        <>
          <FormContainer>
            <div>
              <Input
                name="initials"
                label="Initials"
                hasErrors={errors?.initials}
                isRequired
              />

              <Input
                name="lastName"
                label="Last Name"
                hasErrors={errors?.lastName}
                isRequired
              />
              <Input
                name="postCode"
                label="Post Code"
                hasErrors={errors?.postCode}
                isRequired
              />
              <Input
                name="street"
                label="Street"
                isRequired
                hasErrors={errors?.street}
              />
              <Input
                name="city"
                label="City"
                isRequired
                hasErrors={errors?.city}
              />
              <Input
                name="houseNumber"
                label="House Number"
                type="number"
                hasErrors={errors?.houseNumber}
                isRequired
              />
              <Input
                name="email"
                label="Email"
                hasErrors={errors?.email}
                isRequired
              />
              <button type="submit">submit</button>
            </div>
          </FormContainer>
        </>
      )}
    </Formik>
  );
};

const SCHEMA = Yup.object().shape({
  initials: Yup.string().required(REQUIRED).default(""),
  insertion: Yup.string().oneOf(INSERTION).default(""),
  lastName: Yup.string().required(REQUIRED).default(""),
  postCode: Yup.string().length(4).required(REQUIRED).default(""),
  street: Yup.string().required(REQUIRED).default(""),
  city: Yup.string().required(REQUIRED).default(""),
  houseNumber: Yup.number().typeError(NUMBER).required(REQUIRED).default(""),
  email: Yup.string().email(EMAIL).required(REQUIRED).default(""),
});

export default Form;
