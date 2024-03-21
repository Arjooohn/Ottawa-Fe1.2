import React from 'react'

// importing the useState hook and useEffect
import { useState, useEffect } from "react";

import "./effectstyles.css"

// Ola Page
function Effect() {
  // using the useState hook to create a state variable for user chosen color
  const [counter, setCounter] = useState(0);
  const [counterIncrement, setCounterIncrement] = useState(1);

  // This useEffect will not reset the increment value
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter((count) => count + counterIncrement);
  //   }, 1000);
  // });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((count) => count + counterIncrement);
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts or the counter state changes
    return () => clearTimeout(timer);
  }, [counter, counterIncrement]); // Adding counter and counterIncrement as dependencies


  return (
    <div className="content">

      <h1>Name - Student Number 1</h1>
      
    </div>
  )
}

export default Effect