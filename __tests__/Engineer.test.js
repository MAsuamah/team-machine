const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
  const engineer = new Engineer();

  expect(engineer).toEqual(expect.any(Object));
}) 
