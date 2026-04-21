package com.food.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.food.backend.model.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {
}