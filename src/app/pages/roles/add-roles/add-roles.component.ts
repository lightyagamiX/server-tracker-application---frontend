import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';

import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {

  posts:any;
  myForm: FormGroup;
  data:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private http:HttpClient, private api:PostformService, private get:GetformService, private router: Router,private route: ActivatedRoute) { 
    
    this.myForm = this.fb.group({
  
      RoleName:  new FormControl('', Validators.required),
      RoleDescription:  new FormControl('', Validators.required),

    })
  }

  onSubmit() {
  //   if(confirm('Are you sure?')){
  //     this.api.postrole(this.myForm.value).subscribe((response)=> {
  //       console.log(this.myForm.value);
  //       console.log("data is valid",this.myForm.valid);
  //       console.log('success',response);
  //       localStorage.setItem( 'res', JSON.stringify(this.myForm.value));
  //       alert('data submitted successfully'); 
  //       this.myForm.reset(); 
  //   } 
  // ,)}

  if (this.isAddMode) {
    this.api.postrole(this.myForm.value).subscribe((response)=> {
      console.log(this.myForm.valid);
            console.log(this.myForm.value);
            alert('data submitted successfully'); 
            this.myForm.reset(); 
  }) 
}
  else {
    this.get.updatroles(this.id,this.myForm.value).subscribe((response)=> {
      console.log(this.myForm.value);
      alert('data updated successfully'); 
      // this.myForm.reset(); 
})
  
   }

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if (this.isAddMode) {
   }
    if(!this.isAddMode){
      this.get.getrolesbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}


  }

}
