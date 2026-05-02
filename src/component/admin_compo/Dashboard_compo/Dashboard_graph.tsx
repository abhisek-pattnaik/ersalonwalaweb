import Booking_overview from "./Graph_compo/Booking_overview";
import Revenue_overview from "./Graph_compo/Revenue_overview";

export default function Dashboard_graph() {
  return (
    <>
    <div className="flex mt-4">
        <Revenue_overview/>
        <Booking_overview/>
    </div>
    </>
  )
}
