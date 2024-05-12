import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            Component: <HomePage></HomePage>
        },
        {
            path: ROUTERS.USER.PROFILE,
            Component: <ProfilePage></ProfilePage>
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.Component} />
                    ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;