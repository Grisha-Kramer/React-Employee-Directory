import React from "react";
import user from "../Employees/Employees"
import ".style.css"

const Work = () => {
  return (
    <div className="container" styles="font-family: Montserrat">
      <div className="s_container" id="proj">
        <div className="col-xl text-center">
          <h1 className="title">s & Homework</h1>
          {user.employees.map((employee) => (
            <div>
              <p>{employee.firstName}</p> 
              <p>{employee.lastName}></p>
              <p>{employee.dep} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
