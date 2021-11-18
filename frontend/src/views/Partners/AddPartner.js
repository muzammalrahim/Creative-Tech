import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"
import firebase from '../../firebase/firebase'



export default function AddPartner () {
  let history = useHistory();
  const[imagess,setImagess]=useState([])
  const[progress , setProgress] = useState(0);
  const[downloadURL , setDownloadURL] = useState(null)
  const [partner, setPartner] = useState({
    link: ""
    
  });

  const { link} = partner;
  const onInputChange = e => {
    setPartner({ ...partner, [e.target.name]: e.target.value });
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
   
    post("partner/save-partner",{link:partner.link, image:downloadURL})
    .then((res) => {
      var data = res.data.data
      setPartner(data);
      history.push("/admin/partners");
    })
    .catch(() => {});
    history.replace("/partners");
 
}
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Partner</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Partner's website link"
              name="link"
              value={link}
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
          <button type='submit' className="btn btn-primary btn-block">Add Partner</button>
        </form>
      </div>
    </div>
  );
}

