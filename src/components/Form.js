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
      //validationSchema={SCHEMA}
      onSubmit={() => console.log("coucou")}
      enableReinitialize
    >
      {(formikBag) => (
        <>
          <FormContainer>
            <div>
              <Input name="initials" label="Initials" isRequired />

              <Input name="lastName" label="Last Name" isRequired />
              <Input name="postCode" label="Post Code" isRequired />
              <Input name="street" label="Street" isRequired />
              <Input name="city" label="City" isRequired />
              <Input
                name="houseNumber"
                label="House Number"
                type="number"
                isRequired
              />
              <Input name="Email" label="email" isRequired />
              <button>submit</button>
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
