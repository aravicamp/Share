package net.atpco.pfc.ui.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(
		methods={RequestMethod.GET,RequestMethod.PATCH})
@RequestMapping("/pfc")
public class PfcUiService {

	
	@RequestMapping(value ="/{airportCode}",
			method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> retrievePFC(
			@PathVariable(required=true) final String airportCode) 
					throws Exception {
		final Map<String,Object> returnData = new HashMap<String,Object>();
		returnData.put("data", preparePFCModel(airportCode));
		returnData.put("message", "");
		System.out.println("Got a request - GET - "+airportCode);
		return returnData;
	}
	
	@RequestMapping(value ="/{airportCode}",
			method = RequestMethod.PATCH)
	@ResponseBody
	public Map<String, Object> updatePFC(
			@PathVariable(required=true)final String airportCode, @RequestBody final PFCModel pfcData) 
					throws Exception {
		final Map<String,Object> returnData = new HashMap<String,Object>();
		returnData.put("message", "success");
		System.out.println("Got a request - OPTION - "+airportCode+ " - "+pfcData);
		return returnData;
	}
	
	@RequestMapping(value ="/{airportCode}",
			method = RequestMethod.DELETE)
	@ResponseBody
	public Map<String, Object> deletePFC(
			@PathVariable(required=true) final String airportCode, @RequestBody final PFCModel pfcData) 
					throws Exception {
		final Map<String,Object> returnData = new HashMap<String,Object>();
		returnData.put("message", "success");
		System.out.println("Got a request - DELETE - "+airportCode);
		return returnData;
	}
	
	@RequestMapping(value ="/saveAll",
			method = RequestMethod.POST, consumes="application/json" )
	@ResponseBody
	public Map<String, Object> saveAllPFC(
			@RequestBody final List<PFCModel> pfcData) 
					throws Exception {
		final Map<String,Object> returnData = new HashMap<String,Object>();
		returnData.put("message", "success");
		System.out.println("Got a request  - POST - "+pfcData);
		return returnData;
	}
	
	private List<PFCModel> preparePFCModel(String airportCode){
		List<PFCModel> models = new ArrayList<>();
		int i=1;
		models.add(new PFCModel("",airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		models.add(new PFCModel("",airportCode,"Incomplete",i++, "01Jan16",""));
		models.add(new PFCModel("",airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		models.add(new PFCModel("",airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		models.add(new PFCModel("",airportCode,"Incomplete",i++, "01Jan16","31Dec99"));
		return models;
	}
}
