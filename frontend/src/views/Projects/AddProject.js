import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { post } from "../../helper/api";
import UploadImages from "./UploadImages";

import firebase from '../../firebase/firebase'
// import axios from "../../config/axiosConfig";
// import image from '../../assets/img/portfolio-images/'

export default function AddProject() {
  let history = useHistory();
  const [imagess, setImagess] = useState([]);
  const[progress , setProgress] = useState(0);
  const[downloadURL , setDownloadURL] = useState(null)
  const [user, setUser] = useState({
    title: "",
    description: "",
    link:""
  });

  const { title, description, link } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault()
    let file = imagess;
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var uploadTask = storageRef.child('images/' + file.name).put(file);
  
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>{
        var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
        setProgress(progress)
      },(error) =>{
        throw error
      },() =>{
        // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
  
        uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
          setDownloadURL(url)
        })
      document.getElementById("file").value = null
  
     }
   ) 
   
  }
 
 


  const onSubmit = async (e) => {
    e.preventDefault();
   
    post("user/save-user",{title:user.title,description:user.description,link:user.link, image:downloadURL})
    .then((res) => {
      var data = res.data.data
      setUser(data);
    })
    .catch(() => {});
    history.replace("/projects");
    // const imagenames = imagess.map((data) => "/images/" + data.name);
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
             
            <div className='row'>
                <div className='col-9'><input type="file" id="file" onChange={(e)=>{
                if(e.nativeEvent.target.files[0]){

                 setImagess(e.nativeEvent.target.files[0])
                  
                }

              }}  />
                {progress}
              </div>
                <div className='col-3'>
                <button
                        className="btn btn-success btn-sm ml-5 "

                        
                        onClick={(e)=>handleUpload(e)}
                      >
                        Upload
                      </button>
                </div>

              </div>
                
             
              
                           <img
          className="ref"
          src={downloadURL || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
            </div>
          <button type='submit' className="btn btn-primary btn-block">Add Project</button>
        </form>
      </div>
    </div>
  );
}
