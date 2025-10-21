import React, { useState } from "react";

const StudentManagement = () => {
  const [students, setStudents] = useState([
    // Example data
    { name: "Kasun Perera", reg: "REG001", year: "Year 1", status: "Active" },
    { name: "Nimali Silva", reg: "REG002", year: "Year 2", status: "Active" }
  ]);
  const [form, setForm] = useState({ name: "", reg: "", year: "Year 1" });

  const addStudent = () => {
    if (!form.name || !form.reg) return;
    setStudents([...students, { ...form, status: "Active" }]);
    setForm({ name: "", reg: "", year: "Year 1" });
  };

  return (
    <div>
      <h2>Student Management</h2>
      <div className="add-student-card">
        <h3>Add New Student</h3>
        <div className="form-grid">
          <input
            className="form-input"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="form-input"
            placeholder="Registration Number"
            value={form.reg}
            onChange={e => setForm({ ...form, reg: e.target.value })}
          />
          <select
            className="form-input"
            value={form.year}
            onChange={e => setForm({ ...form, year: e.target.value })}
          >
            <option>Year 1</option>
            <option>Year 2</option>
            <option>Year 3</option>
          </select>
        </div>
        <button className="btn-primary" onClick={addStudent}>Add Student</button>
      </div>
      <table style={{ width: "100%", marginTop: 32, background: "#fff", borderRadius: 8 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reg No</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.reg}</td>
              <td>{s.year}</td>
              <td>
                <span style={{
                  background: s.status === "Active" ? "#4caf50" : "#f44336",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: 12
                }}>{s.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagement;
