import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserContext } from './Context/userContext';

function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getUser, viewUser, handleUpdate } = useUserContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    getUser(id);
  }, [id, getUser]);

  useEffect(() => {
    if (viewUser) {
      setFormData({
        name: viewUser.name || '',
        email: viewUser.email || '',
        phone: viewUser.phone || '',
      });
    }
  }, [viewUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(id, formData);
    navigate("/users");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Edit User</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneInput" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phoneInput"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success">Update</button>
            <button onClick={() => navigate("/users")} className="btn btn-secondary ms-2">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
