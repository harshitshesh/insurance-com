import React, { useState } from "react";
import jsPDF from "jspdf";
import "../styles.css";

const AgentDashboard = () => {
  const [createdPolicies, setCreatedPolicies] = useState([]);
  const [form, setForm] = useState({ type: "", premium: "", coverage: "" });

  const handleCreate = () => {
    if (!form.type || !form.premium || !form.coverage) return;
    setCreatedPolicies([...createdPolicies, form]);
    setForm({ type: "", premium: "", coverage: "" });
  };

  const downloadReport = () => {
    const doc = new jsPDF();
    doc.text("Insurance Report", 10, 10);
    createdPolicies.forEach((p, idx) => {
      doc.text(`${idx + 1}. ${p.type} - ₹${p.premium}`, 10, 20 + idx * 10);
    });
    doc.save("report.pdf");
  };

  return (
    <div className="container tall">
      <h1 className="title purple">Agent Dashboard</h1>
      <div className="card">
        <h2 className="card-title">Create Policy</h2>
        <input
          className="input"
          placeholder="Policy Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <input
          className="input"
          placeholder="Premium Amount"
          value={form.premium}
          onChange={(e) => setForm({ ...form, premium: e.target.value })}
        />
        <input
          className="input"
          placeholder="Coverage Details"
          value={form.coverage}
          onChange={(e) => setForm({ ...form, coverage: e.target.value })}
        />
        <button className="btn purple" onClick={handleCreate}>Create</button>
      </div>

      <div className="card">
        <h2 className="card-title">Policies Created</h2>
        {createdPolicies.map((p, idx) => (
          <div key={idx} className="policy-card">
            <p><strong>Type:</strong> {p.type}</p>
            <p><strong>Premium:</strong> ₹{p.premium}</p>
            <p><strong>Coverage:</strong> {p.coverage}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="card-title">Generate Report</h2>
        <button className="btn purple" onClick={downloadReport}>Download Report</button>
      </div>
    </div>
  );
};

export default AgentDashboard;