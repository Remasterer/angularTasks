import { Component, OnInit } from '@angular/core';
import {IUser} from './user.interface';
import {User} from './user.model';
@Component({
  selector: 'app-users-functional',
  templateUrl: './users-functional.component.html',
  styleUrls: ['./users-functional.component.css']
})
export class UsersFunctionalComponent implements OnInit {
  users: Array<IUser> = [];
  registerLogin: string;
  registerPassword: string;
  registerEmail: string;
  isUserEditing = false;
  userEditingId: number;
  constructor() { }

  ngOnInit(): void {
  }
  addUser(): void{
  this.users.push(new User(this.registerLogin, this.registerPassword, this.registerEmail));
  this.registerLogin = '';
  this.registerPassword = '';
  this.registerEmail = '';
  }
  editUser(index): void{
    this.registerLogin = this.users[index].login;
    this.registerPassword = this.users[index].password;
    this.registerEmail = this.users[index].email;
    this.isUserEditing = true;
    this.userEditingId = index;
  }
  deleteUser(index): void{
    this.users.splice(index, 1);
  }
  saveUserEdit(): void{
    this.isUserEditing = false;
    this.users[this.userEditingId].login = this.registerLogin;
    this.users[this.userEditingId].password = this.registerPassword;
    this.users[this.userEditingId].email = this.registerEmail;
  }
}
