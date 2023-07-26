package com.Train.controller;

import java.util.List;

import org.hibernate.sql.Template;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Train.Entity.eTrain;
import com.Train.Service.TrainServiceInterface;


@RestController
@CrossOrigin
public class TrainController {
	
	@Autowired
	private TrainServiceInterface ti;
	
	@PostMapping("createTrainInfo")
	public eTrain creatTrainData(@RequestBody eTrain et) {
		//System.out.println(et.getName() + et.getArrivalTime()+ et.getDestTime()+et.getTrainNo()+et.getSourceSt());;
		ti.createTrainService(et);
		return new eTrain();
	}

	@GetMapping("viewalltrain")
	public List<eTrain> viewallTrain(){
		return ti.viewallService();
	}
	
	@GetMapping("viewTraindetail/{tn}")
	public eTrain viewTrain(@PathVariable("tn") int i){
		return ti.viewTrainService(i);
	}
	
	@DeleteMapping("deleteTrainDetail/{tn}")
	public eTrain deletetrain(@PathVariable("tn") int i) {
		ti.deleteTrainService(i);
		return new eTrain();
	}
	
	@PutMapping("editTrainDetail/{id}")
	public eTrain edittrain(@PathVariable("id") int i, @RequestBody eTrain et) {
		et.setTrainNo(i);
		ti.editTrainService(et);
		return new eTrain();
	}
	
}
