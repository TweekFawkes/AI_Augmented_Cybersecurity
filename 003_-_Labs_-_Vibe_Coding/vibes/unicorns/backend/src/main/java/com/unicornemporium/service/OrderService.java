package com.unicornemporium.service;

import com.unicornemporium.dto.OrderItemRequest;
import com.unicornemporium.dto.OrderRequest;
import com.unicornemporium.dto.OrderResponse;
import com.unicornemporium.model.Order;
import com.unicornemporium.model.OrderItem;
import com.unicornemporium.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    
    @Transactional
    public OrderResponse createOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setCustomerName(orderRequest.getCustomerName());
        order.setCustomerEmail(orderRequest.getCustomerEmail());
        order.setDeliveryAddress(orderRequest.getDeliveryAddress());
        order.setDeliveryMethod(orderRequest.getDeliveryMethod());
        order.setTotalAmount(orderRequest.getTotalAmount());
        
        for (OrderItemRequest itemRequest : orderRequest.getItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setProductId(itemRequest.getProductId());
            orderItem.setProductName(itemRequest.getProductName());
            orderItem.setQuantity(itemRequest.getQuantity());
            orderItem.setPrice(itemRequest.getPrice());
            order.addItem(orderItem);
        }
        
        Order savedOrder = orderRepository.save(order);
        return OrderResponse.fromOrder(savedOrder);
    }
    
    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }
    
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
    
    public List<Order> getOrdersByEmail(String email) {
        return orderRepository.findByCustomerEmail(email);
    }
}
