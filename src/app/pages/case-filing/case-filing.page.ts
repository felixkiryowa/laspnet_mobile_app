import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-filing',
  templateUrl: './case-filing.page.html',
  styleUrls: ['./case-filing.page.scss'],
})
export class CaseFilingPage implements OnInit {


  criminal: boolean = true;
  civil: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  

  criminalCases() {
     this.civil = false;
     this.criminal = true;
  }

  civilCases() {
    this.civil = true;
    this.criminal = false;
  }

}
