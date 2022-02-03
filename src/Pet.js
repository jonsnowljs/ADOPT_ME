import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link
      to={`/details/${id}`}
      className="rounded overflow-hidden shadow-lg
    "
    >
      <div className="h-50">
        <img src={hero} alt={name} className="object-scale-down rounded" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{`${animal} - ${breed} - ${location}`}</p>
      </div>
    </Link>
  );
};

export default Pet;
