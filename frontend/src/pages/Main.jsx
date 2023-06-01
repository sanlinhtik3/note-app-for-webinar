import React from "react";
import { useGetNotesQuery } from "../../features/noteApiSlice";
import Card from "../components/Card";

const Main = () => {

const {data, isLoading} = useGetNotesQuery();

if(isLoading) {
  return <h1>Loading...</h1>
}

  console.log(data)


  return (
    <>
      <div>Main</div>
      <div className="grid grid-cols-3 gap-5 container mx-auto lg:px-10 xl:px-40">
        
        {data.map((note) => (
          <Card key={note._id} note={note} />
        ))}
        
      </div>
    </>
  );
};

export default Main;
