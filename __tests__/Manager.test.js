const Manager = require('../lib/Manager.js')

test('creates an manager object', () => {
  const manager = new Manager('Michelle', '1', 'michelle@work.com', '808', 'Manager');

  expect(manager).toEqual(expect.any(Object));
  expect(manager.name).toEqual('Michelle');
  expect(manager.id).toEqual('1');
  expect(manager.email).toEqual('michelle@work.com');
  expect(manager.officeNumber).toEqual('808');
  expect(manager.role).toEqual('Manager');
}); 

test('checks if able to get role', () => {
  const manager = new Manager('Michelle', '1', 'michelle@work.com', '808', 'Manager');

  expect(manager.getRole()).toEqual('Manager');
}); 
