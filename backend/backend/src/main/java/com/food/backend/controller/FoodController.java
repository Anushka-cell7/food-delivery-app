package com.food.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.food.backend.model.Food;
import com.food.backend.repository.FoodRepository;
import com.food.backend.repository.OrderRepository;
import com.food.backend.model.Order;

@RestController
@RequestMapping("/api")
public class FoodController {

    @Autowired
    private FoodRepository repo;

    @GetMapping("/food")
    public List<Food> getAllFood() {
        return repo.findAll();
    }

    @PostMapping("/food")
    public Food addFood(@RequestBody Food food) {
        return repo.save(food);
    }
    @Autowired
private OrderRepository orderRepo;

@PostMapping("/order")
public Order placeOrder(@RequestBody Order order) {
    return orderRepo.save(order);
}
}