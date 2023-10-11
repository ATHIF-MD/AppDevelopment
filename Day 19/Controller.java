package com.example.demo.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.PollingEntity;
import com.example.demo.Repository.Repository;


@CrossOrigin("*")
@RestController
@RequestMapping("/Poll")
public class Controller {

    @Autowired
    private Repository pollingRepository;
    @GetMapping(value="/get")
    public Iterable<PollingEntity> getAllPollingEntity(){
        return pollingRepository.findAll();
    }
    	
   
    @PostMapping("/post")
    public PollingEntity createtata(@RequestBody PollingEntity ad) {
        return pollingRepository.save(ad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<PollingEntity>> getById(@PathVariable  Long id){
        Optional<PollingEntity> ac = pollingRepository.findById(id);
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
	public PollingEntity updatePollingEntityDetails(@RequestBody PollingEntity b,@PathVariable Long id)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		
		b.setid(id);
		return pollingRepository.save(b);		
	}
    @DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable Long id)
	{
    	pollingRepository.deleteById(id);
		return null;
	}
}