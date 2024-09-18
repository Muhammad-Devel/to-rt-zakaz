import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layer from "./pages/layout";
import Login from "./pages/login";
import Signin from "./pages/signin";
import HomePage from "./pages/homePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
