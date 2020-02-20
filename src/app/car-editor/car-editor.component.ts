import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.css']
})
export class CarEditorComponent implements OnInit {

  carForm = new FormGroup({
    plate: new FormControl('', [Validators.required, Validators.minLength(6)]),
    color: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    vin: new FormControl('', Validators.required),
    additionalInfo: new FormControl('')
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.carForm.value);
      this.carService
    .addCar(this.carForm.value)
  }

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

}
