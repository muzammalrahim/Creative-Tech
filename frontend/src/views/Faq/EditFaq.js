import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import get,{put} from "../../helper/api"

const EditFaq = () => {
  let history = useHistory();
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState({
    title: "",
    description: ""
   
  });
const [loading,isLoading]=useState(false)
  
  const onInputChange = e => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    put(`faq/update-faq/${id}`, portfolio);
    loadPortfolio()
    history.push("/faq");
  };

  const loadPortfolio =  () => {
  isLoading(true)
    get(`faq/getFaq/${id}`)
    .then((res) => {
      var data = res.data.data
      console.log("oops",data)
      isLoading(false)
      // alert(res.data.data)
      setPortfolio(data);
    })
    .catch(() => {});
  };
  const { title, description} = portfolio;
  return (
   
    loading ?"loading...": <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Faq</h2>
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
                    <button className="btn btn-warning btn-block">Update Faq</button>
        </form>
      </div>
    </div> 
  );
};

export default EditFaq;
