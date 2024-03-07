import React, { useEffect } from "react";
import { useUserContext } from "./Context/userContext";
import { useParams, useNavigate } from "react-router-dom";

function ViewUser() {
  const navigate = useNavigate();
  const { getUser, viewUser } = useUserContext();
  const { id } = useParams();

  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  if (viewUser === undefined) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (viewUser === null) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          User not found
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h2 className="m-0">User Details</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title mb-4">{viewUser.name}</h5>
          <p className="card-text">
            <strong>Email:</strong> {viewUser.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {viewUser.phone}
          </p>
        </div>
        <div className="card-footer bg-transparent">
          <button onClick={() => navigate("/users")} className="btn btn-outline-primary">
            <i className="bi bi-arrow-left"></i> Back to List
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
