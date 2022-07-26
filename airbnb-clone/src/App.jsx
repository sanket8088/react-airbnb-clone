import './App.css'
import Header from './Components/Header/Header'
import Introduction from './Components/Introduction/Introduction'
import Card from './Components/Card/Card'

function App() {

  return (
    <>
    <Header />
    <Introduction />
    <Card lesson = "new lesson1"
          price = "$ 120"
          />
    </>
    
  )
}

export default App
