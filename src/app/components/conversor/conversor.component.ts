import {Component, OnInit, Input} from '@angular/core';
import {DistanceConverterService} from '../../services/distance-converter-service.service';
import {FormControl} from '@angular/forms/forms';

@Component({
  selector: 'conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  @Input() value:number;
  result:number;

  constructor(private service: DistanceConverterService) {
  }

  ngOnInit() {
    this.result = this.service.convertKmToMiles(this.value);
  }

}
