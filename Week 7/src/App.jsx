import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { NavigationBar } from "./components/nav_bar";
const Dashboard = lazy(() => import("./pages/Dashboard_page"));
const LandingPage = lazy(() => import("./pages/Landing_page"));

function App() {
  return (
    <div>
      <NavigationBar />
      <br />
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Suspense>
                <LandingPage />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        To Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        To Dashboard Page
      </button>
    </div>
  );
};

export default App;
