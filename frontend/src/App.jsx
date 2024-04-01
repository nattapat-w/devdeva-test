import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/App/Navbar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="createUser" element={<UserPage />} />
          <Route path="editUser/:id" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
