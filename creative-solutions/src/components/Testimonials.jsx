import React, { Component } from 'react';
import Icofont from 'react-icofont';
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";
import { api_url } from '../helper/Api';
import axios from 'axios'

class Testimonials extends Component {
    state={
        testimonials:[""]
    }
    componentDidMount(){
        axios.get(api_url+"testimonial/testimonials").then((res)=>{
            this.setState({
                    testimonials:res.data.data
            })
        }).catch((err)=>{
        })

    }
  render() {
    //Testimonials loop start
    const testimonialsitem = this.state.testimonials.map((testimonial, index) => (
        <div className="single-testimonial-item text-center" key={index}>
            {/* <Icofont icon="icofont-quote-left" /> */}
            <p>{testimonial?.description}</p>

            <div className="client-profile">
                <img src={testimonial.image} alt="client-one" />
            </div>
            
            <div className="client-info">
                <h3>{testimonial?.name}</h3>
                <span>{testimonial?.designition}</span>
            </div>
        </div>
    ));
    //Testimonials loop END
    return (
        <React.Fragment>
            <section className="testimonials ptb-100">
                <div className="container">
                    <OwlCarousel
                        className="owl-theme testimonial-slides"
                        items={1}
                        nav= {true}
                        dots= {false}
                        autoplay= {false}
                        loop= {true}
                        autoplayHoverPause= {true}
                        smartSpeed= {1000}
                        navText= {[
                            "<i class='icofont-arrow-left'></i>", 
                            "<i class='icofont-arrow-right'></i>"
                        ]}
                    >
                            {testimonialsitem}
                    </OwlCarousel>
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
