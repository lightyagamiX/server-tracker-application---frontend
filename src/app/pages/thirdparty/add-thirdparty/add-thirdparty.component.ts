import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-thirdparty',
  templateUrl: './add-thirdparty.component.html',
  styleUrls: ['./add-thirdparty.component.css']
})
export class AddThirdpartyComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  id!: string;
  isAddMode!: boolean;
  posts:any;


  constructor(private fb: FormBuilder, private http:HttpClient, private api:PostformService, private get:GetformService, private router: Router,private route: ActivatedRoute) { 
    
    this.myForm = this.fb.group({
      // org_name: ['', Validators.required],
      ThirdPartyName: new FormControl('', [Validators.minLength(2),Validators.required]),
      // third_org_shortname:  new FormControl('', Validators.required),
      ThirdPartyEmail: new FormControl('', [Validators.email,Validators.required]),
      ThirdPartyContact:  new FormControl('', [Validators.minLength(10),Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),

    })
  }

  onSubmit() {
  //   if(this.myForm.valid){
  //   if(confirm('Are you sure?')){
  //     this.api.postthird(this.myForm.value).subscribe((response)=> {
  //       console.log(this.myForm.value);
  //       console.log("data is valid",this.myForm.valid);
  //       console.log('success',response);
  //       localStorage.setItem( 'res', JSON.stringify(this.myForm.value));
  //       alert('data submitted successfully'); 
  //       this.myForm.reset(); 
  //   } 
  // ,)}
  // }
  // else{
  //   alert("mandatory fields shoud be filled")
  // }
  if (this.isAddMode) {
    this.api.postthird(this.myForm.value).subscribe((response)=> {
      console.log(this.myForm.valid);
            console.log(this.myForm.value);
            alert('data submitted successfully'); 
            this.myForm.reset(); 
  }) 
}
  else {
    this.get.updatethird(this.id,this.myForm.value).subscribe((response)=> {
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
      this.get.getthird().subscribe((data)=>{
        console.warn('get api data',data);
        this.posts=data;
    })}
    if(!this.isAddMode){
      this.get.getthirdbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

}
