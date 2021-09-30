import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Skills } from "./pages/skills/Skills";
import { Project } from "./pages/project/Project";
import { ContactMe } from "./pages/contact-me/ContactMe";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/skills">
          <Skills />
        </Route>

        <Route path="/projects">
          <Project />
        </Route>

        <Route path="/contact-me">
          <ContactMe />
        </Route>

        <Route exact path="/">
          <h1>This is Home page</h1>
        </Route>

        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
