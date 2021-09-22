import { MatchFunction } from 'types';

export default class User {
  private id: number;
  private email: string;
  private password: string;
  constructor({ id, email, password }) {
    this.id = id;
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
    return { id: this.id, email: this.email };
  }

  public async matchPassword(passwordToMatch, matchfunction: MatchFunction): Promise<boolean> {
    return await matchfunction(passwordToMatch, this.password);
  }
}
