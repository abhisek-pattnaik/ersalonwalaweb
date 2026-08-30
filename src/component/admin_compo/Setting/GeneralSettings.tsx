import { Settings } from "lucide-react";
import "./GeneralSettings.css";




const GeneralSettings = () => {
    return (
        <>
            <div className="general-settings-card">
                <div className="card-header">
                    <div className="header-title">
                        <Settings size={16} className="header-icon" />
                        <h3>General Settings</h3>
                    </div>

                    <p>Basic configuration for your business profile.</p>
                </div>

                <div className="settings-form">

                    <div className="form-group">
                        <label>App Name</label>
                        <input
                            type="text"
                            defaultValue="Engineer Salon"
                        />
                    </div>

                    <div className="form-group">
                        <label>Support Email</label>
                        <input
                            type="email"
                            defaultValue="support@engineersalon.com"
                        />
                    </div>

                    <div className="form-group">
                        <label>Support Phone</label>
                        <input
                            type="text"
                            defaultValue="+1 (555) 000-1234"
                        />
                    </div>

                    <div className="form-group">
                        <label>Default Currency</label>
                        <select>
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                            <option>GBP (£)</option>
                            <option>INR (₹)</option>
                        </select>
                    </div>

                    <div className="form-group full-width">
                        <label>Timezone</label>

                        <select>
                            <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option>(GMT+05:30) India Standard Time</option>
                            <option>(GMT+00:00) UTC</option>
                        </select>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GeneralSettings;