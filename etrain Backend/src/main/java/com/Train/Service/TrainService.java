package com.Train.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Train.Dao.TrainDaoInterface;
import com.Train.Entity.eTrain;

@Service
@Transactional
public class TrainService implements TrainServiceInterface{

	@Autowired
	private TrainDaoInterface td;
	
	public List<eTrain> viewallService() {
		
		return td.findAll();
	}

	
	public void createTrainService(eTrain et) {
		td.save(et);
		
	}

	public eTrain viewTrainService(int i) {
		
		return td.findById(i).get();
	}

	public void deleteTrainService(int i) {
		td.deleteById(i);
		
	}


	
	public void editTrainService( eTrain et) {
		td.saveAndFlush(et);
		
	}

}
