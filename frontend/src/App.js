import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages'
import { GlobalStyle } from './components/GlobalStyle'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
      </Switch>
    </Router>
  )
}

export default App
