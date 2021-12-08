import "./App.css";
import "./App.css";
import Login from "./Pages/Login";
import Redirect from "./Pages/Redirect";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/red" component={Redirect} />
      </Router>
    </div>
  );
}

export default App;
