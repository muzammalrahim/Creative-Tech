import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {post} from "../../helper/api"


export default function AddFaq () {
  let history = useHistory();
  const [faq, setFaq] = useState({
    title: "",
    description: "",
    
  });

  const { title, description } = faq;
  const onInputChange = e => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };
    
  
  
  const onSubmit = async e => {
    e.preventDefault();
    // const imagenames=imagess.map((data)=>"/images/"+data.name)
    post("faq/save-faq",faq)
    .then((res) => {
      var data = res.data.data
      setFaq(data);
    })
    .catch(() => {});
    history.replace("/faq");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Faq</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Question"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Answer"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
         
          <button type='submit' className="btn btn-primary btn-block">Add Faq</button>
        </form>
   

         
      
         
       
   


     
      </div>
    </div>
  );
}

