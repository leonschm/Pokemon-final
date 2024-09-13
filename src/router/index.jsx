import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Ranking } from "../pages/Ranking";
import { Layout } from "../components/Layout";
import { Error } from "../pages/Error";
import { Login } from "../pages/Login";
import { useAuth } from "../hooks/useAuth";
import { Pokedex } from "../pages/Pokedex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ranking",
        element: (
          <RequiredAuth>
            <Ranking />
          </RequiredAuth>
        ),
      },
    ],
  },
]);

function RequiredAuth({ children }) {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
