import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"
import UploadImages from './UploadImages'
// import app from '../../firebase/firebase'
// import firebase from 'firebase/app';
import firebase from '../../firebase/firebase'

export default function AddTestimonial () {
  // const storage = firebase.getStorage(app);
  let history = useHistory();
  const[imagess,setImagess]=useState([])
  const[progress , setProgress] = useState(0);
  const[downloadURL , setDownloadURL] = useState(null)
  const [testimonial, setTestimonial] = useState({
   description: "",
   name:"",
   designition:""
    
  });


  const {  description , name , designition } = testimonial;
  const onInputChange = e => {
    setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
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
    e.preventDefault();
   

  post("testimonial/save-testimonial",{description: testimonial.description,name:testimonial.name, designition:testimonial.designition, image:downloadURL })
  .then((res) => {
    var data = res.data.data
    setTestimonial(data);
  })
  .catch(() => {});
  history.replace("/testimonials");

   

  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A testimonial</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Designition"
              name="designition"
              value={designition}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          <div>
              <div className="card-header">
                Multiple Image Upload Preview
              </div>
              <div className="card-body">
              {/* <UploadImages  getImagedata={(image)=>getImages(image)} /> */}
              

              
            
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

          {/* {imagess.map((data)=>(
            <img src={data.url} style={{height:"80px",width:"80px"}} onClick={()=>deleteimage(data.name)}/>
          ))} */}
              </div>
            </div>
          <button type='submit' className="btn btn-primary btn-block">Add Testimonial</button>
        </form>
   

         
      
         
       
   


     
      </div>
    </div>
  );
}

