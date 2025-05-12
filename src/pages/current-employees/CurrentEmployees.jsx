import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { employees_columns } from '../../utils';

const CurrentEmployees = () => {
  const { employees } = useSelector((state) => state.employees);
  const [filteredText, setFilteredText] = useState('');

  const filteredData = employees.filter(
    item =>
      (item.firstName && item.firstName.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.lastName && item.lastName.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.birthday && item.birthday.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.startDate && item.startDate.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.street && item.street.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.city && item.city.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.state && item.state.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.zip && item.zip.toLowerCase().includes(filteredText.toLowerCase())) ||
      (item.department && item.department.toLowerCase().includes(filteredText.toLowerCase()))
  );

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className='table-container'>
        <div className='table-search'>
          <input
            type="text"
            placeholder="Search..."
            value={filteredText}
            onChange={e => setFilteredText(e.target.value)}
            style={{ marginBottom: '10px', padding: '5px' }}
          />
        </div>
        <DataTable
          columns={employees_columns}
          data={filteredData}
          pagination
          highlightOnHover
        />
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default CurrentEmployees;
