import React from "react";
import { useGetNotesQuery } from "../../features/noteApiSlice";

const Main = () => {
   const {data, isLoading} = useGetNotesQuery();

   if(isLoading) {
    return <h1>Loading</h1>
   }

  console.log(data);

  return (
    <>
      <div>Main</div>
      <ul>
        {data.map((d) => {
           return <li key={d._id} >{d._id}</li>
        })}
      </ul>
    </>
  );
};

export default Main;
