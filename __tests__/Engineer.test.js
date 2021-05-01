const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
  const engineer = new Engineer('Sarah', '7', 'sarah@work.com', 'sarahcodes', 'Engineer', );

  expect(engineer).toEqual(expect.any(Object));
  expect(engineer.name).toEqual('Sarah');
  expect(engineer.id).toEqual('7');
  expect(engineer.email).toEqual('sarah@work.com');
  expect(engineer.github).toEqual('sarahcodes');
  expect(engineer.role).toEqual('Engineer');
});

test('checks if able get to GitHub username', () => {
  const engineer = new Engineer('Sarah', '7', 'sarah@work.com', 'sarahcodes', 'Engineer');

  expect(engineer.getGithub()).toEqual('sarahcodes');
}); 

test('checks if able to get role', () => {
  const engineer = new Engineer('Sarah', '7', 'sarah@work.com', 'sarahcodes', 'Engineer');

  expect(engineer.getRole()).toEqual('Engineer');
}); 



