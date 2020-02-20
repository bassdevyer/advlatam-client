import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'App Managers'
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Registro', routerLink:'car-editor'},
      {label: 'Consulta', routerLink:'circulation-query'}
  ];
}
}
