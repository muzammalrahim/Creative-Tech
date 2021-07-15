import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import get, { put } from "../../helper/api";

const EditProject = () => {
  let history = useHistory();
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState({
    title: "",
    description: "",
    ref1: "",
    ref2: "",
    ref3: "",
  });
  const [loading, isLoading] = useState(false);

  const onInputChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    put(`user/update-user/${id}`, portfolio);
    loadPortfolio();
    history.push("/projects");
  };

  const loadPortfolio = () => {
    isLoading(true);
    get(`user/getUser/${id}`)
      .then((res) => {
        var data = res.data.data;
        console.log("oops", data);
        isLoading(false);
        // alert(res.data.data)
        setPortfolio(data);
      })
      .catch(() => {});
  };
  const { title, description, ref1, ref2, ref3 } = portfolio;
  return loading ? (
    "loading..."
  ) : (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Portfolio</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="ref1"
              value={ref1}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="ref2"
              value={ref2}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="ref3"
              value={ref3}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Project</button>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
