import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module')
    .then(ndl=>ndl.AdminModule)
  },
  {
    path:'addcontent',
    loadChildren:()=>import('./admin/admin.module')
    .then(ndl=>ndl.AdminModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


