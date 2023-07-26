import { Component, OnInit } from '@angular/core';
import { TrainService } from '../train.service';
import { ActivatedRoute, Router } from '@angular/router';
import { etrain } from '../etrain';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router:ActivatedRoute,rr:Router,private myservice:TrainService) { }

  trainnumb:any;
  tt:etrain=new etrain();
  tt1:etrain= new etrain();

  ngOnInit(): void {
    this.trainnumb=this.router.snapshot.paramMap.get('tn');
    this.myservice. viewTrainInfo(this.trainnumb).subscribe(result=>{
        this.tt=result;
    })
  }

  edittrain(name:any,trainno:any,src:any,dest:any,arrtime:any,desttime:any,TicketPrice:string){
    this.tt1=new etrain(name,trainno,src,dest,arrtime,desttime,TicketPrice as any);
    this.myservice.updateTrainInfo(this.tt1,this.trainnumb).subscribe(result=>{alert("Train info. changed")});
   }
}
