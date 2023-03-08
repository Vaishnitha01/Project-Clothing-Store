package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ClothingStore;
import com.example.demo.Service.DService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DController {
	@Autowired
	private DService Sserve;
	
	@PostMapping("/add")
	public ClothingStore postDresses(@RequestBody ClothingStore stu) {
		return Sserve.saveDetails(stu);
	}
	
	@GetMapping("/")
	public List<ClothingStore> showDresses() {
		List<ClothingStore> a = new ArrayList<>();
		a = Sserve.getAllDetails();
		return a;
	}
	
	@DeleteMapping("/del/{id}")
	public String delDresses(@PathVariable("id") int stud_id) {
		Sserve.delById(stud_id);
		return "Successfully deleted";
	}
	
	@PutMapping("/update/{id}")
	public String updateDresses(@PathVariable int id, @RequestBody ClothingStore obj) {
		Sserve.updateDres(id, obj);
		
		return "Successfully updated";
	}

}

