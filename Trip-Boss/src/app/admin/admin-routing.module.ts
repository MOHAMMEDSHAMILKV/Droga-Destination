import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'',component:AdminComponent},
  
  {path:'addcontent',component:AddcontentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


