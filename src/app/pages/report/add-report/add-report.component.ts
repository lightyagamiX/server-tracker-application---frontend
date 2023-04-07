import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, FormControl, FormGroup, UntypedFormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { PostformService } from 'src/app/services/postform.service';
import { GetformService } from 'src/app/services/getform.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  myForm: FormGroup;
  data:any;
  dep:any;
  app:any;
  reporttype:any;
  id!: string;
  isAddMode!: boolean;

  constructor(private fb: FormBuilder, private api:PostformService, private http:HttpClient, private get:GetformService,  private router: Router,private route: ActivatedRoute) { 
    this.myForm = this.fb.group({
      dept_name_under: new FormControl('', Validators.required),
      app_url_under:  new FormControl('', Validators.required),
      report_type_under:  new FormControl('', Validators.required),
      reported_date: new FormControl('', Validators.required),
      vulnerability_type:  new FormControl('', Validators.required),
      

    })
  }

  onSubmit() {
    
    if (this.isAddMode) {
      this.api.postreport(this.myForm.value).subscribe((response)=> {
        console.log(this.myForm.valid);
              console.log(this.myForm.value);
              alert('data submitted successfully'); 
              this.myForm.reset(); 
    }) 
  }
    else {
      this.get.updatereport(this.id,this.myForm.value).subscribe((response)=> {
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
    this.get.getapp().subscribe((data)=>{
      console.warn('get app data',data);
      this.app=data;
  })

  this.get.getreporttype().subscribe((data)=>{
    console.warn('get reporttype data',data);
    this.reporttype=data;
})

  }
    if(!this.isAddMode){

      this.get.getorg().subscribe((data)=>{
        console.warn('get dept data',data);
        this.dep=data;
    })
    this.get.getapp().subscribe((data)=>{
      console.warn('get app data',data);
      this.app=data;
  })

  this.get.getreporttype().subscribe((data)=>{
    console.warn('get reporttype data',data);
    this.reporttype=data;
})
      this.get.getreportbyId(this.id)
      
      .subscribe(x => this.myForm.patchValue(x));}
  }

}
