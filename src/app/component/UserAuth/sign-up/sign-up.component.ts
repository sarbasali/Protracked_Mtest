import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      if (formData.password !== formData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      this.http.post('http://localhost:3000/user/signup', formData)
        .subscribe(
          (response: any) => {
            console.log('Signup successful!', response);
            // Optionally, redirect the user or perform other actions upon successful signup
          },
          (error: any) => {
            console.error('Signup failed:', error);
            // Handle error scenarios (e.g., display an error message to the user)
          }
        );
    } else {
      console.error('Invalid form data');
    }
  }
}




  //   this.signupForm = this.formBuilder.group({
  //     username: ['', [Validators.required]],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', [Validators.required]]
  //   });
  // }

  // // Function to submit the form
  // onSubmit() {
  //   const userName = this.signupForm.get('username')
  //   const userEmail = this.signupForm.get('email')
  //   const userPass = this.signupForm.get('password')
    
    
  //   const postData ={
  //     username: userName?.value,
  //     email: userEmail?.value,
  //     password: userPass?.value,
  //   }
    
    

  //   if (userName && userEmail && userPass) {
  //     this.http.post('http://localhost:3000/user/signup', postData).subscribe(
  //       (response: any) => {
  //         this.resFromBck = response;
  //         console.log(this.resFromBck);
  
  //         if (this.resFromBck.Status ==  this.resFromBck.success) {
  //           this.router.navigate(['/home']);
  //         } else {
  //           console.log('SignUp Failed', this.resFromBck);
  //         }
  //       },
  //       (error: any) => {
  //         console.error('Error occurred during registration', error);
  //         // Handle error scenarios here
  //       }
  //     );

  
      
  //     }
  //   }
  
