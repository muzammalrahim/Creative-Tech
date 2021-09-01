import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewTeam = () => {
  const [team, setTeam] = useState({
    name: "",
    designation: "",
    linkedin:""
 
  });
  const { id } = useParams();
  useEffect(() => {
    loadService();
  }, []);
  const loadService = async () => {
 
    get(`team/detailmember/${id}`)
    .then((res) => {
      var data = res.data.data
      // alert(res.data.data)
      setTeam(data);
    })
    .catch(() => {});

  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Team Id: {id}</h1>
      <hr />
      {console.log("sda",service)}
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {Team.name}</li>
        <li className="list-group-item">Designation: {Team.designation}</li>
        
        <li className="list-group-item">LinkedIn: {Team.linkedin}</li>
              </ul>
    </div>
  );
};

export default ViewTeam;
