package com.stan.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.stan.demo.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
