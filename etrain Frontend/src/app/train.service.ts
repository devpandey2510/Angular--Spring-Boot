import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {etrain} from './etrain';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { }

  getAllTrain(){
    return this.http.get<etrain>("http://localhost:10000/viewalltrain");
  }

  createTraindetails(t:etrain){
    return this.http.post<etrain>("http://localhost:10000/createTrainInfo",t);
  }

  updateTrainInfo(t:etrain,tn:number){
    return this.http.put<etrain>("http://localhost:10000/editTrainDetail/"+tn,t);
  }

  deletTainInfo(tn:number){
    return this.http.delete<etrain>("http://localhost:10000/deleteTrainDetail/"+tn);
  }

  viewTrainInfo(tn:number){
    return this.http.get<etrain>("http://localhost:10000/viewTraindetail/"+tn);
  }

}
