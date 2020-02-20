import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CirculationQueryComponent } from './circulation-query/circulation-query.component';
import { CarEditorComponent } from './car-editor/car-editor.component';


const routes: Routes = [
    { path: 'cars', component: CarsComponent },
    { path: '',
      redirectTo: '/car-editor',
      pathMatch: 'full'
    },
    {path: 'car-editor', component: CarEditorComponent},
    {path: 'circulation-query', component: CirculationQueryComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
