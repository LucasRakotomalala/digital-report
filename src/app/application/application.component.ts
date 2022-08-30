import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  
  images: Array<string> = new Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.images = [
      '/assets/exploparcs-visuel01.jpeg',
      '/assets/exploparcs-visuel02.jpeg',
      '/assets/exploparcs-visuel03.jpeg',
      '/assets/exploparcs-visuel04.jpeg'
    ];
  }

}
