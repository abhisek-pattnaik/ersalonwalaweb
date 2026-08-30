import Admin_information from "./Admin_profile_compo/Admin_information";
import Application_prefrence from "./Admin_profile_compo/Application_prefrence";
import Security_and_activity from "./Admin_profile_compo/Security_and_activity";

export default function Admin_profile_section() {
  return (
    <main className="p-6">
        <Admin_information/>
        <Security_and_activity/>
        <Application_prefrence/>
    </main>
  )
}
