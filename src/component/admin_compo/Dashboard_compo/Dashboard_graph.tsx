import Booking_overview from "./Graph_compo/Booking_overview";
import Revenue_overview from "./Graph_compo/Revenue_overview";

export default function Dashboard_graph() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-4 gap-6 md:gap-8">
        <Revenue_overview />
        <Booking_overview />
      </div>
    </>
  )
}
