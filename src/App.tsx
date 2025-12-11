import { Button } from "./components/ui/button";
import CrayPayButton from "./cray-widget";
import { ENV } from "./cray-widget/env";
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen gap-8">
      <CrayPayButton
        apiKey={ENV.VITE_GATEWAY_API_KEY}
        onPaymentStarted={(e) => console.log("paymentStarted", e)}
        onPaymentCompleted={(e) => console.log("paymentCompeted", e)}
        onPaymentFailed={(e) => console.log("paymentFailed", e)}
        onPaymentRejected={(e) => console.log("paymentRejected", e)}
        payload={{
          destinationChain: 137,
          amount: ".01",
          destinationAddress: "0x82656BB86876A96bbbD553Df7E441AbD46235e25",
        }}
      >
        <Button>Mainnet</Button>
      </CrayPayButton>
      <CrayPayButton
        testnet={true}
        apiKey={ENV.VITE_GATEWAY_API_KEY}
        onPaymentStarted={(e) => console.log("paymentStarted", e)}
        onPaymentCompleted={(e) => console.log("paymentCompeted", e)}
        onPaymentFailed={(e) => console.log("paymentFailed", e)}
        onPaymentRejected={(e) => console.log("paymentRejected", e)}
        payload={{
          destinationChain: 84532,
          amount: ".1",
          destinationAddress: "0x82656BB86876A96bbbD553Df7E441AbD46235e25",
        }}
      >
        <Button>Testnet</Button>
      </CrayPayButton>
    </div>
  );
}
