import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PublicRoute from "./shared/components/PublicRoute";
import PrivateRoute from "./shared/components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const TestPage = lazy(() => import("./pages/TestPage/TestPage"));
const ResultsPage = lazy(() => import("./pages/ResultsPage/ResultsPage"));
const UsefulInfoPage = lazy(() => import("./pages/UsefulInfoPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const MyRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={"auth"} element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"test"} element={<TestPage />} />
          <Route path={"results"} element={<ResultsPage />} />
          <Route path={"useful-info"} element={<UsefulInfoPage />} />
        </Route>
        <Route path={"/contacts"} element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
