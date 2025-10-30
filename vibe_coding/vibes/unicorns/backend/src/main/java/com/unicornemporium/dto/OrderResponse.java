package com.unicornemporium.dto;

import com.unicornemporium.model.Order;

import java.time.LocalDateTime;

public class OrderResponse {
    
    private Long id;
    private String customerName;
    private String customerEmail;
    private String deliveryAddress;
    private String deliveryMethod;
    private Double totalAmount;
    private LocalDateTime orderDate;
    private Order.OrderStatus status;

    public OrderResponse() {
    }

    public OrderResponse(Long id, String customerName, String customerEmail, String deliveryAddress, String deliveryMethod, Double totalAmount, LocalDateTime orderDate, Order.OrderStatus status) {
        this.id = id;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.deliveryAddress = deliveryAddress;
        this.deliveryMethod = deliveryMethod;
        this.totalAmount = totalAmount;
        this.orderDate = orderDate;
        this.status = status;
    }
    
    public static OrderResponse fromOrder(Order order) {
        return new OrderResponse(
            order.getId(),
            order.getCustomerName(),
            order.getCustomerEmail(),
            order.getDeliveryAddress(),
            order.getDeliveryMethod(),
            order.getTotalAmount(),
            order.getOrderDate(),
            order.getStatus()
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getDeliveryMethod() {
        return deliveryMethod;
    }

    public void setDeliveryMethod(String deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public Order.OrderStatus getStatus() {
        return status;
    }

    public void setStatus(Order.OrderStatus status) {
        this.status = status;
    }
}
