import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./List";
import { Register } from "./Register";
import { Breed } from "./Breed";

export function RouterApp() {
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