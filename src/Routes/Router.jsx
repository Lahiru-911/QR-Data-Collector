import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Form from "../Pages/Form";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form/>} />
    </Routes>
  );
};

export default AppRouter;
