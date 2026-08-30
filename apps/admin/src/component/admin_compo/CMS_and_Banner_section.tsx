import Asset_managment from "./CMS_Banner_compo/Asset_managment";
import CMS_Banner_cards from "./CMS_Banner_compo/CMS_Banner_cards";

export default function CMS_and_Banner_section() {
  return (
    <main className="p-6">
        <CMS_Banner_cards/>
        <Asset_managment/>
    </main>
  )
}
