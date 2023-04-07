import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLoginBtn: boolean = true;

  loginstatus: any;

  posts:any;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient, private router: Router, private auth: AuthService, private tokenStorage: TokenStorageService) { 
    this.myForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password:  new FormControl('', [Validators.minLength(5),Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
    
      this.tokenStorage.getRefreshTokenapi(this.myForm.value).subscribe((resp) => {

      this.tokenStorage.getRefreshTokenapi(this.myForm.value).subscribe((res)=>{
          
          console.log(this.myForm.value)
    
          this.auth.isLogin = true;
    
          this.tokenStorage.saveToken(res.access);
    
          this.tokenStorage.saveRefreshToken(res.refresh);
    
          this.tokenStorage.saveUser(res);
    
          
    
          // this.router.navigate(['/calendar']);
          this.router.navigate(['dashboard']);
    
        }

        
        );


    
        
      });

  }}
