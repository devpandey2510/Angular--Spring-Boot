package com.Train.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Train.Entity.eTrain;

@Repository
public interface TrainDaoInterface extends JpaRepository<eTrain, Integer> {

}
