import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-find-case-results',
  templateUrl: './find-case-results.page.html',
  styleUrls: ['./find-case-results.page.scss'],
})
export class FindCaseResultsPage implements OnInit {

  filteredData: Array<any>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSearchedResults();
  }

  // Function to get pushed  searched results data to the page 
  getSearchedResults() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.filteredData = JSON.parse(res.value);
    });
  }

  // Function to push data to a detail page
  goToFoundCaseDetailsPage(data: any){
    this.router.navigate(['/find-case-details'],{
    queryParams: {
       value : JSON.stringify(data)
      },
    });
  }

}
