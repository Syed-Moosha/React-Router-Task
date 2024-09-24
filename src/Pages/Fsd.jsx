import React from "react";
import Cards from "../Components/Card/Cards";
const Fsd = ({ data }) => {
  const fsddata = data.filter((ele) => ele.course === "Full Stack Development");
  return (
    <div>
      <h1 className="text-center ">Full Stack Developer</h1>
      <div className="container">
        <div className="row">
          {fsddata.map((element, index) => {
            // console.log(fsddata);
            return <Cards element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Fsd;
