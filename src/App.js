import VegContextProvider from './contexts/VegContext'
import VegList from './components/VegList'
function App() {
  return (
    <div className='App'>
      <VegContextProvider>
        <VegList />
      </VegContextProvider>
    </div>
  )
}

export default App
