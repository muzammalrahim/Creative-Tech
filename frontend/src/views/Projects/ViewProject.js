import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewProject = (props) => {
  const [user, setUser] = useState({
    title: "",
    description: "",
    link:''
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
 
    get(`user/getUser/${id}`)
    .then((res) => {
      var data = res.data.data
      // alert(res.data.data)
      setUser(data);
    })
    .catch(() => {});

  };
  console.log("route", props.match.params)
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Project Id: {id}</h1>
      <hr />
      {console.log("sda",user)}
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.title}</li>
        <li className="list-group-item">user name: {user.description}</li>
        <li className="list-group-item">Website: {user.link}</li>
      </ul>
    </div>
  );
};

export default ViewProject;
