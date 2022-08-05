import { Formik, Form, FormikProps, ErrorMessage } from "formik";
import { Input } from '../components/FormInput';
import { Button } from '../components/Button';
import { ButtonGroup } from 'reactstrap';
import { FormUserTypes } from '../utils/types';
import { initialValues, validationSchema } from '../utils/constants';

export interface FormUserProps {
  handleSubmit: (values: FormUserTypes) => void;
}

export function FormUser(props: FormUserProps) {
  const { handleSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<FormUserTypes>) => {
        const { errors, touched, values } = formikProps;

        return (
          <Form className="d-flex flex-column">
            <Input
              name="email"
              id="email"
              value={values.email}
              placeholder="E-mail"
              type="email"
              className={`form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`}
              data-testid="email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={`alert alert-danger rounded-0 rounded-bottom`}
            />
            <ButtonGroup>
              <Button
                id="submit_form_button"
                color="primary"
                className="mt-2"
                type="submit"
                data-testid="submit_form_button"
              >Entrar</Button>
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
  )
}
