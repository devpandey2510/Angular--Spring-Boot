package com.Train.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TrainTable")
public class eTrain {
	private String name;
	@Id
	private int trainNo;
	private String sourceSt;
	private String destSt;
	private long arrivalTime;
	private long destTime;
	private double TicketPrice;
	
	public double getTicketPrice() {
		return TicketPrice;
	}
	public void setTicketPrice(double ticketPrice) {
		this.TicketPrice = ticketPrice;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getTrainNo() {
		return trainNo;
	}
	public void setTrainNo(int trainNo) {
		this.trainNo = trainNo;
	}
	public String getSourceSt() {
		return sourceSt;
	}
	public void setSourceSt(String sourceSt) {
		this.sourceSt = sourceSt;
	}
	public String getDestSt() {
		return destSt;
	}
	public void setDestSt(String destSt) {
		this.destSt = destSt;
	}
	public long getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(long arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public long getDestTime() {
		return destTime;
	}
	public void setDestTime(long destTime) {
		this.destTime = destTime;
	}

}
