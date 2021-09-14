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

import ViewProject from "./views/Projects/ViewProject";
import EditProject from "./views/Projects/EditProject";
import AddProject from "./views/Projects/AddProject";

 import Projects from "./views/Projects/Projects";

 import Services from "./views/Services/Services" 
import ViewService from "./views/Services/ViewService";
import EditService from "./views/Services/EditService";
import AddService from "./views/Services/AddService";

import Testimonials from "./views/Testimonials/Testimonials" 
import ViewTestimonial from "./views/Testimonials/ViewTestimonial";
import EditTestimonial from "./views/Testimonials/EditTestimonial";
import AddTestimonial from "./views/Testimonials/AddTestimonial";

import Team from "./views/Team/Team" 
import ViewTeam from "./views/Team/ViewTeam";
import EditTeam from "./views/Team/EditTeam";
import AddTeam from "./views/Team/AddTeam";

import Faq from "./views/Faq/Faq" 
import ViewFaq from "./views/Faq/ViewFaq";
import EditFaq from "./views/Faq/EditFaq";
import AddFaq from "./views/Faq/AddFaq";

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

          <Route exact path="/team" component={Team} />
          <Route exact path="/add-team" component={AddTeam} />
          <Route exact path="/updatemember/:id" component={EditTeam} />
          <Route exact path="/detailmember/:id" component={ViewTeam} />

          <Route exact path="/faq" component={Faq} />
          <Route exact path="/add-faq" component={AddFaq} />
          <Route exact path="/edit-faq/:id" component={EditFaq} />
          <Route exact path="/view-faq/:id" component={ViewFaq} />

      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
