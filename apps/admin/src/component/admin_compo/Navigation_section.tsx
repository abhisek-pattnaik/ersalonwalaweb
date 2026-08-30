
import { useParams } from 'react-router-dom'
import Sidenavbar from './Sidevar_header_compo/Sidenavbar'
export default function Navigation_section() {
   
  const { navigatedata } = useParams<{ navigatedata: string }>();
  return (
    <>
      <Sidenavbar rednderdata={navigatedata ?? "default_value"}/>
    </>
  )
}
