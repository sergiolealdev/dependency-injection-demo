import {IDistanceConverterService} from '../interfaces/idistance-converter';

export class MockDistanceConverterService implements IDistanceConverterService{

  convertKmToMiles (distance: number) {
    return 0;
  }

  convertMilesToKm (distance: number) {
    return 0;
  }

}
