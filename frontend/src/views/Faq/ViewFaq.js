import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import get from "../../helper/api"

const ViewFaq = () => {
  const [faq, setFaq] = useState({
    title: "",
    description: "",
 
  });
  const { id } = useParams();
  useEffect(() => {
    loadFaq();
  }, []);
  const loadFaq = async () => {
 
    get(`faq/getFaq/${id}`)
    .then((res) => {
      var data = res.data.data
      // alert(res.data.data)
      setFaq(data);
    })
    .catch(() => {});

  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/admin/faq">
        back to Home
      </Link>
      <h1 className="display-4">Faq Id: {id}</h1>
      <hr />
     
      <ul className="list-group w-50">
        <li className="list-group-item">Question: {faq.title}</li>
        <li className="list-group-item">Answer: {faq.description}</li>
              </ul>
    </div>
  );
};

export default ViewFaq;
