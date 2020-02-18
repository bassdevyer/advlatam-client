import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CirculationQueryService {

  isAbleToCirculate: boolean;

  canCirculate(plate: string) {
  }
}
