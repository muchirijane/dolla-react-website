
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
      <h1>What's uppppppp</h1>
    </Router>
  );
}

export default App;
