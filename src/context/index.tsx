import { ReactNode } from "react";
import { UserContextProvider } from "./carrinho/index";

interface GlobalContextProps {
  children: ReactNode;
}

export default function GlobalContext(props: GlobalContextProps) {
  const { children } = props;

  return (
    <UserContextProvider>{children}</UserContextProvider>
  )
}
