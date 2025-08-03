package com.completeinterview.demo.factory;

import com.completeinterview.demo.service.GooglePay;
import com.completeinterview.demo.service.PaymentGateway;
import com.completeinterview.demo.service.PhonePe;

public class PaymentGatewayFactory {
    public static PaymentGateway getPaymentGateway(String mode) {
        if (mode.equals("phonepe")) {
            return new PhonePe();
        } else if (mode.equals("gpay")) {
            return new GooglePay();
        } else {
            return null;
        }
    }
}
