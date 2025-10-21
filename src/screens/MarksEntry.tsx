import React, { useState } from "react";

const students = [
  { name: "Kasun Perera", reg: "REG001", year: "Year 1" },
  { name: "Nimali Silva", reg: "REG002", year: "Year 2" }
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MarksEntry = () => {
  const [selected, setSelected] = useState({ reg: students[0].reg, month: months[0], year: students[0].year });
  const [marks, setMarks] = useState({ mcq: "", essay: "", classPiece: "" });

  const total = (parseInt(marks.mcq) || 0) + (parseInt(marks.essay) || 0);

  return (
    <div>
      <h2>Marks Entry</h2>
      <div className="form-grid">
        <select
          className="form-input"
          value={selected.reg}
          onChange={e => {
            const stu = students.find(s => s.reg === e.target.value);
            setSelected({ ...selected, reg: e.target.value, year: stu?.year || "" });
          }}
        >
          {students.map(s => (
            <option key={s.reg} value={s.reg}>{s.name} ({s.reg})</option>
          ))}
        </select>
        <select
          className="form-input"
          value={selected.month}
          onChange={e => setSelected({ ...selected, month: e.target.value })}
        >
          {months.map(m => <option key={m}>{m}</option>)}
        </select>
        <select
          className="form-input"
          value={selected.year}
          onChange={e => setSelected({ ...selected, year: e.target.value })}
        >
          <option>Year 1</option>
          <option>Year 2</option>
          <option>Year 3</option>
        </select>
      </div>
      <div className="marks-grid">
        <div>
          <label>MCQ (out of 40)</label>
          <input className="form-input" type="number" value={marks.mcq} onChange={e => setMarks({ ...marks, mcq: e.target.value })} />
        </div>
        <div>
          <label>Essay (out of 60)</label>
          <input className="form-input" type="number" value={marks.essay} onChange={e => setMarks({ ...marks, essay: e.target.value })} />
        </div>
        <div>
          <label>Class Piece (out of 100)</label>
          <input className="form-input" type="number" value={marks.classPiece} onChange={e => setMarks({ ...marks, classPiece: e.target.value })} />
        </div>
        <div>
          <label>Total</label>
          <input className="form-input" type="number" value={total} readOnly style={{ background: "#e3f2fd", fontWeight: "bold", color: "#1565c0" }} />
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <b>Summary:</b> MCQ: {marks.mcq} | Essay: {marks.essay} | Class Piece: {marks.classPiece} | <span style={{ color: "#1565c0" }}>Total: {total}</span>
      </div>
      <button className="btn-primary" style={{ marginTop: 16 }}>Save Marks</button>
    </div>
  );
};

export default MarksEntry;
