package com.unicornemporium.dto;

import com.unicornemporium.model.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    
    private Long id;
    private String customerName;
    private String customerEmail;
    private String deliveryAddress;
    private String deliveryMethod;
    private Double totalAmount;
    private LocalDateTime orderDate;
    private Order.OrderStatus status;
    
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
}

