import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CirculationQueryComponent } from './circulation-query/circulation-query.component';
import { CarDetailComponent } from './car-detail/car-detail.component';


const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  {path: 'circulation-query', component: CirculationQueryComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'detail/:id', component: CarDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
