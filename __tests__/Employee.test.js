const Employee = require('../lib/Employee.js')


test('creates an employee object', () => {
  const employee = new Employee('John', '8', 'john@work.com', 'Employee');

  expect(employee).toEqual(expect.any(Object));
  expect(employee.name).toEqual('John');
  expect(employee.id).toEqual('8');
  expect(employee.email).toEqual('john@work.com');
  expect(employee.role).toEqual('Employee');
});


test('checks if able to get name', () => {
  const employee = new Employee('John', '8', 'john@work.com', 'Employee');

  expect(employee.getName()).toEqual('John', '8', 'john@work.com', 'Employee');
}) 

test('checks if able to get id', () => {
  const employee = new Employee('John', '8', 'john@work.com', 'Employee');

  expect(employee.getId()).toEqual('8');
}) 

test('checks if able to get email', () => {
  const employee = new Employee('John', '8', 'john@work.com', 'Employee');

  expect(employee.getEmail()).toEqual('john@work.com');
}) 

test('checks if able to get role', () => {
  const employee = new Employee('John', '8', 'john@work.com', 'Employee');

  expect(employee.getRole()).toEqual('Employee');
}) 
