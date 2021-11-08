import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import get, { put } from "../../helper/api";

import firebase from '../../firebase/firebase'

const EditProject = () => {
  let history = useHistory();
  const { id } = useParams();
  const [imagess, setImagess] = useState([]);const [image2, setImage2] = useState([]);

  const[progress , setProgress] = useState(0);
  const[progress2 , setProgress2] = useState(0);
  const[downloadURL , setDownloadURL] = useState(null);
  
  const[downloadURL2 , setDownloadURL2] = useState(null)
  const [portfolio, setPortfolio] = useState({
    title: "",
    description: "",
    link:"",
  });
  const [loading, isLoading] = useState(false);

  const onInputChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

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
  const handleUpload2 = (e) => {
    e.preventDefault()
    let file = image2;
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var uploadTask = storageRef.child('images/' + file.name).put(file);
  
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>{
        var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
        setProgress2(progress)
      },(error) =>{
        throw error
      },() =>{
        // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
  
        uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
          setDownloadURL2(url)
        })
      document.getElementById("file").value = null
  
     }
   ) 
   
  }
 
 



  const onSubmit = async (e) => {
    e.preventDefault();
    put(`user/update-user/${id}`,{title:portfolio.title,description:portfolio.description,link:portfolio.link, image:downloadURL});
    loadPortfolio();
    history.push("/projects");
  };

  const loadPortfolio = () => {
    isLoading(true);
    get(`user/getUser/${id}`)
      .then((res) => {
        var data = res.data.data;
        isLoading(false);
        // alert(res.data.data)
        setPortfolio(data);
        setDownloadURL(data.image);
      })
      .catch(() => {});
  };
  const { title, description, link } = portfolio;
  return loading ? (
    "loading..."
  ) : (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Portfolio</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="link"
              value={link}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="card-body">
<<<<<<< HEAD
             
             <div className='row'>
                 <div className='col-9'><input type="file" id="file" onChange={(e)=>{
                 if(e.nativeEvent.target.files[0]){
 
                  setImagess(e.nativeEvent.target.files[0])
                  console.log("iameee",e)
                   
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
                 <br/>
                <br/>
                <div className='col-9'><input type="file" id="file" onChange={(e)=>{
                if(e.nativeEvent.target.files[0]){

                 setImage2(e.nativeEvent.target.files[0])
                 console.log("iameee",e)
                  
                }

              }}  />
                {progress2}
              </div>
                <div className='col-3'>
                <button
                        className="btn btn-success btn-sm ml-5 "

                        
                        onClick={(e)=>handleUpload2(e)}
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
           <br/>
        <br/>
        <img
          className="ref"
          src={downloadURL2 || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
             </div>
=======
            <img
              className="ref"
              src={downloadURL || "https://via.placeholder.com/400x300"}
              alt="Uploaded Images"
              height="300"
              width="400"
            />
            <div className="row">
              <div className="col-9">
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    if (e.nativeEvent.target.files[0]) {
                      setImagess(e.nativeEvent.target.files[0]);
                    }
                  }}
                />
                {progress}
              </div>
              <div className="col-3">
                <button
                  className="btn btn-success btn-sm ml-5 "
                  onClick={(e) => handleUpload(e)}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
>>>>>>> d11fc60135dd152a9b51cedb2c5fc76142edfe17
          <button className="btn btn-warning btn-block">Update Project</button>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
