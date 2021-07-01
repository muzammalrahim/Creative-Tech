import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"
import UploadImages from './UploadImages'

const AddProject = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    description: "",
    ref1: "",  
    ref2: "",
    ref3: ""
  });

  const { title, description, ref1, ref2, ref3 } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    post("user/save-user",user)
    .then((res) => {
      var data = res.data?.data
      setUser(data);
    })
    .catch(() => {});
    history.push("/projects");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Project</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your project title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your  project description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your ref1"
              name="ref1"
              value={ref1}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your ref2"
              name="ref2"
              value={ref2}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website ref3"
              name="ref3"
              value={ref3}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
              <div className="card-header">
                Multiple Image Upload Preview
              </div>
              <div className="card-body">
              <UploadImages/>
              </div>
            </div>
          <button className="btn btn-primary btn-block">Add Project</button>
        </form>
   

         
      
         
       
   


     
      </div>
    </div>
  );
};

export default AddProject;
