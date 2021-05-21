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

export class Birthday extends Object {
  public day: number;
  public month: number;
  public year: number;
  // constructor(public day: number, public month: number, public year: number) {}
}

export type Role = 'admin' | 'user' | 'company';
