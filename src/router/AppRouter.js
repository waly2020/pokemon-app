import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home/Home";

import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
const DetailsLazy = lazy(() => import("../pages/Details/Details"))
const HomeLazy = lazy(() => import("../pages/Home/Home"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading/>}>
      <HomeLazy/>
    </Suspense>,
  },
  {
    path : "/details/:pokemon",
    element : <Suspense fallback={<Loading/>}>
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
