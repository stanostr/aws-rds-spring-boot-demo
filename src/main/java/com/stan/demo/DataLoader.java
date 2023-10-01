package com.stan.demo;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.stan.demo.model.Product;
import com.stan.demo.repository.ProductRepository;

@Component
public class DataLoader implements CommandLineRunner {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public void run(String... args) throws Exception {
		// wait to allow the DDL to create the table before loading data to it.
		Thread.sleep(5000);
		List<Product> products = Arrays.asList(
				new Product(null, "water", 1.00), 
				new Product(null, "bread", 2.00),
				new Product(null, "chicken", 3.00));
		productRepository.saveAll(products);

	}

}
