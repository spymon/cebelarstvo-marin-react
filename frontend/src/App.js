import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages'
import { GlobalStyle } from './components/GlobalStyle'
import { Login } from './pages/Login'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
