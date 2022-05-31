import React from "react";
import { Switch, Route} from "react-router-dom";
// import {  Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";


import ViewProject from "../views/Projects/ViewProject";
import EditProject from "../views/Projects/EditProject";
import AddProject from "../views/Projects/AddProject";

import ViewService from "../views/Services/ViewService";
import EditService from "../views/Services/EditService";
import AddService from "../views/Services/AddService";

import ViewFaq from "../views/Faq/ViewFaq";
import EditFaq from "../views/Faq/EditFaq";
import AddFaq from "../views/Faq/AddFaq";

import ViewTestimonial from "../views/Testimonials/ViewTestimonial";
import EditTestimonial from "../views/Testimonials/EditTestimonial";
import AddTestimonial from "../views/Testimonials/AddTestimonial";

import ViewTeam from "../views/Team/ViewTeam";
import EditTeam from "../views/Team/EditTeam";
import AddTeam from "../views/Team/AddTeam";

import ViewBanner from "../views/Banners/ViewBanner";
import EditBanner from "../views/Banners/EditBanner";
import AddBanner from "../views/Banners/AddBanner";

import ViewPartner from "../views/Partners/ViewPartner";
import EditPartner from "../views/Partners/EditPartner";
import AddPartner from "../views/Partners/AddPartner";


let ps;

const extraRoute = [
  {
    path: "/add-project",
    name: "Add Project",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddProject,
    layout: "/admin",
  },
  {
    path: "/edit-project/:id",
    name: "Add Project",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditProject,
    layout: "/admin",
  },
  {
    path: "/view-project/:id",
    name: "Add Project",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewProject,
    layout: "/admin",
  },
  {
    path: "/add-banner",
    name: "Add Banner",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddBanner,
    layout: "/admin",
  },
  {
    path: "/view-banner/:id",
    name: "view Banner",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewBanner,
    layout: "/admin",
  },
  {
    path: "/edit-banner/:id",
    name: "Edit Banner",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditBanner,
    layout: "/admin",
  },

  {
    path: "/add-partner",
    name: "Add Partner",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddPartner,
    layout: "/admin",
  },
  {
    path: "/view-partner/:id",
    name: "view Partner",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewPartner,
    layout: "/admin",
  },
  {
    path: "/edit-partner/:id",
    name: "Edit partner",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditPartner,
    layout: "/admin",
  },

  {
    path: "/add-service",
    name: "Add Service",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddService,
    layout: "/admin",
  },
  {
    path: "/view-service/:id",
    name: "view Service",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewService,
    layout: "/admin",
  },
  {
    path: "/edit-service/:id",
    name: "Edit Service",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditService,
    layout: "/admin",
  },
  {
    path: "/add-faq",
    name: "Add faq",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddFaq,
    layout: "/admin",
  },
  {
    path: "/view-faq/:id",
    name: "view faq",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewFaq,
    layout: "/admin",
  },
  {
    path: "/edit-faq/:id",
    name: "Edit faq",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditFaq,
    layout: "/admin",
  },
  {
    path: "/add-testimonial",
    name: "Add Testimonial",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddTestimonial,
    layout: "/admin",
  },
  {
    path: "/view-testimonial/:id",
    name: "view Testimonial",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewTestimonial,
    layout: "/admin",
  },
  {
    path: "/edit-testimonial/:id",
    name: "Edit Testimonial",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditTestimonial,
    layout: "/admin",
  },
  {
    path: "/add-team",
    name: "Add Team",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddTeam,
    layout: "/admin",
  },
  {
    path: "/detailmember/:id",
    name: "view Team",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ViewTeam,
    layout: "/admin",
  },
  {
    path: "/updatemember/:id",
    name: "Edit Team",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: EditTeam,
    layout: "/admin",
  },
];

const totalRoute = routes.concat(extraRoute)
const switchRoutes = (
  <Switch>
    {totalRoute.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image) => {
    setImage(image);
  };
  const handleColorClick = (color) => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction, {passive: true});
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Creative Tech"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
        {/* <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        /> */}
      </div>
    </div>
  );
}
