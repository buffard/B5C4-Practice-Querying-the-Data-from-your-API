import React, { Component } from 'react'

class EmployeeList extends Component {
  render() {
    return (
      <section className="employees list">
      <h2 className="header">Employees</h2>
      {this.props.employees.map(employee =>
        <div key={employee.id}>
          <li>{employee.name}</li>
        </div>
      )}
    </section>
    )
  }
}

export default EmployeeList