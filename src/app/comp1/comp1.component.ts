import { Component, OnInit,Input } from '@angular/core';
import * as labels from 'src/app/labels.json';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  lab=[labels.f_name,labels.l_name]

color=""
inputVal=''
  checker(val:any):string[]{
    this.inputVal=val.value;
    if(this.inputVal.length>=20 && (this.inputVal.includes("_")||this.inputVal.includes("-")||this.inputVal.includes("@")||this.inputVal.includes("$")||this.inputVal.includes("*"))){
        this.color="green"
      }
    else{
      this.color="red"
    }
return [this.inputVal,this.color];

  }



  constructor() { }

  ngOnInit(): void {
  }

}
