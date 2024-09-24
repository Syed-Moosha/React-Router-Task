import React from "react";
import Cards from "../Components/Card/Cards";
const CyberSecurity = ({ data }) => {
  const cs = data.filter((ele) => ele.course === "CyberSecurity");
  return (
    <div>
      <h1 className="text-center ">Cyber Security</h1>
      <div className="container">
        <div className="row">
          {cs.map((element, index) => {
            // console.log(cs);
            return <Cards element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
