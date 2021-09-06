import React from "react";

function SingleProject({ title, description, email, phone, website }) {
  return (
    <div className="Project row">
      <div className="col-md-4">
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{email}</p>
            <p className="card-text">{phone}</p>
            <p className="card-text">{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
