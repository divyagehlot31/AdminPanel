import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
    console.log(error);
    
  return (
    <div>
      <h3>something went wrong</h3>
        <h3>{error.message || "unknown error"}</h3>
        <NavLink to="/">Go to Home Page</NavLink>
    </div>
  )
}

export default ErrorPage
