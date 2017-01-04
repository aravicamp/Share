package net.atpco.pfc.ui.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pfc")
public class PfcUiService {

	@CrossOrigin
	@RequestMapping(value ="/{airportCode}",
			method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> retrievePFC(
			@PathVariable(required=true) final String airportCode) 
					throws Exception {
		final Map<String,Object> returnData = new HashMap<String,Object>();
		returnData.put("data", preparePFCModel(airportCode));
		returnData.put("message", "");
		System.out.println("Got a request "+airportCode);
		return returnData;
	}
	
	private List<PFCModel> preparePFCModel(String airportCode){
		List<PFCModel> models = new ArrayList<>();
		int i=0;
		models.add(new PFCModel(airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		models.add(new PFCModel(airportCode,"Incomplete",i++, "01Jan16",""));
		models.add(new PFCModel(airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		models.add(new PFCModel(airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		models.add(new PFCModel(airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		return models;
	}
}
