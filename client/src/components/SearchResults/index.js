import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
    <table className="table table-dark">
      <thread>
        <Tr>
          <th>First Name</th>
          <th><button className="button button-blue" onClick={props.sortLast}></button>Last Name</th>
          <th><button className="button button-blue" onClick={props.sortDep}>Department</button></th>
        </Tr>
      </thread>
      <tbody>
        {props.employees.map(employee => {
          return(
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dep}</td>
            </tr>
          )
        }

        )}
      </tbody>


    </table>
    </div>

  )
  }
export default SearchResults;
