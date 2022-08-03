import React from 'react';
import { Center } from '../components/Center';
import { Formik, Form, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from '../components/FormInput';
import { Button } from '../components/Button';
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from 'reactstrap';

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Campo email vazio").email("Email invalido")
});

interface FormTypes {
  email: string;
}

const initialValues: FormTypes = {
  email: "",
};

export function Register() {
  const navigate = useNavigate();

  function handleSubmit(values: FormTypes) {
    alert(values.email);
    navigate('list');
  }

  return (
    <Center>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps: FormikProps<FormTypes>) => {
            const { errors, touched, values } = formikProps;

            return (
              <Form className="d-flex flex-column">
                <Input
                  name="email"
                  value={values.email}
                  placeholder="E-mail"
                  type="email"
                  className={`form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={`alert alert-danger rounded-0 rounded-bottom`}
                />
                <ButtonGroup>
                  <Button
                    color="primary"
                    className="mt-2"
                    type="submit"
                  >Salvar</Button>
                  <Button
                    color="danger"
                    className="mt-2"
                    type="reset"
                  >Limpar</Button>
                </ButtonGroup>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Center>
  )
}
