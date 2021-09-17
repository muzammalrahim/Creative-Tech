import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewBanner = () => {
  const [banner, setBanner] = useState({
    title: "",
    description: "",
    link:""
 
  });
  const { id } = useParams();
  useEffect(() => {
    loadBanner();
  }, []);
  const loadBanner = async () => {
 
    get(`banner/getBanner/${id}`)
    .then((res) => {
      var data = res.data.data
      // alert(res.data.data)
      setBanner(data);
    })
    .catch(() => {});

  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Banner Id: {id}</h1>
      <hr />
      {console.log("sda",banner)}
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {banner.title}</li>
        <li className="list-group-item">Description: {banner.description}</li>
        
        <li className="list-group-item">Link: {banner.link}</li>
              </ul>
    </div>
  );
};

export default ViewBanner;
