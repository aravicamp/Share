package net.atpco.pfc.ui.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@AllArgsConstructor
public class PFCModel {
	@Getter
	private String action;
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
}
