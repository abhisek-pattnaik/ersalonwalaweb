import Dashboard_card from "./Dashboard_compo/Dashboard_card";
import Dashboard_graph from "./Dashboard_compo/Dashboard_graph";
import Dashboard_status from "./Dashboard_compo/Dashboard_status";

export default function Dashboard_section() {
  return (
   <>
    <main className="p-6 flex flex-col gap-6">
        <Dashboard_card/>
        <Dashboard_graph/>
        <Dashboard_status/>
    </main>
   </>
  )
}
