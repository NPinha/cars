/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Vehicle {
  id: string;
  name: string;
  modelYear: string;
  apiUrl: string;
  media: Media[];
  description: string;
  price: string;
  meta: Meta;
}

interface Media {
  name: string;
  url: string;
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
