import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
// import SkillsSection from "../Home/SkillsSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
