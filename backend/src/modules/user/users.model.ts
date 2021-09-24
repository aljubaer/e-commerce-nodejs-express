import { MatchFunction } from 'types';

export default class User {
  private id: number;
  private name: string;
  private phoneNumber: string;
  private email: string;
  private password: string;
  constructor({ id, name, phoneNumber, email, password }) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
  }

  get _id() {
    return this.id;
  }

  get _email() {
    return this.id;
  }

  get _data() {
    return { id: this.id, name: this.name, phoneNumber: this.phoneNumber, email: this.email };
  }

  public async matchPassword(passwordToMatch, matchfunction: MatchFunction): Promise<boolean> {
    return await matchfunction(passwordToMatch, this.password);
  }
}
