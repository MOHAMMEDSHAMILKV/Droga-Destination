import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  constructor(private Rt:Router,private ds:AuthService){}
  navigateTo(route:any){
    this.Rt.navigate([`/${route}`])
  }

  name:any
  gender:any
  phoneNo:any
  username:any
  password:any
login(){
    
  var username:any=this.username
  var password:any=this.password

  
  
  this.ds.login(username,password)
  .subscribe((rslt:any)=>{
   
    if(rslt.data.admin){
      alert(rslt.msg)
      this.Rt.navigateByUrl('admin')
    }
    else{
      alert(rslt.msg)
      this.Rt.navigateByUrl('')
    }

  },(rslt:any)=>{
    
    alert(rslt.error.msg)
  })
}

register(){
  var name:any=this.name
  var gender:any=this.gender
  var phoneNo:any=this.phoneNo
  var username:any=this.username
  var password:any=this.password

  this.ds.register(name,gender,phoneNo,username,password)
  .subscribe((rslt:any)=>{

   
    
    if(rslt){  
      
      alert(rslt.message)
      this.Rt.navigateByUrl("")
        }else{
          alert("invalid form")
         
        }
      

  
    },(rslt)=>{
      console.log("test:",rslt.error.message)
      alert(rslt.error.message)
    })

  

  }
}

