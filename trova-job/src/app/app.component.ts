import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'trova-job';
  constructor() {}
  ngOnInit(): void {
    console.log(
      '  _    _                                   \n' +
        ' | |  | |                                   \n' +
        ' | |__| |   __ _   _ __ ___    ____   __ _  \n' +
        " |  __  |  / _` | | '_ ` _ \\  |_  /  / _`  |\n" +
        ' | |  | | | (_| | | | | | | |  / /  | (_| | \n' +
        ' |_|  |_|  \\__,_| |_| |_| |_| /___|  \\__,_ |'
    );
  }
}
