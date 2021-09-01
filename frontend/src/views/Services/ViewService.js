import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewService = () => {
  const [service, setService] = useState({
    title: "",
    description: "",
 
  });
  const { id } = useParams();
  useEffect(() => {
    loadService();
  }, []);
  const loadService = async () => {
 
    get(`service/getService/${id}`)
    .then((res) => {
      var data = res.data.data
      // alert(res.data.data)
      setService(data);
    })
    .catch(() => {});

  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Service Id: {id}</h1>
      <hr />
      {console.log("sda",service)}
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {service.title}</li>
        <li className="list-group-item">Description: {service.description}</li>
              </ul>
    </div>
  );
};

export default ViewService;
