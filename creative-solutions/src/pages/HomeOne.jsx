import React, { Component } from "react";

//Import Component
import NavBar from "../components/NavBar";
import BannerOne from "../components/banner/BannerOne";

import BannerTwo from "../components/banner/BannerTwo";
import Services from "../components/Services";
import WelcomeServices from "../components/WelcomeServices";
import Works from "../components/Works";
import About from "../components/About";
import Team from "../components/Team";
// import VideoArea from "../components/VideoArea";
import Pricing from "../components/Pricing";
import FunFacts from "../components/FunFacts";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Partner from "../components/Partner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { api_url } from "../helper/Api";
import axios from "axios";

class HomeOne extends Component {
  state = {
    banner: [],
  };
  componentDidMount() {
    axios
      .get(api_url + "banner/banners")
      .then((res) => {
        console.log("banner", res.data.data);
        this.setState({ banner: res.data.data });
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }
  render() {
    return (
      <React.Fragment>
        {/* NavBar: src/components/NavBar.jsx */}
        <NavBar pageName="home" />
        {/* BannerOne: src/components/banner/BannerOne */}
        <BannerOne />
        {/* <BannerTwo/> */}
        {/* Services: src/components/Services.jsx */}
        <Services />
        {/* WelcomeServices: src/components/WelcomeServices.jsx */}
        {/* <WelcomeServices /> */}
        {/* Works: src/components/Works.jsx */}
        <Works />
        {/* About: src/components/About.jsx */}
        {/* <About /> */}
        {/* Team: src/components/Team.jsx */}
        <Team />
        {/* Blog: src/components/Blog.jsx */}

        {/* VideoArea: src/components/VideoArea.jsx */}
        {/* <VideoArea /> */}
        {/* Pricing: src/components/Pricing.jsx */}
        {/* <Pricing /> */}
        {/* FunFacts: src/components/FunFacts.jsx */}
        {/* <FunFacts /> */}
        {/* Testimonials: src/components/Testimonials.jsx */}
        <Testimonials />
        {/* FAQ: src/components/FAQ.jsx */}
        <FAQ />
        {/* Partner: src/components/Partner.jsx */}
        <Partner />
        {/* Contact: src/components/Contact.jsx */}
        <Contact />
        {/* Footer: src/components/Footer.jsx */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomeOne;
