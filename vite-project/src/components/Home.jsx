// src/components/Home.js
import React, { useState } from "react";
import "../styles.css";

const policies = [
  { id: 1, type: "Life Insurance", desc: "Covers your family after your life.", img: "https://img.freepik.com/free-vector/family-protection-concept-illustration_114360-17288.jpg?ga=GA1.1.1449500055.1736427061&semt=ais_items_boosted&w=740" },
  { id: 2, type: "Health Insurance", desc: "Helps with hospital and medical costs.", img: "https://img.freepik.com/free-vector/health-insurance-concept-illustration_114360-24892.jpg?ga=GA1.1.1449500055.1736427061&semt=ais_items_boosted&w=740" },
  { id: 3, type: "Auto Insurance", desc: "Covers your vehicle against damages.", img: "https://img.freepik.com/free-vector/father-shaking-hands-with-insurance-agent_74855-4412.jpg?ga=GA1.1.1449500055.1736427061&semt=ais_items_boosted&w=740" },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const filteredPolicies = policies.filter((p) =>
    p.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (!name || !price) return;
    setSavedMessage(`Saved: ${name} - ₹${price} (${selectedPolicy.type})`);
    setName("");
    setPrice("");
    setSelectedPolicy(null);
  };

  return (
    <div className="container tall">
      {/* Hero Section */}
      <div className="hero">
        <h1>Secure Your Future with the Right Insurance</h1>
        <p>Choose the plan that best fits your needs</p>
        <img style={{borderRadius:"50px",width:"100%"

        }} src="https://img.freepik.com/premium-photo/umbrella-protects-white-family-figures-concept-protecting-family_99433-6380.jpg?ga=GA1.1.1449500055.1736427061&semt=ais_items_boosted&w=740" alt="Hero" className="hero-img" />
      </div>
      



      

      <h1 className="title blue">Insurance Management System</h1>
      <input
        className="input wide"
        placeholder="Search Policy Type (e.g., Life, Health)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card-grid">
        {filteredPolicies.map((p) => (
          <div className="card card-image" key={p.id} onClick={() => setSelectedPolicy(p)}>
            <img style={{width:"150px",height:"150px"}} src={p.img} alt={p.type} className="policy-img" />
            <h3>{p.type}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {selectedPolicy && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedPolicy.type}</h2>
            <input
              className="input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              placeholder="Insurance Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button className="btn blue" onClick={handleSave}>Save</button>
            <button className="btn grey" onClick={() => setSelectedPolicy(null)}>Close</button>
          </div>
        </div>
      )}

      {savedMessage && <p className="success-msg">{savedMessage}</p>}
    </div>
  );
};

export default Home;
