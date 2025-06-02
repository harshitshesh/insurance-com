import React, { useState } from "react";
import "../styles.css";

const Profile = () => {
  const [formData, setFormData] = useState({ name: "", address: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container tall">
      <h1 className="title green">Customer Profile</h1>
      <div className="card">
        <input
          name="name"
          className="input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="address"
          className="input"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          name="phone"
          className="input"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <button className="btn green" onClick={() => setSubmitted(true)}>
          Update Profile
        </button>
        {submitted && (
          <div className="profile-message">
            <h3>Profile Updated!</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;