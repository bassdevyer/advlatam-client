import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.css']
})
export class CarEditorComponent implements OnInit {

  cars: Car[];

  carForm = new FormGroup({
    plate: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[A-Z]{3}[0-9]{3,4}')]),
    color: new FormControl('#000000', Validators.required),
    model: new FormControl('', Validators.required),
    vin: new FormControl('', Validators.required),
    additionalInfo: new FormControl('')
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
      this.carService
    .addCar(this.carForm.value).subscribe((car) => {
      this.getCars();
      this.carForm.reset();
    });
  }

  onKey(event: any) {
    event.target.value = event.target.value.toUpperCase()
  }

  constructor(private carService: CarService) { }


  ngOnInit(): void {
    this.getCars()
  }


  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }

}
