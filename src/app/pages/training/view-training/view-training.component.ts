import { Component, OnInit } from '@angular/core';
import { GetformService } from 'src/app/services/getform.service';
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-training',
  templateUrl: './view-training.component.html',
  styleUrls: ['./view-training.component.css']
})
export class ViewTrainingComponent implements OnInit {

  posts:any;
  constructor(private api:GetformService ,private router: Router, public http:HttpClient) { }

  ngOnInit(): void {
    this.api.gettraining().subscribe((data)=>{
			console.warn('get api data',data);
			this.posts=data;
		}
		)
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
        this.api.deletetraining(item.id).subscribe(()=> {
          console.log('success');
          alert('data deleted successfully');
          this.api.gettraining().subscribe((data)=>{
            console.warn('get api data',data);
            this.posts=data;
      });
    
      }

    ,)}

  }

}
