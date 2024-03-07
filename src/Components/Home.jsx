import React, { useState } from "react";
import { useUserContext } from "./Context/userContext";

function Home() {
  const { handleAdd } = useUserContext();
  let [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(user);
  };

  return (
    <div className="container mt-5">
      <form
        className="shadow p-4 rounded bg-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center mb-4 text-primary">Add New User</h2> 
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            placeholder="Enter the Name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            placeholder="name@example.com" 
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="tel" 
            className="form-control"
            id="phoneInput" 
            placeholder="Phone Number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-primary w-100" 
          type="submit"
        >
          Add To List
        </button>
      </form>
    </div>
  );
}

export default Home;
