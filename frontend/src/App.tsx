import React, { useContext, ReactNode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext } from "context/authContext";
import LogIn from "pages/LogIn";
import SignUp from "pages/SignUp";
import SideNavbar from "components/SideNavbar";
import GetStarted from "pages/GetStarted";
import MyVouchers from "pages/MyVouchers";
import MyCustomers from "pages/MyCustomers";
import Documents from "pages/Documents";
import Settings from "pages/Settings";
import NotFound from "pages/404";

function App() {
  const { currentVendor } = useContext(AuthContext);

  const ProtectedRoute = ({ children }: { children: ReactNode | any }) => {
   if (!currentVendor) {
     return <Navigate to="/login" />;
   }

     return children;
 };

  const queryClient = new QueryClient();

  const Layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <SideNavbar />
       <Outlet />
     </QueryClientProvider>
  );
};

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <GetStarted />,
        },
        {
          path: "/vouchers",
          element: <MyVouchers />,
        },
        {
          path: "/customers",
          element: <MyCustomers />,
        },
        {
          path: "/documents",
          element: <Documents />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
