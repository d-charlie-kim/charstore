import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
      <Route path={"/homepage"} element={<HomePage />} />
      <Route path={"/loginpage"} element={<LoginPage />} />
      <Route path={"/mainpage"} element={<MainPage />} />
    </Routes>
  );
}
export default App;
