import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  submitted = false;
  contactForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any): void { 
    this.submitted = true;

    // Stop if the form validation has failed
    if (this.contactForm.invalid) {
        return;
    }
    //console.log("success!")
    alert("Successfully Submitted!");
    //this.router.navigateByUrl('/home');
}

onReset() {
    this.submitted = false;
    this.contactForm.reset();
}    

get frm() { return this.contactForm.controls; }

}
