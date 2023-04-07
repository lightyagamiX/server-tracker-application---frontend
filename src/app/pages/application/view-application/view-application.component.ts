import { Component, OnInit } from '@angular/core';
import { GetformService } from 'src/app/services/getform.service';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  posts:any;

  constructor(private api:GetformService ,private router: Router, public http:HttpClient) { }

  ngOnInit(): void {
    this.api.getapp().subscribe((data)=>{
			console.warn('get api data',data);
			this.posts=data;
		}
		)
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
        this.api.deleteapp(item.id).subscribe(()=> {
          console.log('success');
          alert('data deleted successfully');
          this.api.getapp().subscribe((data)=>{
            console.warn('get api data',data);
            this.posts=data;
      });
    
      }

    ,)}

  }

}

