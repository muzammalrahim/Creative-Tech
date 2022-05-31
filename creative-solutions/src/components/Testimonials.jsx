import React, { Component } from 'react';
import Icofont from 'react-icofont';
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";
import { api_url } from '../helper/Api';
import axios from 'axios'
import ScrollAnimation from "react-animate-on-scroll";
// import byDefault from "../assets/img/house.jpg"


class Testimonials extends Component {
    state={
        testimonials:[""]
    }
    componentDidMount(){
        axios.get(api_url + "testimonial/testimonials").then((res) => {
            console.log("res", res);
            this.setState({
                    testimonials:res.data.data
            })
        }).catch((err)=>{
        })

    }
  render() {
    //Testimonials loop start
    const testimonialsitem = this.state.testimonials.map((testimonial, index) => (
        
        // <div className="single-testimonial-item text-center" key={index}>
        //     {/* <Icofont icon="icofont-quote-right" /> */}
        //     <p>{testimonial?.description}</p>

        //     <div className="client-profile">
        //         <img src={testimonial.image} alt="client-one" />
        //     </div>
            
        //     <div className="client-info">
        //         <h3>{testimonial?.name}</h3>
        //         <span>{testimonial?.designation}</span>
        //     </div>
        // </div>

        <div className='row col'>
            <div className='testimonail_wrap'>
                <div className='client_profiles'>
                    <img src={testimonial.image || "https://via.placeholder.com/400x300"} alt="client_profile" />
                </div>
                <div className='testimonial-text'>
                    <Icofont icon="icofont-quote-right" />
                    <h3>{testimonial?.name}</h3>
                    <span>{testimonial?.designation}</span>
                    <p>{testimonial?.description}</p>
                </div>
            </div>
        </div>
    ));
    //Testimonials loop END
    return (
        <React.Fragment>
            <section className="testimonials ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                            <div className="section-title">
                                <h2>{this.props.sectionTitle}</h2>
                                <p>{this.props.sectionDescription}</p>
                                <span className="section-title-bg">
                                {this.props.SectionbgTitle}
                                </span>
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className='row'>
                        <OwlCarousel
                            className="owl-theme testimonial-slides"
                            items={1}
                            dots= {true}
                            // autoplay= {true}
                            loop= {true}
                            autoplayHoverPause= {true}
                            smartSpeed={1000}
                        >
                            {testimonialsitem}
                            </OwlCarousel>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Testimonials.propTypes = {
    testimonialsData: PropTypes.array
};

//Default Props
Testimonials.defaultProps = { 

  SectionbgTitle: "Testimonial",
  sectionTitle: "Our Testimonial",
  sectionDescription:
    "What our clients says about us.",
    testimonialsData: [
        {
            clientImage: require("../assets/img/client-one.png"),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            Name: "Jason Statham",
            Profession: "Founder & Director",
        },
        {
            clientImage: require("../assets/img/client-one.png"),
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            Name: "Jason Statham",
            Profession: "Founder & Director",
        },
    ]
};

export default Testimonials;
