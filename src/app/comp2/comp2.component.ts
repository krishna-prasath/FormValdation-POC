
import { Component, OnInit } from '@angular/core';
import * as labels from 'src/app/labels.json'
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
label=labels.p_name
  fVal='';
  phoneFormat(val:any):void{
    let v=val.value;
    if(v.length==0){
      //for no input value
    }
    else if(v.length<10||v.length>10){
      this.fVal="Invalid Phone Number"
    }
    else{
      this.fVal='('+v.slice(0,3)+') '+v.slice(3,6)+'-'+v.slice(6,)

    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
