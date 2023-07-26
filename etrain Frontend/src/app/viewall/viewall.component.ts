import { Component, OnInit } from '@angular/core';
import {etrain} from '../etrain';
import { Observable } from 'rxjs';
import { TrainService } from '../train.service';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private myservice:TrainService){
//   this.train = new Array<etrain>(
//   new etrain("Rajdhani","Delhi","Mumbai",400,2330),
//   new etrain("Lichivi","Delhi","Bihar",400,1330),
//   new etrain("Mau Special","Aanand Vihar","Mar",1645,620),
//   new etrain("Humsafar Exp","Delhi","Gorakhpur",2000,930),
//   new etrain("Duronto","Kolkata","Ahemdabad",1400,530),
// )
  }
  
  train:any=[];
  ngOnInit(): void {
    this.train=this.myservice. getAllTrain();
  }

  viewalltrain():Observable<etrain[]>{
    return this.train as any;
  }

}
