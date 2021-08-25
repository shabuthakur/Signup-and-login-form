import { Component, OnInit } from '@angular/core';
import  firebase from 'firebase/app';
import 'firebase/auth';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  Form,
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform: any = FormGroup;
  message:string="";
  userError:any;

  constructor(public fb: FormBuilder) {
    this.myform = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required]],
      cpwd: ['', [Validators.required]],
    });
  }

  onSubmit(myform: any) {
    let email:string=myform.value.email;
    let password:string=myform.value.pwd;
    let firstname:string=myform.value.firstname;
    let lastname:string=myform.value.lastname;

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((response) => {
        console.log(response);
         let randomnumber = Math.floor(Math.random() *1000)
         response.user?.updateProfile({
          displayName:firstname + " " +lastname,
          photoURL : "https://api.adorable.io/avatars/" + randomnumber

        }).then(() =>{
          this.message="you have been signed up successfully"
        })


        })
    .catch((error) =>{
      console.log(error);
      this.userError=error
    })
  }

  ngOnInit(): void {
  }

}
