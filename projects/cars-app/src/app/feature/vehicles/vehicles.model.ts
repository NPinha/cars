/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Vehicle {
  id: string;
  name: string;
  modelYear: string;
  apiUrl: string;
  media: Media[];
}

interface Media {
  name: string;
  url: string;
}

export interface VehicleDetails {
  id: string;
  description: string;
  meta: Meta;
}

interface Meta {
  passengers: number;
  drivetrain: string[];
  bodystyles: string[];
  emissions: Emissions;
}

interface Emissions {
  template: string;
  value: number;
}
