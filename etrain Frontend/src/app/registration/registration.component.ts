import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';
import {etrain} from '../etrain';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private myservice:TrainService) { }

  tt:etrain=new etrain();

  ngOnInit(): void {
  }

  addnewtrain(name:any,trainno:any,src:any,dest:any,arrtime:any,desttime:any,tckprice:any){
   this.tt=new etrain(name,trainno,src,dest,arrtime,desttime,tckprice);
   console.log(tckprice);
   this.myservice.createTraindetails(this.tt).subscribe(result=>{alert("Train info. inserted")});
  }

}
