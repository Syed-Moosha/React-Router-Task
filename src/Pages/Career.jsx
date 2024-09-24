import React from "react";
import Cards from "../Components/Card/Cards";
const Career = ({ data }) => {
  const car = data.filter((ele) => ele.course === "Career");
  return (
    <div>
      <h1 className="text-center ">Career</h1>
      <div className="container">
        <div className="row">
          {car.map((element, index) => {
            console.log(car);
            return <Cards element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
