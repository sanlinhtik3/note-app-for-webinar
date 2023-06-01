import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({note}) => {
    console.log(note)
  return (
    <div className=" border rounded-xl p-7 space-y-3">
      <h1 className=" text-3xl">{note.description}</h1>
      <p className=' text-slate-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
        perferendis dignissimos tempore at possimus? Quasi inventore magni
        tenetur voluptates hic, veniam voluptatem dolores tempora vitae modi
        quis laboriosam dolor deserunt.
      </p>
      <Link to={`note/${note._id}`}  className=" bg-purple-500 w-full inline-block text-center py-2 rounded-lg text-white">
        See More
      </Link>
    </div>
  );
}

export default Card