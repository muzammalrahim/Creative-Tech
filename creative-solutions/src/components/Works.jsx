import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { api_url } from '../helper/Api';
import axios from 'axios'

import { Link } from 'react-router-dom';


const images = [
    require("../assets/img/work-1.jpg"),
    require("../assets/img/work-2.jpg"),
    require("../assets/img/work-3.jpg"),
    require("../assets/img/work-4.jpg"),
    require("../assets/img/work-5.jpg"),
    require("../assets/img/work-6.jpg")
  ];
  
  const smallImages = [
      require("../assets/img/work-1.jpg"),
      require("../assets/img/work-2.jpg"),
      require("../assets/img/work-3.jpg"),
      require("../assets/img/work-4.jpg"),
      require("../assets/img/work-5.jpg"),
      require("../assets/img/work-6.jpg")
  ];

class Works extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false,
          work:['']
        };
      }

      componentDidMount() {
        axios.get(api_url + 'user/users').then(res => {
            this.setState({work:res.data.data})
            console.log("data" , res.data)
        }).catch(err => {
            console.log("error occured", err)
        })
    }

    render() {
        const { photoIndex, isOpen } = this.state;

            const workData = this.state.work.map((w,i)=>(
//                 <div className="col-md-6 col-lg-4" key={i}>
//                     <a href={w.link}> 
//                     <div className="team-box" >
//                 <img src={w.image} alt="Description" />
//                 <div className="box-content">
//                 <div className="box-inner-content">
//                 <h1 className="title">  {w.title}</h1>
//                  <span className="post"> {w.description} </span>
//                   {/* <a href={w.link}>{w.title}</a> */}
//             </div>
//         </div>
//     </div>
//     </a>
//  </div>
  
 <div className="col-md-6 col-lg-4">
       
<div className="work-details">
<figure>

   <img
   src={w.image}
   alt="Gallery"
   className="img-fluid"
   />

   <div className="box-content">
   
        
       <ul className="icon">
           <li>
               <span 
                   href= "ll"
                   onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                   className="popup-btn">
                   <Icofont icon="icofont-search-2"/>
               </span>
           </li>
           <a href={w.link}> 
           <li>
               <span 
                   href= "ll"
                   
                   className="popup-btn">
                   <Icofont icon="icofont-link"/>
               </span>
           </li>
           </a>
       </ul>
   </div>
</figure>
</div>

</div> 
            ))
          


        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
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
                    </div>

                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>

                                <div className="container">
                                <div className="row">
                                    {workData}
                                </div>
                                </div>

                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={this.state.work[photoIndex].image}
                            nextSrc={this.state.work[(photoIndex + 1) % this.state.work.length].image}
                            prevSrc={this.state.work[(photoIndex + this.state.work.length - 1) % this.state.work.length].image}
                            imageTitle={photoIndex + 1 + "/" + this.state.work.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + this.state.work.length - 1) % this.state.work.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % this.state.work.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Works.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Works.defaultProps = {
    SectionbgTitle: "works",
    sectionTitle: "works",
    sectionDescription:
        "Our work comprises of Joomla, WordPress and e commerce platform projects.",
};

export default Works;
