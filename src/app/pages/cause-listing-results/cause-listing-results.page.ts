import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cause-listing-results',
  templateUrl: './cause-listing-results.page.html',
  styleUrls: ['./cause-listing-results.page.scss'],
})
export class CauseListingResultsPage implements OnInit {

  searchedCauseListings: Array<any>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSentCauseListings();
  }


  // Function to get searched data to this page
  getSentCauseListings() {
    this.activatedRoute.queryParams.subscribe(response => {
      this.searchedCauseListings = JSON.parse(response.value);
    })
  }

  // Function to route to a cause listing page
  goToCauseListDetailPage(causeList: any){
    this.router.navigate(['/cause-list-details'],{
      queryParams: {
         value : JSON.stringify(causeList)
        },
      });
  }

}
