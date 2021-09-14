import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import get,{del} from "../../helper/api"

const Services = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    loadPortfolio();
  }, []);

  const deletePortfolio =(id) => {
    del(`service/remove-service/${id}`);
    setPortfolios([])
      loadPortfolio([]);
  };


  const loadPortfolio =() => {
     get("service/services")
    .then((res) => {
      var data = res.data?.data
      console.log("oops",data)
     setPortfolios(data);
    })
    .catch(() => {});   
  };

 

  return (
    <div>
      <Navbar/>
    <div className="container">
      <div className="py-4">
        <h1>Service Page</h1>
       
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {portfolios?.map((portfolio, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{portfolio.title}</td>
                <td>{portfolio.description}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/view-service/${portfolio._id}`}>
                    View
                  </Link>
                  <Link className="btn btn-primary mr-2" to={`/edit-service/${portfolio._id}`}>
                  Edit
                  </Link>
                {console.log("id:",portfolio._id)}
                  <Link
                    className="btn btn-danger"
                    onClick={() => deletePortfolio(portfolio._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
         </tbody>
        </table>
      </div>
    </div>
    </div>



  );
};

export default Services;
