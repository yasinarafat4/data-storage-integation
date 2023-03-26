import React, { useEffect, useState } from "react";
import DisplayCosmetics from "../DisplayCosmetics/DisplayCosmetics";

const Cosmetics = () => {
  /* 1st way - Put JSON data directly
  const cosmetics = [
    {
      _id: "641f39f85c2dc3eab45101f0",
      price: 122,
      name: "Kelley Holder",
    },
    {
      _id: "641f39f82bae0213fe081f63",
      price: 447,
      name: "Simmons Valdez",
    },
    {
      _id: "641f39f8f0dd091d5eeafcbf",
      price: 145,
      name: "Gaines Murray",
    },
    {
      _id: "641f39f851565b2670ea5c5e",
      price: 351,
      name: "Ball Christian",
    },
    {
      _id: "641f39f88e3881cadd2118f5",
      price: 499,
      name: "Burke Nielsen",
    },
  ];
  */

  // 2nd way - By fetching
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("cosmetics.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  return (
    <div>
      <h1>Welcome to My Cosmetics Store</h1>
      <h2>Total Products: {cosmetics.length} </h2>

      {cosmetics.map((cosmetic) => (
        /* Previous
         <DisplayCosmetics
           key={cosmetic.id}
           id={cosmetic.id}
           name={cosmetic.name}
           price={cosmetic.price}
         ></DisplayCosmetics>
        */
        <DisplayCosmetics
          key={cosmetic._id}
          // Destructuring
          disCosmetic={cosmetic}
        ></DisplayCosmetics>
      ))}
    </div>
  );
};

export default Cosmetics;
