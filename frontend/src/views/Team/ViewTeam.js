import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewTeam = () => {
  const [team, setTeam] = useState({
    name: "",
    designation: "",
    skills:""
 
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
      <Link className="btn btn-primary" to="/admin/team">
        back to Home
      </Link>
      <h1 className="display-4">Team Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {team.name}</li>
        <li className="list-group-item">Designation: {team.designation}</li>

        <li className="list-group-item">LinkedIn: {team.skills}</li>
      </ul>
    </div>
  );
};

export default ViewTeam;
