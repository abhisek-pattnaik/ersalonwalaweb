import Booking_cards from "./Booking_compo/Booking_cards";
import Booking_Details_data from "./Booking_compo/Booking_Details_data";
import Booking_FilterBar from "./Booking_compo/Booking_FilterBar";

export default function Booking_section() {
  return (
    <>
      <main className="p-6">
        <Booking_cards/>
        <Booking_FilterBar/>
        <Booking_Details_data/>
      </main>
    </>
  )
}
