import React from 'react';
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <h1>Welcome to the home</h1>
      <Link
        to="/contact"
        state={"test"}
      >Contact</Link>
    </div>
  )
}
