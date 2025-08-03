package com.completeinterview.demo.service;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public String pay(String mode) {

        if(!validate()) {
            return "Invalid";
        }

        if (mode.equals("phonepe")) {
            return "Payment done via PhonePe";
        } else if (mode.equals("gpay")) {
            return "Payment done via GooglePay";
        } else {
            return "Invalid Payment Mode";
        }
    }

    private boolean validate() {
        return true;
    }
}
