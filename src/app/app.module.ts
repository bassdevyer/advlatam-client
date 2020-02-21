import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {TabMenuModule} from 'primeng/tabmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CirculationQueryComponent } from './circulation-query/circulation-query.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarEditorComponent } from './car-editor/car-editor.component';
import {ColorPickerModule} from 'primeng/colorpicker';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    CirculationQueryComponent,
    CarEditorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule,
   TabMenuModule,
   ScrollPanelModule,
   ReactiveFormsModule,
   InputTextModule,
   ButtonModule,
   TableModule,
   CalendarModule,
   DialogModule,
   ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
