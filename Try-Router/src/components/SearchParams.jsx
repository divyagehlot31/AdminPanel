import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchParams() {

  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const sub = searchParams.getAll("sub");

  const is = searchParams.has("id");

 

//use entries method

    const entries = Array.from(searchParams.entries()).map(([key, value]) => {
        return { key, value };
        }
    );
    console.log(entries);

    //delete param

    const deleteParam = () => {
        searchParams.delete("id");
        setSearchParams(searchParams);
    }

    //foreach 
    searchParams.forEach((value, key) => {
        console.log(`foreach method , ${key} = ${value}`);
      });
      
//keys method
for (let key of searchParams.keys()) {
    console.log('Key:', key);
  }
//values method
for (let value of searchParams.values()) {
    console.log('Value:', value);
  }
  
  //sort method
  searchParams.sort(); 
console.log(searchParams.toString());

//append method
searchParams.append("sub", "d");

  return (
    <div>
      <h1>useSearchParams Hooks Methodes</h1>
      <h1>Id is ? {is ? "true" : "false"}</h1>
      <h1>id is {id}</h1>
      <h1>name is {name}</h1>
      <h1>sub is {sub.join(", ")}</h1>
      <h2>query string: {searchParams.toString()}</h2>


      <button
        onClick={() =>
          setSearchParams({ id: 1, name: "divya", sub: ["a", "b", "c"] })
        }
      >
        Set Search Params
      </button>

      <button onClick={()=>{deleteParam()}}>
        Delete Id Param 
        </button>
    </div>
  );
}

export default SearchParams;
