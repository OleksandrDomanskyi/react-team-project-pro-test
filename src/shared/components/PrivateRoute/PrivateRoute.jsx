import { Navigate, Outlet } from "react-router-dom";

import useLogin from "shared/hooks/useLogin";

const PrivateRoute = () => {

    const isLogin = useLogin();

    if (!isLogin) {
        return <Navigate to="/auth"/>
    }
    return <Outlet />
};

export default PrivateRoute;