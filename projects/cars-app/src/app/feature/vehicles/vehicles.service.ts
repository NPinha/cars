import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, catchError, Observable, mergeMap, map, forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Vehicle } from './vehicles.model';
import { MatSnackBar } from '@angular/material/snack-bar';

const { baseApi } = environment;

@Injectable()
export class VehiclesService {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {}

  readAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${baseApi}/api/vehicles`).pipe(
      mergeMap((vehiclesList) => {
        const result: Observable<Vehicle>[] = vehiclesList.map((item) =>
          this.read(item.id).pipe(
            map((vehicleDetail) => ({
              ...item,
              ...vehicleDetail,
            })),
          ),
        );

        return forkJoin<Vehicle[]>(result);
      }),
      catchError(() => {
        this.displayErrorMessage('Error fetching vehicles list');
        return of([]);
      }),
    );
  }

  read(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${baseApi}/api/vehicles/${id}`).pipe(
      catchError(() => {
        this.displayErrorMessage(`Error fetching vehicle details for: ${id}`);
        return of({} as Vehicle);
      }),
    );
  }

  private displayErrorMessage(text: string) {
    this.snackBar.open(text, 'Dismiss', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
}
