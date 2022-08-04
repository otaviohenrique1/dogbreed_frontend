import { ReactNode, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { List } from "./List";
import { Register } from "./Register";
import { Breed } from "./Breed";
import { UserContextContext } from "../context/userToken/index";

export function RouterApp() {
  const { dataUserContext, setDataUserContext } = useContext(UserContextContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="list" element={<List />} />
        <Route path="list/:breed" element={<Breed />} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
}

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

function useAuth() {
  return true;
}