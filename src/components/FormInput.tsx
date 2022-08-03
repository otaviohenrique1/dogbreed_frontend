import { ErrorMessage, Field } from 'formik'
import React, { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <Field {...props} />
  )
}

export type FormInputProps = InputProps & {
  name: string;
};

export function FormInput(props: FormInputProps) {
  return (
    <div className="d-flex flex-column">
      <Input {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className={`alert alert-danger rounded-0 rounded-bottom ${props.className}`}
      />
    </div>
  )
}
