import Recent_complinc_Audit from "./Salon_manage_compo/Recent_complinc_Audit";
import Salon_filter_table from "./Salon_manage_compo/Salon_filter_table";

export default function Salon_managment_section() {
  return (
    <>
     <main className="p-6">
        <Salon_filter_table/>
        <Recent_complinc_Audit/>
     </main>
    </>
  )
}
