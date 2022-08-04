import { createContext, Dispatch,  ReactNode, SetStateAction, useState } from "react";

interface UserContextProps {
  dataUserContext: string;
  setDataUserContext: Dispatch<SetStateAction<string>>
}

const initialValuesUserContext = {
  dataUserContext: "",
  setDataUserContext: () => {},
};

export const UserContextContext = createContext<UserContextProps>(initialValuesUserContext);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider(props: UserContextProviderProps) {
  const [dataUserContext, setDataUserContext] = useState<string>(initialValuesUserContext.dataUserContext);

  return (
    <UserContextContext.Provider value={{ dataUserContext: dataUserContext, setDataUserContext: setDataUserContext }}>
      {props.children}
    </UserContextContext.Provider>
  );
}