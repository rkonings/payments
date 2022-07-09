import { Payment } from "../types";

import * as PaymentType from "./PaymentType";
interface PaymentComponentProps {
  payment: Payment;
}

function getComponentName(_name: Payment["name"]): keyof typeof PaymentType {
  const name = _name.charAt(0).toUpperCase() + _name.slice(1);

  return `Payment${name}` as keyof typeof PaymentType;
}

export function PaymentComponent({ payment }: PaymentComponentProps) {
  const Component = PaymentType[getComponentName(payment.name)];

  if (!Component) {
    throw Error(`${payment.name} is not implemented`);
  }

  return <Component payment={payment} />;
}
