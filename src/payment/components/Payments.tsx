import { Payment } from "../types";
import { PaymentComponent } from "./PaymentComponent";

export interface PaymentsProps {
  payments: Payment[];
}

export function Payments({ payments }: PaymentsProps) {
  return (
    <div>
      {payments.map((payment) => {
        return <PaymentComponent key={payment.name} payment={payment} />;
      })}
    </div>
  );
}
