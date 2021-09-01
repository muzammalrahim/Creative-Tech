import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"
import UploadImages from './UploadImages'


export default function AddTeam () {
  let history = useHistory();
  const[imagess,setImagess]=useState([])
  const [team, setTeam] = useState({
    name: "",
    designation: "",
    linkedin:""
    
  });

  const { name, designation , linkedin } = team;
  const onInputChange = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
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
    post("team/addteam",team)
    .then((res) => {
      var data = res.data.data
      setTeam(data);
    })
    .catch(() => {});
    history.replace("/team");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Team</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Designation"
              name="designation"
              value={designation}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter LinkedIn"
              name="linkedin"
              value={linkedin}
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
          <button type='submit' className="btn btn-primary btn-block">Add Team</button>
        </form>
      </div>
    </div>
  );
}

