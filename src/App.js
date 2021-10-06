import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Skills } from "./pages/skills/Skills";
import { Project } from "./pages/project/Project";
import { ContactMe } from "./pages/contact-me/ContactMe";
import { Home } from "./pages/home/Home";

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
          <Home />
        </Route>

        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
