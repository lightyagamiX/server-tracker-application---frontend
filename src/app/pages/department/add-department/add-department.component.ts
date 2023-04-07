import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  posts:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) { 
    this.myForm = this.fb.group({
      Dept_name: new FormControl('', [Validators.minLength(1),Validators.required]),
      is_sec_dept:new FormControl(''),
      Child_of:new FormControl(''),
      Dept_short_form:  new FormControl('', Validators.required),
      Dept_desc:  new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.email,Validators.required]),
      contact_mobile:  new FormControl('', [Validators.minLength(10),Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      contact_LL:  new FormControl('', Validators.required),
      Info:  new FormControl('', Validators.required),



    })
  }

  onSubmit() {
    
    if (this.isAddMode) {
      this.api.postorg(this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.valid);
              console.log(this.myForm.value);
              alert('data submitted successfully'); 
              this.myForm.reset(); 
    }) 
  }
    else {
      this.get.updateorg(this.id,this.myForm.value).subscribe((response)=> {
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
        console.warn('get api data',data);
        this.posts=data;
    })}
    if(!this.isAddMode){
      this.get.getorgbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

}
