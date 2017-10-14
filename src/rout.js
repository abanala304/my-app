import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">First-name</Link></li>
        <li><Link to="/hi">Middle-name</Link></li>
        <li><Link to="/hello">Last_name</Link></li>
      </ul>

    

      <Route exact path="/" component={Anil}/>
      <Route path="/hi" component={Rao}/>
      <Route path="/hello" component={Banala}/>
    </div>
  </Router>
)

const Anil = () => (
  <div>
    <h2>Anil</h2>
  </div>
)

const Rao = () => (
  <div>
    <h2>Rao</h2>
  </div>
)

const Banala = ({ match }) => (
  <div>
    <h2>Banala</h2>
    <ul>
      <li>
        <Link to={`${match.url}/25`}>
             Age
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Thank you for visit.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default BasicExample;