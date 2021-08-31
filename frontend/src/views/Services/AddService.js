import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"
import UploadImages from './UploadImages'


export default function AddService () {
  let history = useHistory();
  const[imagess,setImagess]=useState([])
  const [service, setService] = useState({
    title: "",
    description: "",
    
  });

  const { title, description } = service;
  const onInputChange = e => {
    setService({ ...service, [e.target.name]: e.target.value });
  };
    const deleteimage =(name)=>{

       const imgdta= imagess.filter((data)=>data.name!==name)
setImagess(imgdta)
    }
  const getImages = (images) => {
    console.log("images passed:",images)
   const imageddata=[...imagess]
   images.map((data)=>imageddata.push({url:URL.createObjectURL(data),name:data.name}))
    setImagess(imageddata)
  };
  
  const onSubmit = async e => {
    e.preventDefault();
    // const imagenames=imagess.map((data)=>"/images/"+data.name)
    // console.log({imagenames})
    post("service/save-service",service)
    .then((res) => {
      var data = res.data.data
      setUser(data);
    })
    .catch(() => {});
    history.replace("/services");
  };
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
              <UploadImages  getImagedata={(image)=>getImages(image)} />
          {imagess.map((data)=>(
            <img src={data.url} style={{height:"80px",width:"80px"}} onClick={()=>deleteimage(data.name)}/>
          ))}
              </div>
            </div>
          <button type='submit' className="btn btn-primary btn-block">Add Service</button>
        </form>
   

         
      
         
       
   


     
      </div>
    </div>
  );
}

