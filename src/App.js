
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Home/>
      <SignIn/>
    </Router>
  );
}

export default App;
