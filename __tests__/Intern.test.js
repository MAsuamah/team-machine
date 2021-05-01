const Intern = require('../lib/Intern.js')

test('creates an intern object', () => {
  const intern = new Intern('Jeannie', '2', 'jeannie@school.com', 'University of Toronto', 'Intern');

  expect(intern).toEqual(expect.any(Object));
  expect(intern.name).toEqual('Jeannie');
  expect(intern.id).toEqual('2');
  expect(intern.email).toEqual('jeannie@school.com');
  expect(intern.school).toEqual('University of Toronto');
  expect(intern.role).toEqual('Intern');
}); 


test('checks if able to get school', () => {
  const intern = new Intern('Jeannie', '2', 'jeannie@school.com', 'University of Toronto', 'Intern');

  expect(intern.getSchool()).toEqual('University of Toronto');
}) 

test('checks if able to get role', () => {
  const intern = new Intern('Jeannie', '2', 'jeannie@school.com', 'University of Toronto', 'Intern');

  expect(intern.getRole()).toEqual('Intern');
}) 