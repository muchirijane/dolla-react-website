
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import { Navbar } from './components';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Home/>
    </Router>
  );
}

export default App;
