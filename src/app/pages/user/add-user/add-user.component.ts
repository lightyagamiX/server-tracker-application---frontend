import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  
  myForm: FormGroup;
  data:any;
  dep:any;
  role:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) {
    this.myForm = this.fb.group({
      dep_name_under: new FormControl('', [Validators.minLength(1),Validators.required]),
      role_name_under:  new FormControl('', Validators.required),
      person_name:  new FormControl('', Validators.required),
      person_desig: new FormControl('', Validators.required),
      person_email:  new FormControl('', [Validators.email,Validators.required]),
      person_ph:  new FormControl('', [Validators.minLength(10),Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      

    })
   }

   onSubmit() {
    
    if (this.isAddMode) {
      this.api.postusers(this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.valid);
              console.log(this.myForm.value);
              alert('data submitted successfully'); 
              this.myForm.reset(); 
    }) 
  }
    else {
      this.get.updateusers(this.id,this.myForm.value).subscribe((response)=> {
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
      this.get.getorg().subscribe((data)=>{
        console.warn('get dept data',data);
        this.dep=data;
    })
    this.get.viewroles().subscribe((data)=>{
      console.warn('get dept data',data);
      this.role=data;
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
      this.get.getusersbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

  // changedep() { 
	// 	this.dept = this.api.getdep().subscribe((res)=>{
			
	// 		this.dep=res;
  //     console.log(res);
	// 	})
	// }

}
