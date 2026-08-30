import Recent_booking from "./Tablelist_compo/Recent_booking";
import Salon_status from "./Tablelist_compo/Salon_status";

export default function Dashboard_status() {
  return (<>
    <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
        <div className="w-full lg:w-auto">
            <Salon_status/>
        </div>
        <div className="flex-1 w-full min-w-0">
            <Recent_booking/>
        </div>
    </div>
    </>
  )
}
