import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'adming@e.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Test No1',
    email: 'TestNo1@e.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Test No2',
    email: 'TestNo2@e.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
