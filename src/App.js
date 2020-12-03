
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Footer, Navbar } from "./components";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignIn";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/signin" exact component={SignUpPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
