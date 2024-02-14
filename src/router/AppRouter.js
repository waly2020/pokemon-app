import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

import { Suspense, lazy } from "react";
const DetailsLazy = lazy(() => import("../pages/Details/Details"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "/details/:pokemon",
    element : <Suspense fallback={<p>loading...</p>}>
      <DetailsLazy/>
    </Suspense>
  }
]);
const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
