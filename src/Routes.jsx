import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import TestPage from "./pages/TestPage/TestPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import UsefulInfoPage from "./pages/UsefulInfoPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/auth"} element={<AuthPage />} />
            <Route path={"/test"} element={<TestPage />} />
            <Route path={"/results"} element={<ResultsPage />} />
            <Route path={"/useful-info"} element={<UsefulInfoPage />} />
            <Route path={"/contacts"} element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
};

export default MyRoutes;