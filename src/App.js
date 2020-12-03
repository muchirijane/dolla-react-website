
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Footer} from "./components";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignIn";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/signin"  component={SignUpPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
