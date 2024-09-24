import React from "react";
import Cards from "../Components/Card/Cards";

const All = ({ data }) => {
  return (
    <div>
      <h1 className="text-center ">All Course</h1>
      <div className="container">
        <div className="row">
          {data.map((element, index) => {
            return (
              /*  
                   //  Used to check the sample data  
                    <div key={element.id}>
                        <img src={element.image} />
                        <h2>{element.course}</h2>
                        <h3>{element.title}</h3>
                        <h5>{element.date}</h5>
                        <h5>{element.min}</h5>
                        </div>*/
              <Cards element={element} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default All;
