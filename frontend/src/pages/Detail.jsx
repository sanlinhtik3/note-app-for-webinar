import React from "react";
import { useParams } from "react-router-dom";
import { useGetNoteQuery } from "../../features/noteApiSlice";

const Detail = () => {
   const { detail_id } = useParams();
   const {data, isLoading} = useGetNoteQuery(detail_id);
   if(isLoading) {
    return <h1>Loading detail page...</h1>
   }
  console.log(data)
  return (
    <>
      <h1>{data.description}</h1>
      <b>{data.createdAt}</b>
    </>
  );
};

export default Detail;
