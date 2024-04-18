import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, catchError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Vehicle, VehicleDetails } from './vehicles.model';

const { baseApi } = environment;

@Injectable()
export class VehiclesService {
  constructor(private http: HttpClient) {}

  readAll(): Observable<Vehicle[]> {
    return this.http.get(`${baseApi}/api/vehicles`).pipe(
      map((response) => {
        return response as Vehicle[];
      }),
      catchError(() => of(this.handleError())),
    );
  }

  read(id: string): Observable<VehicleDetails> {
    return this.http.get(`${baseApi}/api/vehicles/${id}`).pipe(
      map((response) => {
        return of(response as Vehicle);
      }),
      catchError(() => of(this.handleError())),
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(): any {
    return of([]);
  }
}
