import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-case-details',
  templateUrl: './find-case-details.page.html',
  styleUrls: ['./find-case-details.page.scss'],
})
export class FindCaseDetailsPage implements OnInit {
  
  caseDetail: any;
  caseData: Array<any> = [
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Judgement'
    },
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Ruling'
    },
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Hearing'
    },
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Judgement'
    },
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Mentioning'
    },
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Hearing'
    },
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Judgement'
    },
    {
      date: '18th May 2019 , 0.900',
      charge:'Theft',
      sittingType: 'Judgement'
    }
  ]

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCaseDetails();
  }


  getCaseDetails() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.caseDetail = JSON.parse(res.value);
    });
  }

}
