import { Component, OnInit } from '@angular/core';
import { GetformService } from 'src/app/services/getform.service';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-thirdparty',
  templateUrl: './view-thirdparty.component.html',
  styleUrls: ['./view-thirdparty.component.css']
})
export class ViewThirdpartyComponent implements OnInit {

  posts:any;

  constructor(private api:GetformService ,private router: Router, public http:HttpClient) { }

  ngOnInit(): void {
    this.api.getthird().subscribe((data)=>{
			console.warn('get api data',data);
			this.posts=data;
		}
		)
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
        this.api.deletethird(item.id).subscribe(()=> {
          console.log('success');
          alert('data deleted successfully');
          this.api.getthird().subscribe((data)=>{
            console.warn('get api data',data);
            this.posts=data;
      });
    
      }

    ,)}

  }


}
