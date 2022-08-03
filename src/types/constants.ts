import * as Yup from "yup";
import { FormUserTypes } from "./types";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Campo email vazio").email("Email invalido")
});

export const initialValues: FormUserTypes = {
  email: "",
};
