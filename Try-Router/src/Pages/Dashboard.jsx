import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Dashboard() {
    // const data = useLoaderData()
    const fetchApi = useLoaderData()
   
console.log(fetchApi)
    // useEffect(() => {
    //     console.log("Dashboard Page Loaded");
    //   }, []);
  return (
    <div>
       <h3>Dashboard page</h3> 
       {/* <h3>hello, {data.user}</h3> */}
    </div>
  )
}

export default Dashboard
