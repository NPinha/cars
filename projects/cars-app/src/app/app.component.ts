import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  selector: 'cars-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: `<cars-main-layout />`,
})
export class AppComponent {}
