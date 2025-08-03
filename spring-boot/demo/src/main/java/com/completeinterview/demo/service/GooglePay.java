package com.completeinterview.demo.service;

public class GooglePay implements PaymentGateway {

    @Override
    public String pay() {
        return "Payment done via Google Pay";
    }
}
