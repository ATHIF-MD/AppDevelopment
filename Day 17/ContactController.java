package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.ContactEntity;
import com.example.demo.Repository.ContactRepository;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping(value = "/get")
    public Iterable<ContactEntity> getAllContact() {
        return contactRepository.findAll();
    }
    
    @PostMapping("/submit")
    public ResponseEntity<String> submitMessage(@RequestBody ContactEntity message) {
        contactRepository.save(message);
        return ResponseEntity.ok("Message submitted successfully");
    }

    @PostMapping("/post")
    public ContactEntity createMessage(@RequestBody ContactEntity message) {
        return contactRepository.save(message);
    }

    @GetMapping("/{id}")
    public Optional<ContactEntity> getById(@PathVariable Long id) {
        return contactRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public ContactEntity updateMessageDetails(@RequestBody ContactEntity message, @PathVariable Long id) {
        message.setId(id);
        return contactRepository.save(message);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMessage(@PathVariable Long id) {
        contactRepository.deleteById(id);
    }
}
