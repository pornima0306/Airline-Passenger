import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-checked-in',
  templateUrl: './total-checked-in.component.html',
  styleUrls: ['./total-checked-in.component.scss']
})
export class TotalCheckedInComponent implements OnInit {
@Input() arrayForCount!:any;
@Input() getObj! :any;
public passCount : number= 0;
  constructor() { }

  ngOnInit(): void {
  let count = this.arrayForCount.filter((ele:any)=>{
    return ele.checkedIn;
   })
   this.passCount = count.length;
  }
  
}
