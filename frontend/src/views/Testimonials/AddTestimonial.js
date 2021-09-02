import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"
import UploadImages from './UploadImages'


export default function AddTestimonial () {
  let history = useHistory();
  const[imagess,setImagess]=useState([])
  const [testimonial, setTestimonial] = useState({
   description: "",
   name:"",
   designition:""
    
  });

  const {  description , name , designition } = testimonial;
  const onInputChange = e => {
    setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
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
    post("testimonial/save-testimonial",testimonial)
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
              <UploadImages  getImagedata={(image)=>getImages(image)} />
          {imagess.map((data)=>(
            <img src={data.url} style={{height:"80px",width:"80px"}} onClick={()=>deleteimage(data.name)}/>
          ))}
              </div>
            </div>
          <button type='submit' className="btn btn-primary btn-block">Add Testimonial</button>
        </form>
   

         
      
         
       
   


     
      </div>
    </div>
  );
}

