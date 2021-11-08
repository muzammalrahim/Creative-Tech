import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"
import UploadImages from './UploadImages'
import firebase from '../../firebase/firebase'



export default function AddService () {
  let history = useHistory();
  const[imagess,setImagess]=useState([])
  const[progress , setProgress] = useState(0);
  const[downloadURL , setDownloadURL] = useState(null)
  const [service, setService] = useState({
    title: "",
    description: "",
    
  });

  const { title, description } = service;
  const onInputChange = e => {
    setService({ ...service, [e.target.name]: e.target.value });
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
    
  
  const onSubmit = async e => {
   
    post("service/save-service",{title:service.title,description:service.description, image:downloadURL})
    .then((res) => {
      var data = res.data.data
      setService(data);
    })
    .catch(() => {});
    history.replace("/services");
 
}
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Service</h2>
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
          
          
          <div>
              <div className="card-header">
                Multiple Image Upload Preview
              </div>
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
            </div>
          <button type='submit' className="btn btn-primary btn-block">Add Service</button>
        </form>
      </div>
    </div>
  );
}

