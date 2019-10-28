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

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      password: ['', [Validators.required, Validators.minLength(6)]]
  }, {});
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
