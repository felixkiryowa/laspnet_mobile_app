import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  contactUs: boolean = true;
  aboutUs: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // Function called when a user clicks the contact tab
  contact() {
    this.contactUs = true;
    this.aboutUs = false;
  }

  // Function called when a user clicks the about us tab
  about() {
    this.contactUs = false;
    this.aboutUs = true;
  }

}
