import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage, ErrorPage } from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
