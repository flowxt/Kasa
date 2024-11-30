import React, { useEffect, useState } from "react";
import cardData from "../data/data.json";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cardData);
    console.log(cardData);
  }, []);

  return (
    <div className="cards-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.cover} alt={item.title} />
          <div className="card-title">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;
