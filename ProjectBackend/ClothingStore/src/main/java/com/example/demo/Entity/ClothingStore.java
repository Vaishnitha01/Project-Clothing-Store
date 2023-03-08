package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Clothes")
public class ClothingStore {
	@Id
	@GeneratedValue
	@Column(name="CODE")
	private int code;
	@Column(name="TYPE")
	private String type;
	@Column(name="SIZE")
	private String size;
	@Column(name="AVAILABILITY")
	private String availability;
	@Column(name="BRAND")
	private String brand;
	@Column(name="DISCOUNT(%)")
	private int discount;
	@Column(name="COLoUR")
	private String colour;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public String getColour() {
		return colour;
	}
	public void setColour(String colour) {
		this.colour = colour;
	}
	public ClothingStore() {
		
	}
	public ClothingStore(int code, String type, String size, String availability, String brand, int discount, String colour) {
		super();
		this.code = code;
		this.type = type;
		this.size = size;
		this.availability = availability;
		this.brand = brand;
		this.discount = discount;
		this.colour = colour;
	}
	
}