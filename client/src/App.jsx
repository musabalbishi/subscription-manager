import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Dashboard from "./pages/Dashboard";
import Calender from "./pages/Calender";
import Reports from "./pages/Reports";
// components

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="calender" element={<Calender />} />
      <Route path="reports" element={<Reports />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
