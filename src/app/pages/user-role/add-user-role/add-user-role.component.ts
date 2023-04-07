import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  dep:any;
  role:any;
  user:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) { 
    this.myForm = this.fb.group({
      sec_dept_id: new FormControl('', Validators.required), 
      role_id:  new FormControl('', Validators.required),
      user_id:  new FormControl('', Validators.required),
      status:  new FormControl('', Validators.required),
      from_date:  new FormControl('', Validators.required),
      to_date:  new FormControl('', Validators.required),
      remarks:  new FormControl('', Validators.required),


    })
  }

  ngOnInit(): void {    this.id = this.route.snapshot.params['id'];
  this.isAddMode = !this.id;
  if (this.isAddMode) {
    this.get.getorg().subscribe((data)=>{
      console.warn('get dept data',data);
      this.dep=data;
  })
  this.get.viewroles().subscribe((data)=>{
    console.warn('get dept data',data);
    this.role=data;
})
this.get.getusers().subscribe((data)=>{
  console.warn('get dept data',data);
  this.user=data;
})

}
  if(!this.isAddMode){
    this.get.getorg().subscribe((data)=>{
      console.warn('get dept data',data);
      this.dep=data;
  })
  this.get.viewroles().subscribe((data)=>{
    console.warn('get dept data',data);
    this.role=data;
})
this.get.getusers().subscribe((data)=>{
  console.warn('get dept data',data);
  this.user=data;
})
    
    this.get.getuserrolemapbyId(this.id)
    
    .subscribe(x => this.myForm.patchValue(x));}
  }


  onSubmit() {
    
    if (this.isAddMode) {
      this.api.postuserrole(this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.valid);
              console.log(this.myForm.value);
              alert('data submitted successfully'); 
              this.myForm.reset(); 
    }) 
  }
    else {
      this.get.updateuserrolemap(this.id,this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.value);
        alert('data updated successfully'); 
        // this.myForm.reset(); 
})
    
     }

    }

}
