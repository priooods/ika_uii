import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { DpwComponent } from './view/dpw/dpw.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'dpw' , component: DpwComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routing = [HomeComponent, DpwComponent]
