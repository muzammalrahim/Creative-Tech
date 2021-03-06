import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import { Accordion, AccordionItem } from "react-sanfona";
// import { Link} from 'react-router-dom';
import { Link } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import { api_url } from '../helper/Api';
import axios from 'axios'

class FAQ extends Component {
 
      state={
            faq:[],
        }
            
    componentDidMount() {
        axios.get(api_url + 'faq/faq').then(res => {
            this.setState({faq:res.data.data})
        }).catch(err => {
        })
    }
    render() {
        return (
            <React.Fragment>
                <section className="faq ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="faq-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    
                                        <div className="content-box color-effect-1">
                                            <h3>{this.props.ContentTitle}</h3>

                                            <div className="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
                                                <div className="box-icon"><Link to='contact'><Icofont icon="icofont-share-alt" /></Link></div>
                                            </div>

                                            <p>{this.props.ContentDescription}</p>
                                        </div>
                                    
                                </div>

                                <div className="col-lg-8">
                                    <Accordion
                                        rootTag="div"
                                        className="panel-group"
                                    >
                                        {this.state.faq.map((item) => {
                                           
                                            return (
                                                      <AccordionItem
                                                    key={item?.id}
                                                    title={item?.title}
                                                    expanded={true}
                                                    expandedClassName=""
                                                    className="panel-title panel panel-default"
                                                    titleTag="a"
                                                    titleClassName=""
                                                >
                                                    <div>
                                                        <div className="panel-body">
                                                            <p>{item?.description}</p>
                                                        </div>
                                                    </div>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
FAQ.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    ContentLink: PropTypes.string,
    ContentTitle: PropTypes.string,
    ContentDescription: PropTypes.string,
    faqData: PropTypes.array
};

//Default Props
FAQ.defaultProps = {
    SectionbgTitle: "FAQ",
    sectionTitle: "Frequently Asked Questions",
    sectionDescription:
        "Based on over ten years of experience and questions we receive from our clients, we wrote down a list of Frequently Asked Questions (FAQ). We hope that it will help you better understand the issues related to software development. For your convenience, we have divided the questions into three categories: process, costs and experience.",
    
    ContentTitle: "One More Question?",
    ContentDescription: "If you have more questions, send us a message and we will answer you as soon as possible.",
    ContentLink: "/#0",

        faqData: [
        {
            title: "How to download your items?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        },
        {
            title: "View & download invoices?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        },
        {
            title: "What is Item Support?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        },
        {
            title: "How to contact an author?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
        }
    ]
};

export default FAQ;
