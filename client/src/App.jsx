import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";

// pages
import Dashboard from "./pages/Dashboard";
import Calender from "./pages/Calender";
import Reports from "./pages/Reports";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
// components

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="calender" element={<Calender />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
