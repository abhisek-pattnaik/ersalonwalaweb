import { useState } from "react";
import { Shield, Monitor, Smartphone } from "lucide-react";
import "./SecuritySettings.css";

const SecuritySettings = () => {
    const [twoFactor, setTwoFactor] = useState(true);

    const sessions = [
        {
            id: 1,
            icon: <Monitor size={14} />,
            device: "MacBook Pro - San Francisco",
            subtitle: "Current Session",
            status: "ONLINE",
            statusClass: "online",
        },
        {
            id: 2,
            icon: <Smartphone size={14} />,
            device: "iPhone 15 Pro - New York, NY",
            subtitle: "Last active 2 hours ago",
            status: "LOGOUT",
            statusClass: "logout",
        },
    ];

    return (
        <>
            <div className="security-card">
                <div className="security-header">
                    <div className="security-title">
                        <Shield size={16} className="security-icon" />
                        <h3>Security Settings</h3>
                    </div>

                    <p>Protect your account and data access.</p>
                </div>

                <div className="security-box">
                    <div>
                        <h4>Account Password</h4>
                        <span>45 days ago</span>
                    </div>

                    <button className="change-btn">
                        Change Password
                    </button>
                </div>

                <div className="security-box">
                    <div className="two-factor-left">
                        <div className="shield-circle">
                            <Shield size={14} />
                        </div>

                        <div>
                            <h4>2-Factor Authentication</h4>
                            <span>Add an extra layer of security</span>
                        </div>
                    </div>

                    <button
                        className={`toggle ${twoFactor ? "active" : ""}`}
                        onClick={() => setTwoFactor(!twoFactor)}
                    >
                        <span className="thumb"></span>
                    </button>
                </div>

                <div className="sessions-title">
                    ACTIVE SESSIONS
                </div>

                {sessions.map((session) => (
                    <div className="session-row" key={session.id}>
                        <div className="session-left">
                            <span className="session-icon">
                                {session.icon}
                            </span>

                            <div>
                                <h5>{session.device}</h5>
                                <span>{session.subtitle}</span>
                            </div>
                        </div>

                        <span className={session.statusClass}>
                            {session.status}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SecuritySettings;