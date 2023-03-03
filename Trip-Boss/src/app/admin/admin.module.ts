import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AdminComponent,
    AddcontentComponent,
    AdminnavComponent,

    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
    
  ],exports:[
    
    

   
  ]
})
export class AdminModule { }
