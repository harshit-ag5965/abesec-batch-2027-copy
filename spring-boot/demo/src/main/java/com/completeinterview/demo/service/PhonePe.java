package com.completeinterview.demo.service;

public class PhonePe implements PaymentGateway {

    @Override
    public String pay() {
        return "Payment done via PhonePe";
    }
}
