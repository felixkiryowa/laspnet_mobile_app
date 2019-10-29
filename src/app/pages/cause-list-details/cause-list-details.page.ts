import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cause-list-details',
  templateUrl: './cause-list-details.page.html',
  styleUrls: ['./cause-list-details.page.scss'],
})
export class CauseListDetailsPage implements OnInit {

  singleList: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getASingleCauseList();
  }
  
  // Function to get a single list
  getASingleCauseList() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.singleList= JSON.parse(res.value);
    });
  }

}
