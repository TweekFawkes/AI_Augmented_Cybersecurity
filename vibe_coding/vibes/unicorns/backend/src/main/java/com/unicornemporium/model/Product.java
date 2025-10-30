package com.unicornemporium.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private Double price;
    
    @Column(nullable = false)
    private String category;
    
    @Column(nullable = false)
    private String image;
    
    @Column(length = 1000)
    private String description;
    
    @ElementCollection
    @CollectionTable(name = "product_features", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "feature")
    private List<String> features;
}

