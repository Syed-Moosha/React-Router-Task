import React from "react";
import Cards from "../Components/Card/Cards";
const DataScience = ({ data }) => {
  const ds = data.filter((ele) => ele.course === "Data Science");
  return (
    <div>
      <h1 className="text-center ">Data Science</h1>
      <div className="container">
        <div className="row">
          {ds.map((element, index) => {
            // console.log(ds);
            return <Cards element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DataScience;
