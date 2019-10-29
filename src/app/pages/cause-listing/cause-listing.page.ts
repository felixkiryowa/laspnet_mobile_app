import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-cause-listing',
  templateUrl: './cause-listing.page.html',
  styleUrls: ['./cause-listing.page.scss'],
})
export class CauseListingPage implements OnInit {


  findCaseListingForm: FormGroup;
  loading: any;
  disableOfficerNameField:boolean = false;
  courtLevelId: number;
  divisionId: number;
  filteredCauseList: Array<any>;


  courts: Array<any> = [
    {
      id: 1,
      court: 'Supreme Court'
    },
    {
      id:2,
      court: 'Court Of Appeal'
    },
    {
      id:3,
      court: 'High Court'
    },
    {
      id:4,
      court: 'The Industrial court'
    },
    {
      id:5,
      court: 'Chief Magistrate Court'
    }
  ]

  judicialOfficerNames : Array<any> = [
    {
      id:1,
      officer: 'Justice Bat Katurebe',

    },
    {
      id:2,
      officer: 'Justice Kiwanda Sharon'
    },
    {
      id:3,
      officer: 'Justice Kawere Fahad'
    },
    {
      id:4,
      officer: 'Justice Yada Kigongo'
    },
    {
      id: 5,
      officer: 'Justice Vladimir Kachinov'
    }
  ]

  divisions: Array<any> = [
    {
      id:1,
      division:'Anti-Corruption Division'
    },
    {
      id:2,
      division:'Civil Division'
    },
    {
      id:3,
      division:'Criminal Division'
    }
  ]

  causeListings: Array<any> = [
    {
      courtLevelId:1,
      time: '09:00',
      caseTypeId: 1,
      division: 1,
      parties: 'KAMALI ONOZIOUS VS FORT PORTAL MUNICIPAL COUNCIL',
      caseCategory: 'civil suits',
      claims: 'BREACH OF CONTRACT,DECLARATIONS, GENERAL FORT PORTALDAMAGES, SPECIAL MUNICIPAL DAMAGES & COSTS',
      sittingType: 'Hearing Plaintiffs case',
      caseNumber: 'FPT-00-CV-CS-0234-2018',
      position:'PENDING HEARING',
      judicialOfficerNameId: 3
    },
    {
      courtLevelId:1,
      time: '09:00',
      caseTypeId: 1,
      division: 1,
      parties: 'KAMALI ONOZIOUS VS FORT PORTAL MUNICIPAL COUNCIL',
      caseCategory: 'civil suits',
      claims: 'BREACH OF CONTRACT,DECLARATIONS, GENERAL FORT PORTALDAMAGES, SPECIAL MUNICIPAL DAMAGES & COSTS',
      sittingType: 'Hearing Plaintiffs case',
      caseNumber: 'FPT-00-CV-CS-0234-2018',
      position:'PENDING HEARING',
      judicialOfficerNameId: 3
    },
    {
      courtLevelId:1,
      time: '09:00',
      caseTypeId: 1,
      division: 1,
      parties: 'KAMALI ONOZIOUS VS FORT PORTAL MUNICIPAL COUNCIL',
      caseCategory: 'civil suits',
      claims: 'BREACH OF CONTRACT,DECLARATIONS, GENERAL FORT PORTALDAMAGES, SPECIAL MUNICIPAL DAMAGES & COSTS',
      sittingType: 'Hearing Plaintiffs case',
      caseNumber: 'FPT-00-CV-CS-0234-2018',
      position:'PENDING HEARING',
      judicialOfficerNameId: 3
    }

  ]


  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router

  ) {
    this.findCaseListingForm = this.formBuilder.group({
       'caseTypeId': ['', Validators.compose([Validators.required])],
       'division': ['', Validators.compose([Validators.required])],
       'courtLevelId': ['', Validators.compose([Validators.required])],
       'officerNameId': ['', Validators.compose([Validators.required])],
       'searchTerm': ['', Validators.compose([Validators.required])]  
    });
   }

  ngOnInit() {
    this.showLoading();
  }

  // Function to present an alert
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Response',
      message: 'No results found',
      buttons: ['OK'],
      cssClass: 'primary'
    });

    await alert.present();
  }

    // Function to start loading a loader
    async showLoading() {
      const loading = await this.loadingController.create({
        spinner: 'crescent',
        duration: 2000,
        message: 'Please wait...',
        translucent: true,
        cssClass: 'primary'
      });
      return await loading.present();
    }


  // Function to get a specific selected court level
    getCourt(event: any) {
      const { value } = event.detail;
      parseInt(value) === 1 || parseInt(value) === 2 ? this.disableOfficerNameField = true : this.disableOfficerNameField = false;
    }


    courtLevelChange(event: {
      component: IonicSelectableComponent,
      value: any 
    }) {
      const { id } = event.value;
      this.courtLevelId = id;
      parseInt(id) === 1 || parseInt(id) === 2 ? this.disableOfficerNameField = true : this.disableOfficerNameField = false;
    }

    DivisionChange(event: {
      component: IonicSelectableComponent,
      value: any 
    }) {
      const { id } = event.value;
      this.divisionId = id;
    }


    // Function to filter out data with respect to users inputs
    viewCaseListing() {
      const { caseTypeId, officerNameId, searchTerm  } = this.findCaseListingForm.value;
      this.filteredCauseList = this.causeListings.filter(causeList => 
        causeList.caseTypeId === parseInt(caseTypeId) || 
        causeList.courtLevelId === this.courtLevelId || 
        causeList.officerNameId === parseInt(officerNameId) || 
        causeList.parties === searchTerm || causeList.caseNumber === searchTerm
        );
      // Call the function to perform the routing to searched results page
      this.goToCauseListingsResultPage(this.filteredCauseList);
    }


    // Function to route to the cause listings result page

    goToCauseListingsResultPage(_listings: Array<any>) {
      _listings.length === 0 ? this.presentAlert() :
      this.router.navigate(['/cause-listing-results'],{
      queryParams: {
         value : JSON.stringify(_listings)
        },
      });
    }

}
