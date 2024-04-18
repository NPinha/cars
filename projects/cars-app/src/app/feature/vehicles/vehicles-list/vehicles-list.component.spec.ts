/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesListComponent } from './vehicles-list.component';
import { VehiclesService } from '../vehicles.service';
import { of } from 'rxjs';
import { DefaultImageDirective } from '../../../core/directives/image-fallback.directive';

describe('VehiclesListComponent', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;
  let vehicleCards: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesListComponent, DefaultImageDirective],
      providers: [
        {
          provide: VehiclesService,
          useValue: {
            readAll: jasmine.createSpy().and.returnValue(
              of([
                {
                  id: '1',
                  name: 'Car 1',
                  price: '10000',
                  description: 'Description 1',
                  apiUrl: 'api/vehicls',
                  modelYear: '2014',
                  media: [
                    { name: 'qua', url: 'image1.jpg' },
                    { name: 'qua', url: 'image2.jpg' },
                  ],
                },
                {
                  id: '2',
                  name: 'Car 2',
                  price: '20000',
                  description: 'Description 2',
                  apiUrl: 'api/vehicls',
                  modelYear: '2014',
                  media: [
                    { name: 'qua', url: '' },
                    { name: 'qua', url: '' },
                  ],
                },
              ]),
            ),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    vehicleCards = fixture.nativeElement.querySelectorAll('.vehicle-card');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch correct number of vehicles', () => {
    expect(vehicleCards.length).toBe(2);
  });

  it('should render correct information about a vehicle', () => {
    expect(
      vehicleCards[0].querySelector('.vehicle-card-content__title').textContent,
    ).toContain('Car 1');

    expect(
      vehicleCards[0].querySelector('.vehicle-card-content__div').textContent,
    ).toContain('10000');
    expect(
      vehicleCards[0].querySelector('.vehicle-card-content__div').textContent,
    ).toContain('Description 1');

    expect(vehicleCards[0].querySelector('.vehicle-card__img').src).toContain(
      'image1',
    );
  });
});
