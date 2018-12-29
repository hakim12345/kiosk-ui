import {Role} from './role';

export class User {

  private id: number;
  private username: string;
  private password: string;
  private email: string;
  private roles: Role[];
}
