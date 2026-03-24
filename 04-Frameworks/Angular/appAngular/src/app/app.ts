import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './user/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [UserList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('appAngular');
  subtitle = signal('No entiendo una mierda pero aqui estoy 🤣')
}
