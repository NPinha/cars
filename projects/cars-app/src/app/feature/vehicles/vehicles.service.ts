import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, catchError, Observable, mergeMap, map, forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Vehicle } from './vehicles.model';

const { baseApi } = environment;

@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {}

  readAll(): Observable<Vehicle[]> {
    return this.http.get(`${baseApi}/api/vehicles`).pipe(
      mergeMap((response) => {
        const cars = response as Vehicle[];
        const carObservables: Observable<Vehicle>[] = cars.map((car) =>
          this.read(car.id).pipe(
            map((detail) => ({
              ...car,
              ...detail,
            })),
          ),
        );

        return forkJoin<Vehicle[]>(carObservables);
      }),
      catchError((error) => {
        console.error('Error fetching vehicles list', error);
        return of([]);
      }),
    );
  }

  read(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${baseApi}/api/vehicles/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching vehicle details for ID:', id, error);
        return of({} as Vehicle);
      }),
    );
  }
}
