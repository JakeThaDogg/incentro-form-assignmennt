import { Formik, Form as RawForm } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { EMAIL, INSERTION, NUMBER, REQUIRED } from "../utils/validation";
import Input from "./Input";
import SearchInput from "./SearchInput";
import { sendForm } from "../api/index";

const FormContainer = styled(RawForm)`
  display: flex;
  justify-content: center;
  padding: 64px;
  background-color: #7b7cac;
  width: 33%;
  margin: 0 auto;
  border-radius: 32px;
  box-shadow: 2px 3px 6px #2b2c41;
`;

const SubmitButton = styled.button`
  width: 124px;
  height: 48px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.65);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const Form = () => (
  <Formik
    initialValues={SCHEMA.default()}
    validationSchema={SCHEMA}
    onSubmit={(values) => sendForm({ values })}
    enableReinitialize
  >
    {({ errors, setFieldValue }) => (
      <FormContainer>
        <div>
          <Input
            name="initials"
            label="Initials"
            hasErrors={errors?.initials}
            isRequired
          />

          <Input
            name="insertion"
            label="Insertion"
            hasErrors={errors?.insertion}
            isRequired
          />

          <Input
            name="lastName"
            label="Last Name"
            hasErrors={errors?.lastName}
            isRequired
          />
          <SearchInput
            name="street"
            label="Street"
            isRequired
            setValue={setFieldValue}
            hasErrors={errors?.street}
          />
          <Input
            name="postCode"
            label="Post Code"
            hasErrors={errors?.postCode}
            isRequired
          />
          <Input name="city" label="City" isRequired hasErrors={errors?.city} />
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
          <SubmitButton type="submit">Submit</SubmitButton>
        </div>
      </FormContainer>
    )}
  </Formik>
);

const SCHEMA = Yup.object().shape({
  initials: Yup.string().required(REQUIRED).default(""),
  insertion: Yup.string().oneOf(INSERTION).default(""),
  lastName: Yup.string().required(REQUIRED).default(""),
  postCode: Yup.string()
    .length(4, "Must be exactly 4 digits")
    .required(REQUIRED)
    .default(""),
  street: Yup.string().required(REQUIRED).default(""),
  city: Yup.string().required(REQUIRED).default(""),
  houseNumber: Yup.number().typeError(NUMBER).required(REQUIRED).default(""),
  email: Yup.string().email(EMAIL).required(REQUIRED).default(""),
});

export default Form;
