import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { List } from "./List";
import { Register } from "./Register";
import { Breed } from "./Breed";
import { UserContextContext } from "../context/userToken/index";

export function RouterApp() {
  const { dataUserContext } = useContext(UserContextContext);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: dataUserContext.length !== 0,
    authenticationPath: "/",
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />

        {/* <Route path="list" element={<List />} /> */}
        {/* <Route path="list/:breed" element={<Breed />} /> */}
        <Route
          path="list"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<List />}
            />
          }
        />
        <Route
          path="list/:breed"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Breed />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
