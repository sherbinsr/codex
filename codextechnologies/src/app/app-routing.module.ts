import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { MainComponent } from './Components/main/main.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
