import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./List";
import { Chihuahua } from "./Chihuahua";
import { Husky } from "./Husky";
import { Labrador } from "./Labrador";
import { Pug } from "./Pug";
import { Register } from "./Register";
import { Breed } from "./Breed";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="list" element={<List />} />
        <Route path="list/:breed" element={<Breed />} />
        <Route path="labrador" element={<Labrador />} />
        <Route path="husky" element={<Husky />} />
        <Route path="chihuahua" element={<Chihuahua />} />
        <Route path="pug" element={<Pug />} />
      </Routes>
    </BrowserRouter>
  );
}