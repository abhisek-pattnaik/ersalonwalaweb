import { useState } from "react";
import { CreditCard } from "lucide-react";
import "./PaymentGateways.css";

interface Gateway {
    id: number;
    name: string;
    keyLabel: string;
    key: string;
    enabled: boolean;
    color: string;
}

const PaymentGateways = () => {
    const [gateways, setGateways] = useState<Gateway[]>([
        {
            id: 1,
            name: "Razorpay",
            keyLabel: "KEY ID",
            key: "rzp_live_****************",
            enabled: true,
            color: "#3b82f6",
        },
        {
            id: 2,
            name: "Stripe",
            keyLabel: "SECRET KEY",
            key: "sk_live_****************",
            enabled: false,
            color: "#8b5cf6",
        },
    ]);

    const toggleGateway = (id: number) => {
        setGateways((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, enabled: !item.enabled }
                    : item
            )
        );
    };

    return (

        <>
            <div className="payment-card">
                <div className="payment-header">
                    <div className="payment-title">
                        <CreditCard size={16} className="payment-icon" />
                        <h3>Payment Gateways</h3>
                    </div>

                    <p>Configure your transaction processors.</p>
                </div>

                {gateways.map((gateway) => (
                    <div className="gateway-card" key={gateway.id}>
                        <div className="gateway-top">
                            <div className="gateway-info">
                                <div
                                    className="gateway-logo"
                                    style={{ background: gateway.color }}
                                >
                                    💳
                                </div>

                                <span>{gateway.name}</span>
                            </div>

                            <button
                                className={`toggle ${gateway.enabled ? "active" : ""}`}
                                onClick={() => toggleGateway(gateway.id)}
                            >
                                <span className="thumb"></span>
                            </button>
                        </div>

                        <label>{gateway.keyLabel}</label>

                        <input
                            type="password"
                            value={gateway.key}
                            readOnly
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PaymentGateways;