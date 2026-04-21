package com.food.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String items;

    private double total;

    public Order() {}

    public Order(String items, double total) {
        this.items = items;
        this.total = total;
    }

    public Long getId() { return id; }
    public String getItems() { return items; }
    public double getTotal() { return total; }

    public void setId(Long id) { this.id = id; }
    public void setItems(String items) { this.items = items; }
    public void setTotal(double total) { this.total = total; }
}