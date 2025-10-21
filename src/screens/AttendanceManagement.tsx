import React, { useState } from "react";

type Student = { name: string; reg: string };
type AttendanceStatus = "present" | "absent";
type AttendanceRecord = { [date: string]: AttendanceStatus };
type AttendanceMap = { [reg: string]: AttendanceRecord };

const AttendanceManagement: React.FC = () => {
  const [students] = useState<Student[]>([
    { name: "Kasun Perera", reg: "REG001" },
    { name: "Nimali Silva", reg: "REG002" }
  ]);
  const [attendance, setAttendance] = useState<AttendanceMap>({});
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));

  const markAttendance = (reg: string, status: AttendanceStatus) => {
    setAttendance((prev: AttendanceMap) => ({
      ...prev,
      [reg]: { ...(prev[reg] || {}), [date]: status }
    }));
  };

  const getLastRecords = (reg: string): [string, AttendanceStatus][] => {
    const records: [string, AttendanceStatus][] = attendance[reg]
      ? Object.entries(attendance[reg]) as [string, AttendanceStatus][]
      : [];
    return records.slice(-5).reverse();
  };

  return (
    <div>
      <h2>Attendance Management</h2>
      <div style={{ marginBottom: 16 }}>
        <label>Date: </label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div className="student-grid">
        {students.map((s: Student) => (
          <div key={s.reg} className="student-card">
            <h3>{s.name}</h3>
            <button className="btn-primary" onClick={() => markAttendance(s.reg, "present")}>Present</button>
            <button className="btn-primary" style={{ background: "#f44336" }} onClick={() => markAttendance(s.reg, "absent")}>Absent</button>
            <div style={{ marginTop: 8 }}>
              <b>Last 5 Records:</b>
              <ul>
                {getLastRecords(s.reg).map(([d, st], i) => (
                  <li key={i}>
                    {d}: <span style={{ color: st === "present" ? "#4caf50" : "#f44336" }}>{st.toString()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceManagement;
