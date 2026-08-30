import React, { useState } from "react";
import {
    Bell,
    Smartphone,
    Mail,
    MessageSquare,
} from "lucide-react";

import "./NotificationCard.css"

interface NotificationItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    enabled: boolean;
}

interface ToggleProps {
    checked: boolean;
    onChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
    return (
        <button
            className={`toggle ${checked ? "active" : ""}`}
            onClick={onChange}
        >
            <span className="toggle-thumb"></span>
        </button>
    );
};

const NotificationCard: React.FC = () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>([
        {
            id: 1,
            title: "Push Notifications",
            icon: <Smartphone size={18} />,
            enabled: true,
        },
        {
            id: 2,
            title: "Email Updates",
            icon: <Mail size={18} />,
            enabled: true,
        },
        {
            id: 3,
            title: "SMS Alerts",
            icon: <MessageSquare size={18} />,
            enabled: false,
        },
    ]);

    const toggle = (id: number) => {
        setNotifications((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, enabled: !item.enabled }
                    : item
            )
        );
    };

    return (
        <div className="notification-card">
            <div className="notification-header">
                <Bell className="header-icon" size={18} />

                <div>
                    <h2>Notifications</h2>
                    <p>Manage how you stay informed.</p>
                </div>
            </div>

            <div className="notification-list">
                {notifications.map((item) => (
                    <div key={item.id} className="notification-item">
                        <div className="notification-left">
                            <span className="item-icon">{item.icon}</span>
                            <span>{item.title}</span>
                        </div>

                        <Toggle
                            checked={item.enabled}
                            onChange={() => toggle(item.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationCard;