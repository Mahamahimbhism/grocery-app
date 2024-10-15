import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ContextProvider from "./store/ContextProvider";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  { path: "/login/", element: <Login /> },
  { path: "/sign-up/", element: <Signup /> },
  { path: "/forgot-password/", element: <ForgotPassword /> },
  { 
    path: "/", 
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
