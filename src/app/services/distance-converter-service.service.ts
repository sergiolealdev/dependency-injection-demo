import { Injectable } from '@angular/core';
import {IDistanceConverterService} from '../interfaces/idistance-converter';

@Injectable()
export class DistanceConverterService implements IDistanceConverterService{

  constructor() { }

  convertKmToMiles (distance: number) {
    return distance * 0.621371;
  }

  convertMilesToKm (distance: number) {
    return distance * 1.60934;
  }

}
