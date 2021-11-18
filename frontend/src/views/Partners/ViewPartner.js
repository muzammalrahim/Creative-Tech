import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewPartner = () => {
  const [partner, setPartner] = useState({
    link: "",
 
  });
  const { id } = useParams();
  useEffect(() => {
    loadPartner();
  }, []);
  const loadPartner = async () => {
 
    get(`partner/getPartner/${id}`)
    .then((res) => {
      var data = res.data.data
      // alert(res.data.data)
      setPartner(data);
    })
    .catch(() => {});

  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/admin/partners">
        back to Home
      </Link>
      <h1 className="display-4">Partner Id: {id}</h1>
      <hr />
      {console.log("sda",partner)}
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {partner.link}</li>
              </ul>
    </div>
  );
};

export default ViewPartner;
