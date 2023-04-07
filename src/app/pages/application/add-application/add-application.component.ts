import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  dep:any;
  user:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) { 
    this.myForm = this.fb.group({
      appUrl: new FormControl('', [Validators.minLength(1),Validators.required]),  
      appName:  new FormControl('', Validators.required),
      dep_name_under:  new FormControl('', Validators.required),
      SDC_hosted: new FormControl('', Validators.required),
      SDC_ip:  new FormControl(''),
      app_ip:  new FormControl('', Validators.required),
      app_incharge:  new FormControl('', Validators.required),
      monitored_through_nms:  new FormControl('', Validators.required),
      is_active: new FormControl('', Validators.required),
      

    })
  }

  onSubmit() {
    
    if (this.isAddMode) {
      this.api.postapp(this.myForm.value).subscribe((response)=> {
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
      this.get.getorg().subscribe((data)=>{
        console.warn('get dept data',data);
        this.dep=data;
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
    this.get.getusers().subscribe((data)=>{
      console.warn('get dept data',data);
      this.user=data;
  })

      this.get.getappbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

}
