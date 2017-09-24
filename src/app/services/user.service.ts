import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): User[] {
    const users = localStorage['users'];
    return users ? JSON.parse(users) : [];
  }

  createUser(user: User): void {
    const users = this.getUsers();
    user.id = new Date().getTime();
    users.push(user);
    localStorage['users'] = JSON.stringify(users);
  }

  searchUsingID(id: number): User {
    const users: User[] = this.getUsers();
    return users.find(user => user.id === id);
  }

  updateUser(user: User): void {
    const users: User[] = this.getUsers();
    users.forEach((obj, index, objs) => {
      if (user.id === obj.id) {
        objs[index] = user;
      }
  });
  localStorage['users'] = JSON.stringify(users);
  }

  deleteUser(id: number): void {
    let users: User[] = this.getUsers();
    users = users.filter(user => user.id !== id);
    localStorage['users'] = JSON.stringify(users);
  }

  private isPresident(id: number): void {
    const users: User[] = this.getUsers();
    users.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].isPresident = !obj.isPresident;
      }
    });
    localStorage['users'] = JSON.stringify(users);
  }
}
