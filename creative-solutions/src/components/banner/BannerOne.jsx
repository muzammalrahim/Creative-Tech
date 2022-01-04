import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import { api_url } from "../../helper/Api";
import axios from "axios";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

class BannerOne extends Component {
  state = {
    banner: [""],
    toggle: 0,
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

  toggleState = (i) => {
    this.setState({
      toggle: i,
    });
  };

  render() {
    let banneronedata;
    //BannerOne loop start
    // if(this.state.toggle == 0){

    //     console.log("a" , this.state.banner[0].title)
    // }
    // if(this.state.toggle == 1){

    //     console.log("ab" , this.state.banner[1].title)
    // }

    // if(this.state.toggle == 2){

    //     console.log("abc" , this.state.banner[2].image)
    // }
    console.log("ab", this.state.toggle);
    if (this.state.toggle == 0) {
      banneronedata = (
        <div
          className="single-slider-item"
          // key={index}
          style={{ backgroundImage: `url(${this.state.banner[0].image})` }}
        >
          <div className="diplay-table">
            <div className="display-table-cell">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <span
                          className={
                            isVisible
                              ? "hero-text animated fadeInDown slow opacityOne"
                              : "opacityZero"
                          }
                        >
                          {/* {thumb.TopTitle} */}
                        </span>

                        <h1
                          style={{ color: "#FE5619" }}
                          className={
                            isVisible
                              ? "animated fadeInDown slow opacityOne"
                              : "opacityZero"
                          }
                        >
                          {this.state.banner[0].title}
                        </h1>
                        <p
                          style={{ color: "gray" }}
                          id="beautiful"
                          className={
                            isVisible
                              ? "animated fadeInDown slow opacityOne"
                              : "opacityZero"
                          }
                        >
                          {this.state.banner[0].description}
                        </p>
                        <div className="center-wrap">
                          <a href={this.state.banner[0].link} className="btn-a">
                            <div className="button">
                              get started
                              <Icofont icon="icofont-long-arrow-right" />
                              <div className="mask" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.toggle == 1) {
      banneronedata = (
        <div
          className="single-slider-item"
          // key={index}
          style={{ backgroundImage: `url(${this.state.banner[1].image})` }}
        >
          <div className="diplay-table">
            <div className="display-table-cell">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <span
                          className={
                            isVisible
                              ? "hero-text animated fadeInDown slow opacityOne"
                              : "opacityZero"
                          }
                        >
                          {/* {thumb.TopTitle} */}
                        </span>

                        <h1
                          style={{ color: "#FE5619" }}
                          className={
                            isVisible
                              ? "animated fadeInDown slow opacityOne"
                              : "opacityZero"
                          }
                        >
                          {this.state.banner[1].title}
                        </h1>
                        <p
                          style={{ color: "gray" }}
                          id="unique"
                          className={
                            isVisible
                              ? "animated fadeInDown slow opacityOne"
                              : "opacityZero"
                          }
                        >
                          {this.state.banner[1].description}
                        </p>
                        <div className="center-wrap">
                          <a href={this.state.banner[1].link} className="btn-a">
                            <div className="button">
                              get started
                              <Icofont icon="icofont-long-arrow-right" />
                              <div className="mask" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.toggle == 2) {
      banneronedata = (
        <div
          className="single-slider-item"
          // key={index}
          style={{ backgroundImage: `url(${this.state.banner[2].image})` }}
        >
          <div className="diplay-table">
            <div className="display-table-cell">
              {/* <VisibilitySensor>
                  {({ isVisible }) => ( */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <span>{/* {thumb.TopTitle} */}</span>

                    <h1 style={{ color: "#FE5619" }}>
                      {this.state.banner[2].title}
                    </h1>
                    <p style={{ color: "gray" }} id="reliable">
                      {this.state.banner[2].description}
                    </p>
                    <div className="center-wrap">
                      <a href={this.state.banner[2].link} className="btn-a">
                        <div className="button">
                          get started
                          <Icofont icon="icofont-long-arrow-right" />
                          <div className="mask" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*     
                            )}
                </VisibilitySensor> */}
            </div>
          </div>
        </div>
      );
    }

    // const banneronedata = this.state.banner.map((thumb, index) => (
    //   <div
    //     className="single-slider-item"
    //     key={index}
    //     style={{ backgroundImage: `url(${thumb?.image})` }}
    //   >
    //     <div className="diplay-table">
    //       <div className="display-table-cell">
    //         <VisibilitySensor>
    //           {({ isVisible }) => (
    //                         <div className="container">
    //                             <div className="row">
    //                                 <div className="col-lg-6">
    //                                     <span
    //                                         className={isVisible
    //                                             ? "hero-text animated fadeInDown slow opacityOne"
    //                                             : "opacityZero"}
    //                                     >
    //                                         {/* {thumb.TopTitle} */}
    //                                     </span>

    //                                     <h1
    //                                         style={{ color: "#FE5619" }}
    //                                         className={isVisible
    //                                             ? "animated fadeInDown slow opacityOne"
    //                                             : "opacityZero"}
    //                                     >
    //                                         {thumb.title}
    //                                     </h1>
    //                                     <p
    //                                         style={{ color: "gray" }}
    //                                         className={isVisible
    //                                             ? "animated fadeInDown slow opacityOne"
    //                                             : "opacityZero"}
    //                                     >
    //                                         {thumb.description}
    //                                     </p>
    //                                     <div className="center-wrap">
    //                                         <a href={thumb.link} className="btn-a">
    //                                             <div className="button">
    //                                                 get started
    //                                                 <Icofont icon="icofont-long-arrow-right" />
    //                                                 <div className="mask" />
    //                                           </div>
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>

    //                         </div>

    //                     )}
    //         </VisibilitySensor>
    //       </div>
    //     </div>
    //   </div>
    // ));
    //BannerOne loop END

    //Thumbs loop Start
    // const thumbdata = this.props.thumbsData.map((thumb, index) => (
    //   <div className="owl-thumb-item" onClick={()=>index < this.props.thumbsData.length?this.toggleState(index):null} key={index} >
    //     <Icofont icon={thumb.ThumbIcon} />
    //     <h3>{thumb.ThumbTitle}</h3>
    //     <p>{thumb.ThumbContent}</p>
    //   </div>
    // ));
    // console.log("thumbs", this.state.banner);
    //Thumbs loop END
    return (
      <React.Fragment>
        <div id="home" className="hompage-slides-wrapper">
          <OwlCarousel
            className="owl-theme homepage-slides"
            items={1}
            // nav={true}
            // dots={false}
            autoplay={true}
            // loop={true}
            // autoplayHoverPause={true}

            smartSpeed={1000}
            dotData={true}
            dotsContainer={".owl-thumbs"}
          >
            {banneronedata}
          </OwlCarousel>
          <div className="owl-thumb">
            <div className="owl-thumb-item" onClick={() => this.toggleState(0)}>
              <Icofont icon={this.props.thumbsData[0].ThumbIcon} />
              <h3>{this.state.banner[0]?.title}</h3>
              <p>{this.state.banner[0]?.description}</p>
            </div>

            <div className="owl-thumb-item" onClick={() => this.toggleState(1)}>
              <Icofont icon={this.props.thumbsData[1].ThumbIcon} />
              <h3>{this.state.banner[1]?.title}</h3>
              <p>{this.state.banner[1]?.description}</p>
            </div>

            <div className="owl-thumb-item" onClick={() => this.toggleState(2)}>
              <Icofont icon={this.props.thumbsData[2].ThumbIcon} />
              <h3>{this.state.banner[2]?.title}</h3>
              <p>{this.state.banner[2]?.description}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
// Props Types
BannerOne.propTypes = {
  banneronesData: PropTypes.array,
  thumbsData: PropTypes.array,
};

// Default Props
BannerOne.defaultProps = {
  banneronesData: [
    {
      BgClass: "single-slider-item slide-bg-1",
      // TopTitle: "Clean & Creative",
      Title: "Beautiful Designs",
      Content:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
      BtnLink: "/#0",
      BtnName: "get started",
    },
    {
      BgClass: "single-slider-item slide-bg-2",
      // TopTitle: "Clean & Creative",
      Title: "Unique Features",
      Content:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
      BtnLink: "/#0",
      BtnName: "get started",
    },
    {
      BgClass: "single-slider-item slide-bg-3",
      // TopTitle: "Clean & Creative",
      Title: "Reliable Support",
      Content:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
      BtnLink: "/#0",
      BtnName: "get started",
    },
  ],
  thumbsData: [
    {
      ThumbIcon: "icofont-rocket-alt-1",
      ThumbTitle: "Beautiful Designs",
      ThumbContent:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      ThumbIcon: "icofont-box",
      ThumbTitle: "Unique Features",
      ThumbContent:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      ThumbIcon: "icofont-live-support",
      ThumbTitle: "Reliable Support",
      ThumbContent:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
  ],
};

export default BannerOne;

// import React, { Component } from "react";
// import OwlCarousel from "react-owl-carousel3";
// import Icofont from "react-icofont";
// import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
// import VisibilitySensor from "react-visibility-sensor";

// class BannerOne extends Component {
//     render() {
//         //BannerOne loop start
//         const banneronedata = this.props.banneronesData.map(
//             (bannerone, index) => (
//                 <div className={bannerone.BgClass} key={index}>
//                     <div className="diplay-table">
//                         <div className="display-table-cell">
//                             <VisibilitySensor>
//                                 {({ isVisible }) => (
//                                 <div className="container">
//                                     <div className="row">
//                                         <div className="col-lg-7">
//                                             <span
//                                                 className={
//                                                     isVisible
//                                                         ? "hero-text animated fadeInDown slow opacityOne"
//                                                         : "opacityZero"
//                                                 }
//                                             >
//                                                 {bannerone.TopTitle}
//                                             </span>

//                                             <h1
//                                             style={{ color: "#FE5619" }}
//                                                 className={
//                                                     isVisible
//                                                         ? "animated fadeInDown slow opacityOne"
//                                                         : "opacityZero"
//                                                 }
//                                             >
//                                                 {bannerone.Title}
//                                             </h1>
//                                             <p
//                                             style={{ color: "grey" }}
//                                                 className={
//                                                     isVisible
//                                                         ? "animated fadeInDown slow opacityOne"
//                                                         : "opacityZero"
//                                                 }
//                                             >
//                                                 {bannerone.Content}
//                                             </p>
//                                             <div className="center-wrap">
//                                                 <Link to={bannerone.BtnLink} className="btn-a">
//                                                     <div className="button">
//                                                         {bannerone.BtnName}
//                                                         <Icofont icon="icofont-long-arrow-right" />
//                                                     <div className="mask" /></div>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                             </VisibilitySensor>
//                         </div>
//                     </div>
//                 </div>
//             )
//         );
//         //BannerOne loop END

//         //Thumbs loop Start
//         const thumbdata = this.props.thumbsData.map((thumb, index) => (
//             <div className="owl-thumb-item" key={index}>
//                 <Icofont icon={thumb.ThumbIcon} />
//                 <h3>{thumb.ThumbTitle}</h3>
//                 <p>{thumb.ThumbContent}</p>
//             </div>
//             )
//         );
//         //Thumbs loop END
//         return (
//             <React.Fragment>
//                 <div id="home" className="hompage-slides-wrapper">
//                     <OwlCarousel
//                         className="owl-theme homepage-slides"
//                         items={1}
//                         touchDrag={false}
//                         margin={0}
//                         mouseDrag={false}
//                         smartSpeed={1000}
//                         dotData={true}
//                         dotsContainer={".owl-thumb"}
//                     >
//                         {banneronedata}
//                     </OwlCarousel>

//                     <div className="owl-thumb">
//                         {thumbdata}
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }
// //Props Types
// BannerOne.propTypes = {
//     banneronesData: PropTypes.array,
//     thumbsData: PropTypes.array
// };

// //Default Props
// BannerOne.defaultProps = {
//     banneronesData: [
//         {
//             BgClass: "single-slider-item slide-bg-1",
//             TopTitle: "Clean & Creative",
//             Title: "Beautiful Designs",
//             Content:
//                 "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
//             BtnLink:  "https://www.google.com/",
//             BtnName: "get started"
//         },
//         {
//             BgClass: "single-slider-item slide-bg-2",
//             TopTitle: "Clean & Creative",
//             Title: "Unique Features",
//             Content:
//                 "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
//             BtnLink:  "https://www.google.com/",
//             BtnName: "get started"
//         },
//         {
//             BgClass: "single-slider-item slide-bg-3",
//             TopTitle: "Clean & Creative",
//             Title: "Reliable Support",
//             Content:
//                 "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
//             BtnLink:  "https://www.google.com/",
//             BtnName: "get started"
//         }
//     ],
//     thumbsData: [
//         {
//             ThumbIcon: "icofont-rocket-alt-1",
//             ThumbTitle: "Beautiful Designs",
//             ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
//         },
//         {
//             ThumbIcon: "icofont-box",
//             ThumbTitle: "Unique Features",
//             ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
//         },
//         {
//             ThumbIcon: "icofont-live-support",
//             ThumbTitle: "Reliable Support",
//             ThumbContent: "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
//         },
//     ]
// };

// export default BannerOne;
