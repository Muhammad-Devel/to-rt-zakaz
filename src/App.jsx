import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layer from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Signin from "./pages/signin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layer />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
