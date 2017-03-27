export interface IDistanceConverter {
  convertMilesToKm(distance: number): number;
  convertKmToMiles(distance: number): number;
}
