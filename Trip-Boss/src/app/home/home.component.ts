import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
list:any
recent: any
videos: any
element:any
  constructor(private ds:AuthService ) {}
  ngOnInit(): void {
    this.contentlist()
  }
 
 contentlist(){
   this.ds.contentlist()
   .subscribe((rslt:any)=>{
   this.element=rslt.data
   const popular = this.element.filter((element:any)=>element.field === 'Popular Destinations')
 const Recent = this.element.filter((element:any)=>element.field==='Recent Trips')
 const Videos = this.element.filter((element: any) => element.field === 'Videos')

 this.list = popular
          this.recent = Recent
          this.videos = Videos
 })
 
 }
}
