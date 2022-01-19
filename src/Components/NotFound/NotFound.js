import React from 'react';
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
    )
}
