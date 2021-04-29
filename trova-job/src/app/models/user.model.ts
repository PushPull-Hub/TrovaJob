export class User extends Object {
  id: string;
  email: string;
  password: string;
  username: string;
  role: Role;
  adress: string;
  birthday: Birthday;
  phoneNumber: number;
}

interface Birthday {
  day: number;
  month: number;
  year: number;
}

type Role = 'admin' | 'user';
