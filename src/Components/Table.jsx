import React from "react";
import { useUserContext } from "./Context/userContext";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();
  const { data, handleDelete } = useUserContext();

  const handleView = (id) => {
    navigate(`/users/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit/users/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Employee List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleView(user.id)}
                    className="btn btn-info btn-sm mx-1"
                  >
                    <i className="bi bi-eye-fill"></i>
                  </button>
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="btn btn-warning btn-sm mx-1"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger btn-sm mx-1"
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
