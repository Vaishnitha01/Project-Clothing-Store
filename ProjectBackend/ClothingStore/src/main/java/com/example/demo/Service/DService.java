package com.example.demo.Service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.ClothingStore;
import com.example.demo.Repository.DRepo;
@Service
public class DService {
	@Autowired
	private DRepo det;
	
	public ClothingStore saveDetails(ClothingStore s) {
		return det.save(s);
	}
	
	public List<ClothingStore> getAllDetails() {
		List<ClothingStore> arr = new ArrayList<>();
		arr = det.findAll();
		return arr;
	}
	
	public void delById(int stud_id) {
		det.deleteById(stud_id);
	}
	
	public void updateDres(int id, ClothingStore obj) {
		det.saveAndFlush(obj);
	}
	
}
