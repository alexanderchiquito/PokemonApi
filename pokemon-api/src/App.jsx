import { AppRouter } from './AppRouter'
import { PokemonProvaider } from './context/PokemonProvaider'
import './index.css'

function App() {


  return (
    <PokemonProvaider>
       <AppRouter/>
    </PokemonProvaider>
  )
}

export default App
