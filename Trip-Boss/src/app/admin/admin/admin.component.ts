import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { PopularDestinationComponent } from '../popular-destination/popular-destination.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  list: any
  recent: any
  videos: any
  element: any
  constructor(private ds: AuthService, private http: HttpClient) { }
  ngOnInit(): void {
    this.contentlist()
  }

  contentlist() {
    this.ds.contentlist()
      .subscribe((rslt: any) => {
        this.element = rslt.data
        const popular = this.element.filter((element: any) => element.field === 'Popular Destinations')
        const Recent = this.element.filter((element: any) => element.field === 'Recent Trips')
        const Videos = this.element.filter((element: any) => element.field === 'Videos')


        

          this.list = popular
          this.recent = Recent
          this.videos = Videos
console.log("aa",this.recent);
console.log("aa",this.list);
      
      })
    // console.log("sckhcbshbc",rslt);
    // this.list=rslt.data
    // console.log(this.list);

  }



  onDelete(placename: string) {
    this.http.delete("http://localhost:3000/admin/" + placename)
      .subscribe((rslt: any) => {
        if (rslt) {
          console.log(rslt);

          alert(rslt.message)
          location.reload()
        }
      }, (rslt) => {

        alert(rslt.error.msg)
      })


  }

}
