import { BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages'
import { GlobalStyle } from './components/GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  )
}

export default App
