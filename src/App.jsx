import { BrowserRouter, Route, Routes } from "react-router";

import Error404 from "/src/pages/error";
import Home from "/src/pages/home";
import CurrentEmployees from "./pages/current-employees";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-employees" element={<CurrentEmployees />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
