import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import get,{put} from "../../helper/api"

const EditTeam = () => {
  let history = useHistory();
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState({
    name: "",
    designation: "",
    linkedin:""
   
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
    put(`team/updatemember/${id}`, portfolio);
    loadPortfolio()
    history.push("/team");
  };

  const loadPortfolio =  () => {
  isLoading(true)
    get(`team/detailmember/${id}`)
    .then((res) => {
      var data = res.data.data
      console.log("oops",data)
      isLoading(false)
      // alert(res.data.data)
      setPortfolio(data);
    })
    .catch(() => {});
  };
  const { name, designation , linkedin} = portfolio;
  return (
   
    loading ?"loading...": <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Team</h2>
        <form onSubmit={e => onSubmit(e)}>
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
              placeholder="Enter designation"
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
                    <button className="btn btn-warning btn-block">Update Team</button>
        </form>
      </div>
    </div> 
  );
};

export default EditTeam;
