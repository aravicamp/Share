package net.atpco.pfc.ui.service;

import lombok.Getter;
import lombok.ToString;

@ToString
public class PFCModel {
	@Getter
	private String carrierCode;
	@Getter
	private String status;
	@Getter
	private Integer sequenceNumber;
	@Getter
	private String effectiveDate;
	@Getter
	private String discontinueDate;

	public PFCModel(String carrierCode, 
			String status, 
			Integer sequenceNumber, 
			String effectiveDate, 
			String discontinueDate){
		this.carrierCode = carrierCode;
		this.status = status;
		this.sequenceNumber = sequenceNumber;
		this.effectiveDate = effectiveDate;
		this.discontinueDate = discontinueDate;
	}
	
	
	
}
