import { Component } from '@angular/core';
import {FormControl} from '@angular/forms/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private distance :FormControl;
  title = 'app works!';

  constructor() {
    this.distance = new FormControl('');
  }
}
