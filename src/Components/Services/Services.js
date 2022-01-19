import React from 'react';
import {Link, Outlet} from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <nav>
        <Link to="/services/front">Front-end</Link>
        <Link to="/services/back">Back-end</Link>
      </nav>
      <Outlet />
    </div>
  );
}
