import React from 'react';
import { useLocation } from 'react-router-dom';

export default function About() {
const location = useLocation();
console.log(location.state)

  return <h2> My id is{location.state?.id} </h2>;
}
