import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-letter',
  templateUrl: './add-letter.component.html',
  styleUrls: ['./add-letter.component.css']
})
export class AddLetterComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  dep:any;
  user:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) { 
    this.myForm = this.fb.group({
      from_date: new FormControl('', Validators.required), 
      to_date:  new FormControl('', Validators.required),
      received_date:  new FormControl('', Validators.required),
      subject:  new FormControl('', Validators.required),

    })
  }

  onSubmit() {
    
    if (this.isAddMode) {
      this.api.postletter(this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.valid);
              console.log(this.myForm.value);
              alert('data submitted successfully'); 
              this.myForm.reset(); 
    }) 
  }
    else {
      this.get.updateapp(this.id,this.myForm.value).subscribe((response)=> {
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
      this.get.getletterbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

}
