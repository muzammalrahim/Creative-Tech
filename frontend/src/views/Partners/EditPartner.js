import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import get,{put} from "../../helper/api"

import firebase from '../../firebase/firebase'

const EditPartner = () => {
  let history = useHistory();
  const { id } = useParams();
  const [imagess, setImagess] = useState([]);
  const[progress , setProgress] = useState(0);
  const[downloadURL , setDownloadURL] = useState(null)
  const [portfolio, setPortfolio] = useState({
    link: "",
  
   
  });
const [loading,isLoading]=useState(false)
  
  const onInputChange = e => {
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
 


  const onSubmit = async e => {
    e.preventDefault();
    put(`partner/update-partner/${id}`, {link:portfolio.link,image:downloadURL});
    loadPortfolio()
    history.push("/partners");
  };

  const loadPortfolio =  () => {
  isLoading(true)
    get(`partner/getPartner/${id}`)
    .then((res) => {
      var data = res.data.data
      console.log("oops",data)
      isLoading(false)
      // alert(res.data.data)
      setPortfolio(data);
    })
    .catch(() => {});
  };
  const { title} = portfolio;
  return (
   
    loading ?"loading...": <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Partner</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Partner's website link"
              name="link"
              value={portfolio.link}
              onChange={e => onInputChange(e)}
            />
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
                    <button className="btn btn-warning btn-block">Update Partner</button>
        </form>
      </div>
    </div> 
  );
};

export default EditPartner;
