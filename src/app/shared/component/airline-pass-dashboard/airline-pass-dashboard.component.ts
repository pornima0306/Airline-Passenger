import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-airline-pass-dashboard',
  templateUrl: './airline-pass-dashboard.component.html',
  styleUrls: ['./airline-pass-dashboard.component.scss']
})
export class AirlinePassDashboardComponent implements OnInit {
  @Input() getArrayFormApp! : any;
  @Output() sendObjToApp: EventEmitter<any> = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }
  sendData(eve :any){
   
    /* console.log((eve.id-1)); */
    this.sendObjToApp.emit(eve)

    /* this.getArrayFormApp.splice((eve.id-1),1) 
    console.log(this.getArrayFormApp);
    */
  }

}
