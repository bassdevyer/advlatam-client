import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CirculationQueryService {

  isAbleToCirculate: boolean;

  canCirculate(plate: string) {
  }
}
