import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

export default function AllRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          token ? (
            <Dashboard token={token} />
          ) : (
            <Navigate to={"/google-login"} />
          )
        }
      />
      <Route path={"/google-login"} element={<Login />} />
    </Routes>
  );
}
