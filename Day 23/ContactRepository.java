package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.ContactEntity;

public interface ContactRepository extends JpaRepository<ContactEntity, Long> {

}