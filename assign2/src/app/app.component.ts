import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign2app';
  username = '';
  allowButtonClick = false;
  usernameStatus = '';

  constructor() {
    if (this.username === '') {
      this.allowButtonClick = true;
    }
  }
  getUsername() {
    return this.username;
  }

  onUsernameClick(){
    this.usernameStatus  = 'Username has been accepted! Username is ' + this.username + ' Now resetting';
    this.username = '';
  }
}
