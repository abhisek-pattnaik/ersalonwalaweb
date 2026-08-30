import Booking_overview from "./Graph_compo/Booking_overview";
import Revenue_overview from "./Graph_compo/Revenue_overview";

export default function Dashboard_graph() {
  return (
    <>
    <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
        <div className="flex-1 w-full min-w-0">
            <Revenue_overview/>
        </div>
        <div className="flex-1 w-full min-w-0">
            <Booking_overview/>
        </div>
    </div>
    </>
  )
}
