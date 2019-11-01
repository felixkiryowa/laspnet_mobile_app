import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  submitted = false;
  reportForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder) {
   
  }

      ngOnInit() {

        this.reportForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          name: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          // password: ['', [Validators.required, Validators.minLength(6)]]
          complaint: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(3000), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
      }, {});
  }
  onSubmit(): void { 
    this.submitted = true;

    // Stop if the form validation has failed
    if (this.reportForm.invalid) {
        return;
    }
    //console.log("success!")
    alert("Successfully Submitted!");
    //this.router.navigateByUrl('/home');
}

onReset() {
    this.submitted = false;
    this.reportForm.reset();
}    

get frm() { return this.reportForm.controls; }

recordAudio(){}

recordVideo(){}
  

}
