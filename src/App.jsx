import styles from "../src/App.module.css"
import { Navbar } from "./componets/Navbar/Navbar"
import { Informacion } from "./componets/Informacion/Información"
import { Estudios } from "./componets/Estudios/Estudios"
import { Herramientas } from "./componets/Herramientas/Herramientas"
import { Deportes } from "./componets/Deportes/Deportes"
function App() {
  return (
    <div>
      <Navbar/>
      <Informacion/>
      <Estudios/>
      <Herramientas/>
      <Deportes/>
    </div>
  )
}
export default App