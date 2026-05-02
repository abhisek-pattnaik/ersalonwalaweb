import Recent_booking from "./Tablelist_compo/Recent_booking";
import Salon_status from "./Tablelist_compo/Salon_status";

export default function Dashboard_status() {
  return (<>
    <div className="flex mt-2">
        <Salon_status/>
        <Recent_booking/>
    </div>
    </>
  )
}
