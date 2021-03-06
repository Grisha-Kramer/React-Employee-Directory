import React from "react";
import user from "../Employees/Employees"
import "./style.css"

const Work = () => {
  return (
    <button onClick={handleSort()} >Sort by first name</button>
    <div className="container" styles="font-family: Montserrat">
      <div className="container" id="proj">
        <div className="col-xl text-center">
          <h1 className="title">Employee Directory</h1>
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
