import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-reporttype',
  templateUrl: './add-reporttype.component.html',
  styleUrls: ['./add-reporttype.component.css']
})
export class AddReporttypeComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  dep:any;
  user:any;
  id!: string;
  isAddMode!: boolean;
  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) {
    this.myForm = this.fb.group({
      report_type: new FormControl('', [Validators.minLength(1),Validators.required]),  
      dep_name_under:  new FormControl('', Validators.required),
      report_name:  new FormControl('', Validators.required),
    
      

    })
   }

   onSubmit() {
    
    if (this.isAddMode) {
      this.api.postreporttype(this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.valid);
              console.log(this.myForm.value);
              alert('data submitted successfully'); 
              this.myForm.reset(); 
    }) 
  }
    else {
      this.get.updatereporttype(this.id,this.myForm.value).subscribe((response)=> {
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
      this.get.getreporttypebyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

}
