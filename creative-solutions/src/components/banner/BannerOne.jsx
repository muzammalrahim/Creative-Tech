import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";
import { api_url } from '../../helper/Api';
import axios from 'axios'

class BannerOne extends Component {

    state={
        banner:[""]
    }
    componentDidMount(){
            axios.get(api_url+"banner/banners").then(res=>{
                console.log("banner",res.data.data)
                this.setState({banner:res.data.data})
            }).catch(err => {
                console.log("error occured", err)
            })
    }



    render() {
        //BannerOne loop start
        const banneronedata = this.state.banner.map(
            (bannerone, index) => (
                <div className="single-slider-item " key={index} style={{backgroundImage:`url(${bannerone.image})`}}   >
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <span
                                                className={
                                                    isVisible
                                                        ? "hero-text animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.TopTitle}
                                            </span>

                                            <h1 style={{color:"#FE5619"}}
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone?.title}
                                            </h1>
                                            <p style={{color:"gray"}}
                                                className={
                                                    isVisible
                                                        ? "animated fadeInDown slow opacityOne"
                                                        : "opacityZero"
                                                }
                                            >
                                                {bannerone.description}
                                            </p>
                                            <div className="center-wrap">
                                                <Link to={bannerone.link} className="btn-a">
                                                    <div className="button">
                                                       get started
                                                        <Icofont icon="icofont-long-arrow-right" />
                                                    <div className="mask" /></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            )
        );
        //BannerOne loop END
        
        //Thumbs loop Start
        // const thumbdata = this.props.thumbsData.map((thumb, index) => (
        //     <div className="owl-thumb-item" key={index}>
        //         <Icofont icon={thumb.ThumbIcon} />
        //         <h3>{thumb.ThumbTitle}</h3>
        //         <p>{thumb.ThumbContent}</p>
        //     </div>
        //     )
        // );
        console.log("thumbs",this.state.banner)
        //Thumbs loop END
        return (
            <React.Fragment>
                <div id="home" className="hompage-slides-wrapper">
                    <OwlCarousel
                        className="owl-theme homepage-slides"
                        items={1}
                        touchDrag={false}
                        margin={0}
                        mouseDrag={false}
                        smartSpeed={1000}
                        dotData={true}
                        dotsContainer={".owl-thumbs"}
                    >
                        {banneronedata}
                    </OwlCarousel>

                    <div className="owl-thumbs">
                        {/* {thumbdata} */}
                        {
                            this.state.banner.map((thumb,index)=>{
                                return (
                                    <div className="owl-thumb-item" key={index}>
                                         <Icofont icon="icofont-rocket-alt-1" />
                                         <h3>{thumb.title}</h3>
                                         <p>{thumb.description}</p>
                                        </div>
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
//Props Types
BannerOne.propTypes = {
    banneronesData: PropTypes.array,
    thumbsData: PropTypes.array
};

//Default Props
BannerOne.defaultProps = {
    banneronesData: [
        {
            BgClass: "single-slider-item ",
            // TopTitle: "Clean & Creative",
            Title: "Beautiful Designs",
            Content:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
            BtnLink:  "/#0",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item ",
            // TopTitle: "Clean & Creative",
            Title: "Unique Features",
            Content:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
            BtnLink:  "/#0",
            BtnName: "get started"
        },
        {
            BgClass: "single-slider-item ",
            // TopTitle: "Clean & Creative",
            Title: "Reliable Support",
            Content:
                "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
            BtnLink:  "/#0",
            BtnName: "get started"
        }
    ],
    thumbsData: [
        {
            ThumbIcon: "icofont-rocket-alt-1",
            ThumbTitle: "Beautiful Designs",
            ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-box",
            ThumbTitle: "Unique Features",
            ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
        {
            ThumbIcon: "icofont-live-support",
            ThumbTitle: "Reliable Support",
            ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
        },
    ]
};

export default BannerOne;
