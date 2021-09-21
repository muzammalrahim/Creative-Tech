import React, { Component, useEffect, useState } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { api_url } from "../helper/Api";
import axios from "axios";

import { Link } from "react-router-dom";

const images = [
  require("../assets/img/work-1.jpg"),
  require("../assets/img/work-2.jpg"),
  require("../assets/img/work-3.jpg"),
  require("../assets/img/work-4.jpg"),
  require("../assets/img/work-5.jpg"),
  require("../assets/img/work-6.jpg"),
];

const smallImages = [
  require("../assets/img/work-1.jpg"),
  require("../assets/img/work-2.jpg"),
  require("../assets/img/work-3.jpg"),
  require("../assets/img/work-4.jpg"),
  require("../assets/img/work-5.jpg"),
  require("../assets/img/work-6.jpg"),
];

const Works = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [work, setWork] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios
      .get(api_url + "user/users")
      .then((res) => {
        setWork(res.data.data);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  },[]);

  const showMoreHandler = () => {
    setShowMore(true);
    setIsShow(true);
  };

  let projects = work.slice(0, 6);
  console.log("projects after splice", projects);

  const workData = projects.map((w, i) => (
    <div className="col-md-6 col-lg-4">
      <div className="work-details">
        <figure>
          <img src={w.image} alt="Gallery" className="img-fluid" />

          <div className="box-content">
            <ul className="icon">
              <li>
                <span
                  href="ll"
                  onClick={() => {
                    setPhotoIndex(i);
                    setIsOpen(true);
                  }}
                  className="popup-btn"
                >
                  <Icofont icon="icofont-search-2" />
                </span>
              </li>
              <a href={w.link}>
                <li>
                  <span href="ll" className="popup-btn">
                    <Icofont icon="icofont-link" />
                  </span>
                </li>
              </a>
            </ul>
          </div>
        </figure>
      </div>
    </div>
  ));

  const defaultWorkData = work.map((w, i) => (
    <div className="col-md-6 col-lg-4">
      <div className="work-details">
        <figure>
          <img src={w.image} alt="Gallery" className="img-fluid" />

          <div className="box-content">
            <ul className="icon">
              <li>
                <span
                  href="ll"
                  onClick={() => {
                    setPhotoIndex(i);
                    setIsOpen(true);
                  }}
                  className="popup-btn"
                >
                  <Icofont icon="icofont-search-2" />
                </span>
              </li>
              <a href={w.link}>
                <li>
                  <span href="ll" className="popup-btn">
                    <Icofont icon="icofont-link" />
                  </span>
                </li>
              </a>
            </ul>
          </div>
        </figure>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <section id="works" className="our-works ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>works</h2>
                  <p>
                    Our work comprises of Joomla, WordPress and e commerce
                    platform projects.
                  </p>
                  <span className="section-title-bg">works</span>
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
                  {showMore ? defaultWorkData : workData}
                  {/* {workData} */}
                </div>
                {isShow ? (
                  <button className="btn-a w-100 ">
                    <div
                      onClick={() => {
                        setIsShow(false);
                        setShowMore(false);
                      }}
                      className="button"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px",
                      }}
                    >
                      show less
                      <div className="mask" />
                    </div>
                  </button>
                ) : (
                  <button className="btn-a w-100 ">
                    <div
                      onClick={showMoreHandler}
                      className="button"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px",
                      }}
                    >
                      show more
                      <div className="mask" />
                    </div>
                  </button>
                )}
              </div>
            </MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={work[photoIndex].image}
              nextSrc={work[(photoIndex + 1) % work.length].image}
              prevSrc={work[(photoIndex + work.length - 1) % work.length].image}
              imageTitle={photoIndex + 1 + "/" + work.length}
              imageCaption={
                <a style={{ color: "white" }} href={work[photoIndex].link}>
                  {work[photoIndex].link}
                </a>
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + work.length - 1) % work.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % work.length)
              }
            />
          )}
        </MDBContainer>
      </section>
    </React.Fragment>
  );
};

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
