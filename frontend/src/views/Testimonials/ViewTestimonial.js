import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewTestimonial = () => {
  const [testimonial, setTestimonial] = useState({
  
    description: "",
    name:"",
    designition:""
 
  });
  const { id } = useParams();
  useEffect(() => {
    loadTestimonial();
  }, []);
  const loadTestimonial = async () => {
 
    get(`testimonial/getTestimonial/${id}`)
    .then((res) => {
      var data = res.data.data
      // alert(res.data.data)
      setTestimonial(data);
    })
    .catch(() => {});

  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Testimonial Id: {id}</h1>
      <hr />
      {console.log("sda",testimonial)}
      <ul className="list-group w-50">
        <li className="list-group-item">Description: {testimonial.description}</li>
        
        <li className="list-group-item">Name: {testimonial.name}</li>
        <li className="list-group-item">Designition: {testimonial.designition}</li>
              </ul>
    </div>
  );
};

export default ViewTestimonial;
