import React,{useState, useEffect} from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { api_url } from "../helper/Api";
import axios from "axios";

const Services = () =>{

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    axios
      .get(api_url + "service/services")
      .then((res) => {
        setService(res.data.data);
      })
      .catch((err) => {
      });
  }, []);
  
  const showMoreHandler = () => {
    setShowMore(true);
    setIsShow(true);
  };

  let projects = service.slice(0, 6);

  //Service loop start

    const serviceData = projects.map((service, index) => (
      <div className="col-md-6 col-lg-4 text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
            {/* <Icofont icon={service?.image} /> */}

            <img src={service?.image} alt="" width="100" height="100" />
          </div>
          <h3>{service?.title}</h3>
          <p>{service?.description}</p>
        </div>
      </div>
    ));
  
    const defaultServiceData = service.map((service, index) => (
      <div className="col-md-6 col-lg-4 text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
            {/* <Icofont icon={service?.image} /> */}

            <img src={service?.image} alt="" width="100" height="100" />
          </div>
          <h3>{service?.title}</h3>
          <p>{service?.description}</p>
        </div>
      </div>
    ));
    //Service loop END
    return (
      <React.Fragment>
        <section id="services" className="services ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2>Services</h2>
                    <p>our services include but not limited to React , Angular , Django , Nodejs , Laravel , Codeigniter , Wordpress, Joomla and Magento</p>
                    <span className="section-title-bg">
                      Services
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
                  {showMore ? defaultServiceData : serviceData}
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
              mainSrc={service[photoIndex].image2}
              nextSrc={service[(photoIndex + 1) % service.length].image2}
              prevSrc={service[(photoIndex + service.length - 1) % service.length].image2}
              imageTitle={photoIndex + 1 + "/" + service.length}
              imageCaption={
               <div className="ril__captionContent">
                  <a style={{ color: "#FE5619",fontSize:"25px" }} href={service[photoIndex].link}>
                  {service[photoIndex].link}
                </a>
               </div>
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + service.length - 1) % service.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % service.length)
              }
            />
          )}
        </MDBContainer>
        </section>
      </React.Fragment>
    );
}

//Props Types
Services.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  servicesData: PropTypes.array,
};

//Default Props
Services.defaultProps = {
  SectionbgTitle: "Services",
  sectionTitle: "Services",
  sectionDescription:
    "our services include but not limited to React , Angular , Django , Nodejs , Laravel , Codeigniter , Wordpress, Joomla and Magento",

  servicesData: [
    {
      icon: "icofont-automation",
      heading: "Creative Solutions",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "icofont-bullseye",
      heading: "Excellent Features",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "icofont-woman-in-glasses",
      heading: "Friendly Support",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "icofont-chart-growth",
      heading: "SEO & Advertising",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "icofont-network-tower",
      heading: "Marketing & Consulting",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
    {
      icon: "icofont-laptop-alt",
      heading: "Design & Development",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant.",
    },
  ],
};

export default Services;
