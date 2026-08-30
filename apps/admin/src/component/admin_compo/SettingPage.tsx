import RolesPermissions from "./Setting/RolesPermissions";
import NotificationCard from "./Setting/NotificationCard";
import GeneralSettings from "./Setting/GeneralSettings";
import AppBanners from "./Setting/AppBanner";
import PaymentGateways from "./Setting/PaymentGateways";
import SecuritySettings from "./Setting/SecuritySettings";
import "./CSS/SettingPageCs.css"
import FooterActions from "./Setting/FooterActions";

export default function SettingSection() {
    return (
        <>

            <div className="settings-page">
                {/* Row 1 */}
                <div className="roles">
                    <RolesPermissions />
                </div>

                <div className="notifications">
                    <NotificationCard />
                </div>

                {/* Row 2 */}
                <div className="general">
                    <GeneralSettings />
                </div>

                <div className="banner">
                    <AppBanners />
                </div>

                {/* Row 3 */}
                <div className="payment">
                    <PaymentGateways />
                </div>

                <div className="security">
                    <SecuritySettings />
                </div>

                <div className="footer-container">
                    <FooterActions />
                </div>
            </div>
        </>
    )
}





