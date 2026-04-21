package com.food.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.food.backend.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}