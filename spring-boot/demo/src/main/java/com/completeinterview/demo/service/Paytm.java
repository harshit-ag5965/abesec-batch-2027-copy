package com.completeinterview.demo.service;

public class Paytm implements PaymentGateway {
    @Override
    public String pay() {
        return "Payment done via Paytm";
    }
}
