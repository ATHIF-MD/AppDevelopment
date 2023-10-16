package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.PollingEntity;
import com.example.demo.Repository.Repository;

@Service
public class PollingService {

	@Autowired
	Repository pollingRepository;
	
	public List<PollingEntity> getAllPollingEntity() {
		return pollingRepository.findAll();
	}
	
	public PollingEntity getpollingEntityById(Long pollingEntityId) {
		Optional<PollingEntity> pollingEntityOptional = pollingRepository.findById(pollingEntityId);
		return pollingEntityOptional.orElse(null);
	}
	
	public PollingEntity savepollingEntity(PollingEntity pollingEntity) {
		return pollingRepository.save(pollingEntity);
	}
	
	public void deletepollingEntity(Long pollingEntityId) {
		pollingRepository.deleteById(pollingEntityId);
	}
}