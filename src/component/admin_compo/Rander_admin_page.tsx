
import Admin_profile_section from "./Admin_profile_section"
import Booking_section from "./Booking_section"
import CMS_and_Banner_section from "./CMS_and_Banner_section"
import Customer_section from "./Customer_section"

import Dashboard_section from "./Dashboard_section"
import Farches_section from "./Farches_section"
import Outlet_section from "./Outlet_section"
import Payment_section from "./Payment_section"
import Salon_managment_section from "./Salon_managment_section"
import SettingSection from "./SettingPage"
import Staf_section from "./Staf_section"

export default function Rander_admin_page({ navigatedata }: { navigatedata: string }) {
  if (navigatedata === "Dashboard") {
    return (
      <Dashboard_section />
    )
  }
  if (navigatedata === "Finances Management")
    return (
      <Farches_section />
    )
  if (navigatedata === "Outlet Management") {
    return (
      <Outlet_section />
    )
  }
  if (navigatedata === "Salon Management") {
    return (
      <Salon_managment_section />
    )
  }
  if (navigatedata === "Booking Management") {
    return (
      <Booking_section />
    )
  }
  if (navigatedata === "Staff Management") {
    return (
      <Staf_section />
    )
  }
  if (navigatedata === "Customer") {
    return (
      <Customer_section />
    )
  }
  if (navigatedata === "Payments") {
    return (
      <Payment_section />
    )
  }
  if (navigatedata === "CMS and Banner") {
    return (
      <CMS_and_Banner_section />
    )
  }

  if (navigatedata === "Settings") {
    return (
      <SettingSection />
    )
  }

  if (navigatedata === "profile") {
    return (
      <Admin_profile_section />
    )
  }
}
