import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import get,{del} from "../../helper/api"
import { makeStyles } from "@material-ui/core/styles";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import View from "@material-ui/icons/Visibility";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

const Team = () => {
  const [portfolios, setPortfolios] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    loadPortfolio();
  }, []);

  // const deletePortfolio =(id) => {
  //   del(`team/deletemember/${id}`);
  //   setPortfolios([]);
  //     loadPortfolio([]);
  // };

  const deletePortfolio = (id) => {
    del(`team/deletemember/${id}`)
      .then((res) => {
        loadPortfolio();
      })
      .catch((error) => {});
  };

  const loadPortfolio =() => {
     get("team/teams")
    .then((res) => {
      var data = res.data?.data
     setPortfolios(data);
    })
    .catch(() => {});   
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="py-4">
          <h1>Team Page</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Skills</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {portfolios?.map((portfolio, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{portfolio.name}</td>
                  <td>{portfolio.designation}</td>
                  <td>{portfolio?.skills}</td>

                  <td>
                    <Tooltip
                      id="tooltip-top"
                      title="View"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Link to={`/admin/detailmember/${portfolio._id}`}>
                        <IconButton
                          aria-label="View"
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
                      <Link to={`/admin/updatemember/${portfolio._id}`}>
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
                      <Link to="team" onClick={() => deletePortfolio(portfolio._id)}>
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

export default Team;
