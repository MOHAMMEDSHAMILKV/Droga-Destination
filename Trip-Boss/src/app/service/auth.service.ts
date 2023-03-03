import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  login(username:any,password:any){
    
    const data={
      username,
      password
    }
   
    
    return this.http.post("http://localhost:3000/login",data) 
  }


  register(name:any,gender:any, phoneNo:any, username:any,password:any){
    const data={
      name,
          gender ,
          phoneNo,
  
      username,
      password,
    }
   
    
   return this.http.post("http://localhost:3000/register",data)
  }

  content(placename:any,imageUrl:any,details:any,field:any){
    const data={
      placename,
      imageUrl,
      details,
      field
    }
    return this.http.post("http://localhost:3000/content",data)
  }

  contentlist(){
    return this.http.get("http://localhost:3000/admin")
  }

  
}
