package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.ClothingStore;

public interface DRepo extends JpaRepository<ClothingStore,Integer>{

}
