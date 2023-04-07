import { Component, OnInit } from '@angular/core';
import { GetformService } from 'src/app/services/getform.service';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-letter',
  templateUrl: './view-letter.component.html',
  styleUrls: ['./view-letter.component.css']
})
export class ViewLetterComponent implements OnInit {

  posts:any;
  constructor(private api:GetformService ,private router: Router, public http:HttpClient) { }

  ngOnInit(): void {
    this.api.getletter().subscribe((data)=>{
			console.warn('get api data',data);
			this.posts=data;
		}
		)
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
        this.api.deleteletter(item.id).subscribe(()=> {
          console.log('success');
          alert('data deleted successfully');
          this.api.getletter().subscribe((data)=>{
            console.warn('get api data',data);
            this.posts=data;
      });
    
      }

    ,)}

  }

}
