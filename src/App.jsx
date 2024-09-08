import './App.css'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <Menu/>
      <div className='home-container'>
        <Home/>
      </div>
      
    </>
  )
}

export default App
