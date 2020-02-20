import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = 'http://localhost:8080/cars';

  constructor(
    private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
  }

  getCar(id: number): Observable<Car> {
    return of(CARS.find(car => car.id === id));
  }

  addCar (car: Car): Observable<Car> {
    console.warn('addCar', car)
    return this.http.post<Car>(this.carsUrl, car)
  }
}
