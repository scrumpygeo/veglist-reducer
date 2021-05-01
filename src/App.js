import VegContextProvider from './contexts/VegContext'
import VegList from './components/VegList'
import NewVegForm from './components/NewVegForm'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <VegContextProvider>
        <Navbar />
        <VegList />
        <NewVegForm />
      </VegContextProvider>
    </div>
  )
}

export default App
