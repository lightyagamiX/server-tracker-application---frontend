import { Component, OnInit } from '@angular/core';
import { GetformService } from 'src/app/services/getform.service';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  posts:any;

  constructor(private api:GetformService ,private router: Router, public http:HttpClient) {}

  ngOnInit() {
    this.api.getorg().subscribe((data)=>{
			console.warn('get api data',data);
			this.posts=data;
		}
		)
	}

  deleteClick(item: any){
    if(confirm('Are you sure?')){
        this.api.deleteorg(item.id).subscribe(()=> {
          console.log('success');
          alert('data deleted successfully');
          this.api.getorg().subscribe((data)=>{
            console.warn('get api data',data);
            this.posts=data;
      });
    
      }

    ,)}

  }



}