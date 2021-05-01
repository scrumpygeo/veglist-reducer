import VegContextProvider from './contexts/VegContext'
import VegList from './components/VegList'
import NewVegForm from './components/NewVegForm'

function App() {
  return (
    <div className='App'>
      <VegContextProvider>
        <VegList />
        <NewVegForm />
      </VegContextProvider>
    </div>
  )
}

export default App
