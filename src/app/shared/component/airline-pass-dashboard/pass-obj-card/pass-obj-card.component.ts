import { DatePipe } from '@angular/common';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pass-obj-card',
  templateUrl: './pass-obj-card.component.html',
  styleUrls: ['./pass-obj-card.component.scss']
})
export class PassObjCardComponent implements OnInit {
@Input() getObj! :any;
@Output() sendObj : EventEmitter<any> = new EventEmitter<any>;
public flag =true;

  constructor() { }

  ngOnInit(): void {

    }
 
    onEditClick(eve :any){
      this.flag = !this.flag;    
    }

    onDoneClick(eve : any){
      this.flag = !this.flag;
    }

  onRemoveClick(event:Event){
/*console.log(event.target);
  console.log(this.getObj); */
  this.sendObj.emit(this.getObj)
  }

  onInput(eve : any){
    console.log(eve.target.value);
    this.getObj.fullname = eve.target.value;
  }

}
