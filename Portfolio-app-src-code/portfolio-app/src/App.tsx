import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/UI Components/Global Components/NavigationBar";
import FlashlightEffect from "./Components/UI Components/Atomic Components/CursorFlashLight";
import { Suspense, lazy } from "react";
import Loader from "./Components/UI Components/Small commponents/Loader";

const workPage = lazy(() => import("./Pages/WorkPage"));
const aboutPage = lazy(() => import("./Pages/AboutPage"));
const homePage = lazy(() => import("./Pages/HomePage"));

function App() {
  return (
    <>
      <FlashlightEffect />
      <NavigationBar />
      <div className="application-main-container">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" Component={homePage} />
            <Route path="/about" Component={aboutPage} />
            <Route path="/work" Component={workPage} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
