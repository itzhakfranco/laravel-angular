import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  users: Array<User> = [];
  currentUser: User = {
    id: 1,
    name: '',
    email: '',
    website: '',
    phone: '',
  };
  isEdit: boolean = false;

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  onNewUser(user: User) {
    this.users.unshift(user);
  }

  editUser(user: User) {
    this.currentUser = user;
    this.isEdit = true;
  }

  onUpdatedPost(user: User) {
    this.users.forEach((cur, index) => {
      if (user.id === cur.id) {
        this.users.splice(index, 1);
        this.users.unshift(user);
        this.isEdit = false;
        this.currentUser = {
          id: 1,
          name: '',
          email: '',
          website: '',
          phone: '',
        };
      }
    });
  }

  removeUser(user: User) {
    if (confirm('Are you sure?')) {
      this.userService.removePost(user.id).subscribe(() => {
        this.users.forEach((cur, index) => {
          if (user.id === cur.id) {
            this.users.splice(index, 1);
          }
        });
      });
    }
  }
}
