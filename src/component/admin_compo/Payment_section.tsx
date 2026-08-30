import Payemnt_cards from "./Payment_compo/Payemnt_cards";
import Payment_report from "./Payment_compo/Payment_report";
import Payment_status_data from "./Payment_compo/Payment_status_data";

export default function Payment_section() {
  return (
    <main className="p-6">
        <Payemnt_cards/>
        <Payment_report/>
        <Payment_status_data/>
    </main>
  )
}
