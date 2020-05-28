import Login from "../containers/Auth/Login.jsx";
import Logout from "../containers/Auth/Logout.jsx";
import Crud from "../containers/Crud/Crud";
import LoginLayout from "../layouts/Public/Public";
import HomeLayout from "../layouts/Home/Home";
import MobileHomeLayout from "../layouts/MobileHome/MobileHome";
import Storage from "@material-ui/icons/Storage";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

let routes = [
  {
    path: "/crud",
    name: "Crud",
    component: Crud,
    layout: HomeLayout,
    mobileLayout: MobileHomeLayout,
    icon: Storage,
    display: true,
    bottomNavigation: true,
  },
  {
    path: "/logout",
    name: "Sign out",
    component: Logout,
    layout: LoginLayout,
    mobileLayout: LoginLayout,
    icon: PowerSettingsNew,
    display: true,
    bottomNavigation: true,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    layout: LoginLayout,
    mobileLayout: LoginLayout,
    icon: PowerSettingsNew,
    display: false,
    bottomNavigation: false,
  },
];

export default routes;
