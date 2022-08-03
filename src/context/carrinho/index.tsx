import { createContext, Dispatch,  ReactNode, SetStateAction, useState } from "react";

export interface UserData {
  userToken: string;
}

interface UserContextProps {
  dataUserContext: UserData[];
  setDataUserContext: Dispatch<SetStateAction<UserData[]>>
}

const initialValuesUserContext = {
  dataUserContext: [],
  setDataUserContext: () => {},
};

export const UserContextContext = createContext<UserContextProps>(initialValuesUserContext);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider(props: UserContextProviderProps) {
  const [dataUserContext, setDataUserContext] = useState<UserData[]>(initialValuesUserContext.dataUserContext);

  return (
    <UserContextContext.Provider value={{ dataUserContext: dataUserContext, setDataUserContext: setDataUserContext }}>
      {props.children}
    </UserContextContext.Provider>
  );
}