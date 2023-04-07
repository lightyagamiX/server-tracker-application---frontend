import { Component, OnInit } from '@angular/core';
import { GetformService } from 'src/app/services/getform.service';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  posts:any;
  constructor(private api:GetformService ,private router: Router, public http:HttpClient) { }

  ngOnInit(): void {
    this.api.getreport().subscribe((data)=>{
			console.warn('get api data',data);
			this.posts=data;
		}
		)
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
        this.api.deletereport(item.id).subscribe(()=> {
          console.log('success');
          alert('data deleted successfully');
          this.api.getreport().subscribe((data)=>{
            console.warn('get api data',data);
            this.posts=data;
      });
    
      }

    ,)}

  }

}
