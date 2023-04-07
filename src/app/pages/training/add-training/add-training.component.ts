import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  dep:any;
  user:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) {
    this.myForm = this.fb.group({
      dep_name_under: new FormControl('', [Validators.minLength(1),Validators.required]),  
      date:  new FormControl('', Validators.required),
      time:  new FormControl('', Validators.required),
      meeting_link: new FormControl('', Validators.required),
      meeting_desc:  new FormControl('',Validators.required),
      total_participants:  new FormControl('', Validators.required),
      attachment:  new FormControl('', Validators.required),
      
      

    })
   }

   onSubmit() {
    
    if (this.isAddMode) {
      this.api.posttraining(this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.valid);
              console.log(this.myForm.value);
              alert('data submitted successfully'); 
              this.myForm.reset(); 
    }) 
  }
    else {
      this.get.updatetraining(this.id,this.myForm.value).subscribe((response)=> {
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

  }
    if(!this.isAddMode){
      this.get.getorg().subscribe((data)=>{
        console.warn('get dept data',data);
        this.dep=data;
    })
      this.get.gettrainingbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

}
