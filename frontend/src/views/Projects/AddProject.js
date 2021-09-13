import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { post } from "../../helper/api";
import UploadImages from "./UploadImages";
// import axios from "../../config/axiosConfig";
// import image from '../../assets/img/portfolio-images/'

export default function AddProject() {
  let history = useHistory();
  const [imagess, setImagess] = useState([]);
  const [user, setUser] = useState({
    title: "",
    description: "",
    link:""
  });

  const { title, description, link } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
 
  // const posting = () => {
  //   post("user/save-user", user)
  //     .then((res) => {
  //       var data = res.data.data;
  //       setUser(data);
  //     })
  //     .catch(() => {});
  //   history.push("/projects");
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const imagenames=imagess.map((data)=>"/images/"+data.name)
    // console.log({imagenames})
    post("user/save-user",user)
    .then((res) => {
      var data = res.data.data
      setUser(data);
    })
    .catch(() => {});
    history.replace("/projects");
    // const imagenames = imagess.map((data) => "/images/" + data.name);
    // console.log({ imagenames });
    // posting();
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Project</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your project title"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your  project description"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website ref3"
              name="link"
              value={link}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <div> */}
            <div className="card-header">Multiple Image Upload Preview</div>
            <div className="card-body">
              <UploadImages getImagedata={(image) => getImages(image)} />
              {imagess.map((data) => (
                <img
                  src={data.url}
                  style={{ height: "80px", width: "80px" }}
                  onClick={() => deleteimage(data.name)}
                />
              ))}
            </div>
          <button type='submit' className="btn btn-primary btn-block">Add Project</button>
        </form>
      </div>
    </div>
  );
}
