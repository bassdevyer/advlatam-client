import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circulation-query',
  templateUrl: './circulation-query.component.html',
  styleUrls: ['./circulation-query.component.scss']
})
export class CirculationQueryComponent implements OnInit {

  plate: string = '';
  dateTime: Date = new Date();
  minDate: Date = new Date();
  displayResult: boolean = false;

  validateCirculationStatus() {
      this.displayResult = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
