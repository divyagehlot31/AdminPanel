import React from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const {name} = useParams()
 const {username , key } = useOutletContext();
   const id = 1;

  // list : '/admin'
  // /admin/add
  // /admin/edit/:id

  return (
    <div>
      <h2>Home Page </h2>
      <h2>UseOutlet context {username} : {key}</h2>
      <h2>useParams Hook</h2>
      <h3>Hii {name}</h3>
      <button onClick={() => navigate('/about' , {state: {id:id}})}>
        Go to About Page
      </button>
{/* 
      []?.map((d) => {

        <div>{d?.name}</div>
        <button onClick={() => navigate(allrouter.addStackup)}>edit</button>
      }) */}
    </div>
  );
}
