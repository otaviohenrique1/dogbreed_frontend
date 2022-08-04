import { ReactNode } from "react";
import { UserContextProvider } from "./userToken/index";

interface GlobalContextProps {
  children: ReactNode;
}

export default function GlobalContext(props: GlobalContextProps) {
  const { children } = props;

  return (
    <UserContextProvider>{children}</UserContextProvider>
  )
}
