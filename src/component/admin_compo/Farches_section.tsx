import Fillter_and_addfraches from "./Franches_compo/Fillter_and_addfraches";
import Fraches_card from "./Franches_compo/Fraches_card";
import Fraches_data_tale from "./Franches_compo/Fraches_data_tale";

export default function Farches_section() {
  return (
    <>
     <main className="p-6">
        <Fraches_card/>
        <Fillter_and_addfraches/>
        <Fraches_data_tale/>
     </main>
    </>
  )
}
