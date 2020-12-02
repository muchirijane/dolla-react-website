
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Home/>
    </Router>
  );
}

export default App;
