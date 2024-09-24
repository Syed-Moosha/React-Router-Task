import React from "react";

const Cards = ({ element, index }) => {
  return (
    <div
      key={element.id}
      className="cardStyle mt-md-2 mx-md-1 col-md-3 card my-4"
    >
      <img
        src={element.image}
        style={{ height: "10rem" }}
        className="card-img-top mt-2"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">
          <small className="text-body-secondary">{element.author}</small>
        </p>
        <p className="card-text">
          <small className="text-body-secondary">{element.date}</small>
        </p>
        <p className="card-text">
          <small className="text-body-secondary">{element.min}</small>
        </p>
      </div>
    </div>
  );
};

export default Cards;
