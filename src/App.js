import React from "react";
import {
  useHistory,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Dashboard, Detail, MyPokemon } from "./pages";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/pokemon-detail/:id">
            <Detail />
          </Route>
          <Route exact path="/my-pokemon">
            <MyPokemon />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  const history = useHistory();

  return (
    <>
      <div className="text-center">
        <h4>POKE-WEB</h4>
        <h1>404 Not Found</h1>

        <div>
          Your page request may temporary moved or not available
        </div>
          <button className="button button-secondary" onClick={() => history.replace("/")}>
            Go Back
          </button>
      </div>
    </>
  );
}

export default App;
