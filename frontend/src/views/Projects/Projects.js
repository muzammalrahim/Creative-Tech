import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import get, { del } from "../../helper/api";
import SingleProject from "./SingleProject";
import "./projects.css";

const Projects = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    loadPortfolio();
  }, []);

  const deletePortfolio = (id) => {
    del(`user/remove-user/${id}`);
    setPortfolios([])
    loadPortfolio([]);
  };

  const loadPortfolio = () => {
    get("user/users")
      .then((res) => {
        var data = res.data?.data;
        setPortfolios(data);
      })
      .catch(() => {});
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="py-4">
          <h1>Portfolio Page</h1>
            {portfolios?.map((portfolio, index) => (
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{portfolio.title}</td>
                    <td>{portfolio.description}</td>
                    <td>{portfolio.link}</td>
                    
                    <td>
                      <Link className="btn btn-primary mr-2" to={`/view-project/${portfolio._id}`}>
                        View
                      </Link>
                      <Link className="btn btn-primary mr-2" to={`/edit-project/${portfolio._id}`}>
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
           
              // return (
              //   <div key={portfolio.id}>
              //     <div className="projects__card">
              //       <img
              //         src={portfolio.images}
              //         alt=""
              //         className="projects__image"
              //         width="100px"
              //         height="100px"
              //       />
              //       <h3 className="projects__title">{portfolio.title}</h3>
              //       <p className="projects__description">
              //         {portfolio.description}
              //       </p>
              //       <p className="projects__email">{portfolio.link}</p>
              //       <Link
              //         className="btn btn-primary mr-2"
              //         to={`/view-project/${portfolio._id}`}
              //       >
              //         View
              //       </Link>
              //       <Link
              //         className="btn btn-primary mr-2"
              //         to={`/edit-project/${portfolio._id}`}
              //       >
              //         Edit
              //       </Link>
              //       {console.log("id:", portfolio._id)}
              //       <Link
              //         className="btn btn-danger"
              //         onClick={() => deletePortfolio(portfolio._id)}
              //       >
              //         Delete
              //       </Link>
              //     </div>
              //     {/* <div key={index}>
              //     Title: {portfolio.title}
              //     Description:{portfolio.description}
              //   </div> */}
              //     {/* 
              //   <SingleProject
              //     key={index}
              //     title={portfolio.title}
              //     description={portfolio.description}
              //     email={portfolio.ref1}
              //     phone={portfolio.ref2}
              //     website={portfolio.ref3}
              //     // email={portfolio.email}
              //     // image={portfolio.image[index]}
              //   /> */}
              //   </div>
              // );
  ))}
          </div>
        </div>
      </div>
   
  );
};

export default Projects;
