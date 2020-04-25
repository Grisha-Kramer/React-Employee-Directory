import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the employees.breeds array
function SearchForm(employees) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="Employee">Employee Name:</label>
        <input
          value={employees.value}
          onChange={employees.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee Name"
          id="search"
        />
        <br />
        <button
          onClick={employees.handleFormSubmit}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
