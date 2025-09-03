package com.completeinterview.demo.service;

import com.completeinterview.demo.factory.PaymentGatewayFactory;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public String pay(String mode) {

        if(!validate()) {
            return "Invalid";
        }
        PaymentGateway paymentGateway = PaymentGatewayFactory.getPaymentGateway(mode);
        if(paymentGateway == null) {
            return "Invalid Mode";
        }
        return paymentGateway.pay();
    }

    private boolean validate() {
        return true;
    }
}
