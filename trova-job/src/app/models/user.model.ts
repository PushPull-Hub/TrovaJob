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

export class Birthday {
  constructor(public day: number, public month: number, public year: number) {}
}

type Role = 'admin' | 'user';
