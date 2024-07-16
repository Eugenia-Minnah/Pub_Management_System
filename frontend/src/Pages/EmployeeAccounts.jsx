import React, { useState } from 'react';
import '../Styles/Employee.css';
import AddEmployeeForm from '../Form/AddEmployeeForm';

const initialEmployees = [
  { firstName: "Alice", lastName: "Johnson", phone: "123-456-7890", address: "123 Main St", position: "Manager" },
  { firstName: "Bob", lastName: "Smith", phone: "234-567-8901", address: "456 Oak St", position: "Chef" },
];

export const EmployeeAccounts = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const generatePIN = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Used to Generate a random 4-digit PIN for employee login
  };

  const filteredEmployees = employees.filter(emp => {
    return (
      (emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedPosition || emp.position === selectedPosition)
    );
  });
  
  const handleAddEmployee = (newEmployee) => {
    const employeeWithPIN = { ...newEmployee, pin: generatePIN() };
    setEmployees([...employees, employeeWithPIN]);
  };
  
  const handleEditEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map(emp =>
        emp.phone === updatedEmployee.phone ? updatedEmployee : emp
      )
    );
  };

  const handleRemoveEmployee = (phone) => {
    setEmployees(employees.filter(emp => emp.phone !== phone));
  };

  const openEditForm = (employee) => {
    setCurrentEmployee(employee);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setCurrentEmployee(null);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const downloadCSV = () => {
    const csvRows = [];
    const headers = ['First Name', 'Last Name', 'Phone Number', 'Address', 'Position'];
    csvRows.push(headers.join(','));
  
    employees.forEach(emp => {
      const row = [
        emp.firstName,
        emp.lastName,
        emp.phone,
        emp.address,
        emp.position,
      ];
      csvRows.push(row.join(','));
    });
  
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'employee_list.csv');
    a.click();
    URL.revokeObjectURL(url);
  };
  

  return (
    <div className="container">
      <main className="main-content">
        <section className="employees">
          <div className="employees-header">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn add-employee" onClick={() => setIsFormOpen(true)}>Add Employee</button>
            <button className="btn filters" onClick={toggleFilters}>Filters</button>

            {showFilters && (
              <div className="filter-dropdown">
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                >
                  <option value="">All Positions</option>
                  <option value="Manager">Manager</option>
                  <option value="Chef">Chef</option>
                  {/* include more positions*/}
                </select>
              </div>
            )}

            <button className="btn download" onClick={downloadCSV}>Download List</button>

          </div>

          {isFormOpen && (
            <AddEmployeeForm
              employee={currentEmployee}
              onAdd={handleAddEmployee}
              onEdit={handleEditEmployee}
              onClose={closeForm}
            />
          )}

          <table className="employees-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.address}</td>
                  <td>{employee.position}</td>
                  <td>
                    <button className="btn edit" onClick={() => openEditForm(employee)}>Edit</button>
                    <button className="btn remove" onClick={() => handleRemoveEmployee(employee.phone)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="btn prev">Previous</button>
            <span>Page 1 of 1</span>
            <button className="btn next">Next</button>
          </div>
        </section>
      </main>
    </div>
  );
};
