import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin Desi',
    email: 'admind@gmail.com',
    password: bcrypt.hashSync('123321', 10),
    isAdmin: true,
  },
  {
    name: 'Getu Engdaw',
    email: 'getue@gmail.com',
    password: bcrypt.hashSync('123321', 10),
  },
  {
    name: 'Moaz Mohammed',
    email: 'moazm@gmail.com',
    password: bcrypt.hashSync('123321', 10),
  },
];

export default users;
