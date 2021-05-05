export class User extends Object {
  id: string;
  email: string;
  password: string;
  username: string;
  role: Role;
  adress: string;
  birthday: Birthday;
  phoneNumber: number;

  public setUser(
    id: string,
    email: string,
    password: string,
    username: string,
    role: Role,
    adress: string,
    birthday: Birthday,
    phoneNumber: number
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.role = role;
    this.adress = adress;
    this.birthday = birthday;
    this.phoneNumber = phoneNumber;
  }
}

export class Birthday extends Object {
  public day: number;
  public month: number;
  public year: number;
  // constructor(public day: number, public month: number, public year: number) {}
}

type Role = 'admin' | 'user';
