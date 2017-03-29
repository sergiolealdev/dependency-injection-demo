import {Component, OnInit, Input} from '@angular/core';
import {DistanceConverterService} from '../../services/distance-converter-service.service';
import {FormControl} from '@angular/forms/forms';

@Component({
  selector: 'conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  @Input() value:number;
  @Input() type:number;
  result:number;

  constructor(private service: DistanceConverterService) {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.type===1){
      this.result = this.service.convertKmToMiles(this.value);
    }else{
      this.result = this.service.convertMilesToKm(this.value);
    }

  }

}
