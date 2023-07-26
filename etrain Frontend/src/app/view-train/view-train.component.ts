import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';
import {etrain} from '../etrain';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css']
})
export class ViewTrainComponent implements OnInit {

  constructor(private router:ActivatedRoute,rr:Router,private myservice:TrainService) { }

  trainnumb:any;
  tt:etrain=new etrain();

  ngOnInit(): void {
    this.trainnumb=this.router.snapshot.paramMap.get('tn');
    this.myservice. viewTrainInfo(this.trainnumb).subscribe(result=>{
        this.tt=result;
    })
  }

  getTrainNO(){
    return this.trainnumb;
  }

}
