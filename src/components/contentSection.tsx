import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../screens/Dashboard.tsx";
import StudentManagement from "../screens/StudentManagement.tsx";
import AttendanceManagement from "../screens/AttendanceManagement.tsx";
import MarksEntry from "../screens/MarksEntry.tsx";
import PerformanceReports from "../screens/PerformanceReports.tsx";

const ContentSection = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/students" element={<StudentManagement />} />
    <Route path="/attendance" element={<AttendanceManagement />} />
    <Route path="/marks" element={<MarksEntry />} />
    <Route path="/reports" element={<PerformanceReports />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default ContentSection;
