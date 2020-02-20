import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.css']
})
export class CarEditorComponent implements OnInit {

  carForm = new FormGroup({
    plate: new FormControl('', [Validators.required, Validators.minLength(7)]),
    color: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    vin: new FormControl('', Validators.required),
    additionalInfo: new FormControl('')
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.carForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
