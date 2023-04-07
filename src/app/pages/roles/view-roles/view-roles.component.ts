import { Component, OnInit } from '@angular/core';
import { GetformService } from 'src/app/services/getform.service';

@Component({
  selector: 'app-view-roles',
  templateUrl: './view-roles.component.html',
  styleUrls: ['./view-roles.component.css']
})
export class ViewRolesComponent implements OnInit {

  posts:any;

  constructor(private api:GetformService) { }

  ngOnInit(){
    this.api.viewroles().subscribe((data)=>{
			console.warn('get api data',data);
			this.posts=data;
		}
		)
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
        this.api.deleteroles(item.id).subscribe(()=> {
          console.log('success');
          alert('data deleted successfully');
          this.api.viewroles().subscribe((data)=>{
            console.warn('get api data',data);
            this.posts=data;
      });
    
      }

    ,)}

  }


}
