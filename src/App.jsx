import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Quiz from './components/Quiz/Quiz'
import Tenzies from './components/tenzies/Tenzies'
import Notes from './components/notes/Notes';
import Route from './components/Route'

function App() {
  return (
    <div>
      <Header />
      <Route path="/mypf/">
        <Home />
      </Route>
      <Route path="/mypf/quiz">
        <Quiz />
      </Route>
      <Route path="/mypf/tenzies">
        <Tenzies />
      </Route>
      <Route path="/mypf/notes">
        <Notes />
      </Route>
    </div>
  )
}

export default App
