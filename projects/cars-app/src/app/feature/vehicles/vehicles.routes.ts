import { Routes } from '@angular/router';
import { VehiclesService } from './vehicles.service';

export default <Routes>[
  {
    path: '',
    providers: [VehiclesService],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./vehicles-list/vehicles-list.component').then(
            (m) => m.VehiclesListComponent,
          ),
      },
    ],
  },
];
