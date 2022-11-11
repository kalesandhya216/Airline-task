import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-airlinepass-dashboard',
  templateUrl: './airlinepass-dashboard.component.html',
  styleUrls: ['./airlinepass-dashboard.component.scss']
})
export class AirlinepassDashboardComponent implements OnInit {

  @Input() airlinePassArr! : any;
  @Output() sendObjToApp : EventEmitter<any> = new EventEmitter<any>();
  
  public newArray! : [];
  constructor() { }

  ngOnInit(): void {
  }

  onSendObj(eve : any){
    // console.log(eve);
    this.sendObjToApp.emit(eve);
    
    this.newArray = this.airlinePassArr.filter((ele : any) => {
      // console.log(ele);      
      return ele.id != eve;
    })
    
    this.airlinePassArr = this.newArray;

    // console.log(this.airlinePassArr);
  }  
}
