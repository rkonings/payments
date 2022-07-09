import "./styles.css";

import { Payments } from "./payment/components/Payments";
import { paymentsConfig } from "./payment/config";
export default function App() {
  return (
    <div className="App">
      <Payments payments={paymentsConfig} />
    </div>
  );
}
