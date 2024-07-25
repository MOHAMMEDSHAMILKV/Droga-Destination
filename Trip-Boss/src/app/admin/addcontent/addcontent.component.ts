import { Component,} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.scss']
})
export class AddcontentComponent {


 constructor(private Rt:Router,private ds:AuthService ){}
 navigateTo(route:any){
  this.Rt.navigate([`/${route}`])
}
placename:any
imageUrl:any
details:any
field:any

onFileSelected(event: any): void {
  let data = event.target.files[0];
  console.log(data);
  
  const formData = new FormData();
  this.imageUrl =  formData.append('image', data, data.name);
  console.log(this.imageUrl,"img");
  

}

content(){
  const formData = new FormData();
  var placename:any=this.placename
  var imageUrl:any=this.imageUrl
  var details:any=this.details
 var field:any=this.field

  this.ds.content(placename,imageUrl,details,field)
  .subscribe((rslt:any)=>{

   
    
    if(rslt){  
      
      alert(rslt.msg)
      this.Rt.navigateByUrl("admin")
        }else{
          alert("invalid form")
         
        }
      

  
    },(rslt)=>{
     
      alert(rslt.error.msg)
    })

  

  }
}
