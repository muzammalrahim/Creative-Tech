import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import get,{del} from "../../helper/api"

const Testimonials = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    loadPortfolio();
  }, []);

  const deletePortfolio =(id) => {
    del(`testimonial/remove-testimonial/${id}`);
    setPortfolios([])
      loadPortfolio([]);
  };


  const loadPortfolio =() => {
     get("testimonial/testimonials")
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
    <div classNameName="container">
      <div classNameName="py-4">
        <h1>Testimonial Page</h1>
        <table classNameName="table border shadow">
          <thead classNameName="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Desciption</th>
              
              <th scope="col">Name</th>
              
              <th scope="col">Designition</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {portfolios?.map((portfolio, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{portfolio.description}</td>
                
                <td>{portfolio.name}</td>
                <td>{portfolio.designition}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/view-testimonial/${portfolio._id}`}>
                    View
                  </Link>
                  <Link className="btn btn-primary mr-2" to={`/edit-testimonial/${portfolio._id}`}>
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

export default Testimonials;