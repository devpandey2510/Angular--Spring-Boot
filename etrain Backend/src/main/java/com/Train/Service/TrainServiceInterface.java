package com.Train.Service;

import java.util.List;

import com.Train.Entity.eTrain;

public interface TrainServiceInterface {

	List<eTrain> viewallService();

	void createTrainService(eTrain et);

    eTrain viewTrainService(int i);

	void deleteTrainService(int i);

	void editTrainService( eTrain et);

}
