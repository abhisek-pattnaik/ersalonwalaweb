import Fillter_and_newoutlet from "./Outlet_compo/Fillter_and_newoutlet";
import Outlet_cards from "./Outlet_compo/Outlet_cards";
import Outlet_filter_add from "./Outlet_compo/Outlet_filter_add";
import Outlet_utilization from "./Outlet_compo/Outlet_utilization";

export default function Outlet_section() {
  return (
    <>
     <main className="p-6">
        <Outlet_cards/>
        <Fillter_and_newoutlet/>
        <div className="grid grid-cols-2 gap-4">
            <Outlet_filter_add/>
            <Outlet_utilization/>
        </div>
     </main>
    </>
  )
}
