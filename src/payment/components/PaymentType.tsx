import { Payment } from "../types";

interface PaymentProps {
  payment: Payment;
}

export function PaymentIdeal({ payment }: PaymentProps) {
  return <div>{payment.name}</div>;
}

export function PaymentPaypal({ payment }: PaymentProps) {
  return <div>{payment.name}</div>;
}

export function PaymentPin({ payment }: PaymentProps) {
  return <div>{payment.name}</div>;
}

export function PaymentGiftcard({ payment }: PaymentProps) {
  return <div>{payment.name}</div>;
}

export function PaymentVvv({ payment }: PaymentProps) {
  return <div>{payment.name}</div>;
}
