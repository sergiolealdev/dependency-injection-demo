export interface IDistanceConverterService {
  convertMilesToKm(distance: number): number;
  convertKmToMiles(distance: number): number;
}
