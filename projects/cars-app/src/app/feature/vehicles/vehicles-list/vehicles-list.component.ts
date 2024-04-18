import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { MatCardModule } from '@angular/material/card';
import { DefaultImageDirective } from '../../../core/directives/image-fallback.directive';

@Component({
  selector: 'cars-vehicles-list.component.ts',
  standalone: true,
  imports: [CommonModule, MatCardModule, DefaultImageDirective],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesListComponent {
  protected vehicleService = inject(VehiclesService);
  vehiclesList$ = this.vehicleService.readAll();
}
