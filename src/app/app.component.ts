import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CME4402-SeniorProject-Client';
  selectorText = 'This is ';

  nameControl = new FormControl('', [Validators.required]);
}
