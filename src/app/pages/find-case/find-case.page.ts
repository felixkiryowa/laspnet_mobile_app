import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-case',
  templateUrl: './find-case.page.html',
  styleUrls: ['./find-case.page.scss'],
})
export class FindCasePage implements OnInit {

  disableOfficerNameField:boolean = false;
  findCaseForm: FormGroup;
  loading: any;
  results: Array<any>;


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

  cases: Array<any> = [
    {
      id: 1,
      title: 'Part A vs Part B',
      plaint:'Part A',
      caseId: 'UUFG456Y',
      respondent:'Part B',
      caseTypeId: 1,
      status: 'Mention',
      courtLevelId: 1,
    },
    {
      id: 2,
      title: 'Part K vs Part X',
      plaint:'Part K',
      caseId: 'UUFG456Y',
      respondent:'Part X',
      caseTypeId: 2,
      officerNameId: 4,
      status: 'Mention',
      courtLevelId: 3,
    },
    {
      id: 3,
      title: 'Part c vs Part D',
      plaint:'Part C',
      caseId: 'UUFG45678',
      respondent:'Part D',
      caseTypeId: 19,
      status: 'Mention',
      courtLevelId: 20,
    
    },
    {
      id: 4,
      title: 'Part A vs Part B',
      plaint:'Part A',
      caseId: 'UUFG456YJG',
      respondent:'Part B',
      caseTypeId: 29,
      status: 'Mention',
      courtLevelId: 28,
    
    },
    {
      id: 5,
      title: 'Part E vs Part H',
      plaint:'Part E',
      caseId: 'UUFG456YJGJ',
      respondent:'Part H',
      caseTypeId: 6,
      status: 'Mention',
      courtLevelId: 4,
    
    },
    {
      id: 6,
      title: 'Part L vs Part V',
      plaint:'Part L',
      caseId: 'UUFG456YYUI',
      respondent:'Part V',
      caseTypeId: 9,
      status: 'Mention',
      courtLevelId: 5,
    
    }

  ]

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    public router : Router
  ) { 
    this.findCaseForm = this.formBuilder.group({
       'caseTypeId': ['', Validators.compose([Validators.required])],
       'courtLevelId': ['', Validators.compose([Validators.required])],
       'officerNameId': [''],
       'searchTerm': ['', Validators.compose([Validators.required])]  
    });
  }

  ngOnInit() {
    this.showLoader();
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
  async showLoader() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 5000,
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

  // Function to run when the search form is submitted
  findCase() {
    const {caseTypeId, courtLevelId, officerNameId, searchTerm  } = this.findCaseForm.value;
    this.results = this.cases.filter(singleCase => 
      singleCase.caseTypeId === parseInt(caseTypeId) || 
      singleCase.courtLevelId === parseInt(courtLevelId) || 
      singleCase.officerNameId === parseInt(officerNameId) || 
      singleCase.plaint === searchTerm || singleCase.respondent === searchTerm
      );
     this.goToFindCaseResults(this.results);
  }

  
  // Function to route to the find search results page
  goToFindCaseResults(data: Array<any>){
    data.length === 0 ? this.presentAlert() :
    this.router.navigate(['/find-case-results'],{
    queryParams: {
       value : JSON.stringify(data)
      },
    });
  }


}
