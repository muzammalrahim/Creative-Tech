import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import get, { del } from "../../helper/api";
import { makeStyles } from "@material-ui/core/styles";

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import View from "@material-ui/icons/Visibility"
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SingleProject from "./SingleProject";
import "./projects.css";
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);
const Projects = () => {
  const [portfolios, setPortfolios] = useState([]);

  const classes = useStyles();
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
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>

                <th scope="col">Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {portfolios?.map((portfolio, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{portfolio.title}</td>
                  <td>{portfolio.description}</td>
                  <td>{portfolio.link}</td>

                  <td>
                    
                    <Tooltip
                      id="tooltip-top"
                      title="View"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Link to={`/view-project/${portfolio._id}`}>
                        <IconButton
                          aria-label="Edit"
                          className={classes.tableActionButton}
                        >
                          <View
                            className={
                              classes.tableActionButtonIcon + " " + classes.view
                            }
                          />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Edit"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Link to={`/edit-project/${portfolio._id}`}>
                        <IconButton
                          aria-label="Edit"
                          className={classes.tableActionButton}
                        >
                          <Edit
                            className={
                              classes.tableActionButtonIcon + " " + classes.edit
                            }
                          />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top-start"
                      title="Remove"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Link onClick={() => deletePortfolio(portfolio._id)}>
                        <IconButton
                          aria-label="Close"
                          className={classes.tableActionButton}
                        >
                          <Close
                            className={
                              classes.tableActionButtonIcon +
                              " " +
                              classes.close
                            }
                          />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    {/* <Link
                      className="btn btn-primary mr-2"
                      to={`/edit-project/${portfolio._id}`}
                    >
                      Edit
                    </Link> */}
                    {/* <Link
                      className="btn btn-danger"
                      onClick={() => deletePortfolio(portfolio._id)}
                    >
                      Delete
                    </Link> */}
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
