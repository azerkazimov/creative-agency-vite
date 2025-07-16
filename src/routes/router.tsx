import Main from "@/pages/main/main";
import PATH from "./constant";
import MainLayout from "@/layout/main-layout";
import About from "@/pages/about/about";
import Project from "@/pages/project/project";
import Service from "@/pages/service/service";
import UserDetails from "@/pages/service/components/user-details/user-details";
import AuthLayout from "@/layout/auth-layout";
import Login from "@/pages/auth/login/login";
import Register from "@/pages/auth/register/register";
import ProtectedLayout from "@/layout/protechted-layout";
import Dashboard from "@/pages/dashboard/dashboard";

export const Routes = [
  {
    path: PATH.main,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/users/:id",
        element: <UserDetails />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
