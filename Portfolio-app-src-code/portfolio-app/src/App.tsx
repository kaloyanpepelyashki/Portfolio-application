import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavigationBar from "./Components/Global Components/NavigationBar";
import AboutPage from "./Pages/AboutPage";
import FlashlightEffect from "./Components/Atomic Components/CursorFlashLight";

function App() {
  return (
    <>
      <FlashlightEffect />
      <NavigationBar />
      <div className="application-main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
