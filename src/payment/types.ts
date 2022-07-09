export type Payment =
  | PaymentIdeal
  | PaymentPaypal
  | PaymentGiftCard
  | PaymentPinTerminal
  | PaymentVVV;

interface PaymentIdeal {
  name: "ideal";
}

interface PaymentPaypal {
  name: "paypal";
}

interface PaymentGiftCard {
  name: "giftcard";
}

interface PaymentPinTerminal {
  name: "pin";
}

interface PaymentVVV {
  name: "vvv";
}
