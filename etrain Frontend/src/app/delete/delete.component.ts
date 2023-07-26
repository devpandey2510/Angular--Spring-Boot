import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from '../train.service';
import { etrain } from '../etrain';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router:ActivatedRoute,rr:Router,private myservice:TrainService) {
    console.log("hello");
   }

  trainnumb:any;
  

  ngOnInit(): void {
    this.trainnumb=this.router.snapshot.paramMap.get('tn');
    this.myservice.deletTainInfo(this.trainnumb).subscribe(result=>{
       alert("profile deleted");
    })
  }
}
