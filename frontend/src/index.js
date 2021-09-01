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
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
// add by taimoor
import ViewProject from "./views/Projects/ViewProject";
import EditProject from "./views/Projects/EditProject";
import AddProject from "./views/Projects/AddProject";

 import Projects from "./views/Projects/Projects";
//  add by basit
 import Services from "./views/Services/Services" 
import ViewService from "./views/Services/ViewService";
import EditService from "./views/Services/EditService";
import AddService from "./views/Services/AddService";

import Testimonials from "./views/Testimonials/Testimonials" 
import ViewTestimonial from "./views/Testimonials/ViewTestimonial";
import EditTestimonial from "./views/Testimonials/EditTestimonial";
import AddTestimonial from "./views/Testimonials/AddTestimonial";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route exact path="/projects" component={Projects} />
          <Route exact path="/add-project" component={AddProject} />
          <Route exact path="/edit-project/:id" component={EditProject} />
          <Route exact path="/view-project/:id" component={ViewProject} />

          <Route exact path="/services" component={Services} />
          <Route exact path="/add-service" component={AddService} />
          <Route exact path="/edit-service/:id" component={EditService} />
          <Route exact path="/view-service/:id" component={ViewService} />

          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/add-testimonial" component={AddTestimonial} />
          <Route exact path="/edit-testimonial/:id" component={EditTestimonial} />
          <Route exact path="/view-testimonial/:id" component={ViewTestimonial} />

      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
