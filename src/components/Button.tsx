import { Button as ButtonReactstrap, ButtonProps as ButtonPropsReactstrap } from "reactstrap";

type ButtonProps = ButtonPropsReactstrap & { 
  color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
}

export function Button(props: ButtonProps) {
  return (
    <ButtonReactstrap {...props} />
  )
}
