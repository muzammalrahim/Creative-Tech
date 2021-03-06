/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
// core components/views for Admin layout
import Projects from "views/Projects/Projects.js";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import Services from "views/Services/Services";
import Testimonials from "views/Testimonials/Testimonials";
import Banners from 'views/Banners/Banners'
import Faq from 'views/Faq/Faq'

import Team from "views/Team/Team";
import Partners from 'views/Partners/Partners'

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "???????? ??????????????",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/banners",
    name: "Banners",
    rtlName: "???????? ??????????????",
    icon: ChromeReaderModeIcon,
    component: Banners,
    layout: "/admin",
  },
  {
    path: "/partners",
    name: "Partners",
    rtlName: "???????? ??????????????",
    icon: ChromeReaderModeIcon,
    component: Partners,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    rtlName: "???????? ??????????????",
    icon: ChromeReaderModeIcon,
    component: Projects,
    layout: "/admin",
  },
  {
    path: "/services",
    name: "Services",
    rtlName: "???????? ??????????????",
    icon: ChromeReaderModeIcon,
    component: Services,
    layout: "/admin",
  },
  {
    path: "/faq",
    name: "Faq",
    rtlName: "???????? ??????????????",
    icon: ChromeReaderModeIcon,
    component: Faq,
    layout: "/admin",
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    rtlName: "???????? ??????????????",
    icon: ChromeReaderModeIcon,
    component: Testimonials,
    layout: "/admin",
  },
  {
    path: "/team",
    name: "Team",
    rtlName: "???????? ??????????????",
    icon: ChromeReaderModeIcon,
    component: Team,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "?????? ???????????? ????????????????",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "?????????? ????????????",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
