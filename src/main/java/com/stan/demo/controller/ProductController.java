package com.stan.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stan.demo.model.Product;
import com.stan.demo.repository.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

    @CrossOrigin
	@GetMapping("/all")
	public Iterable<Product> getAll() {
		return productRepository.findAll();
	}

	@PostMapping
	public Product addProduct(@RequestBody Product product) {
		return productRepository.save(product);

	}

}
