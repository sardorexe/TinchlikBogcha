import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Tarbiyachi from "./pages/Tarbiyachi";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/tarbiyachi" component={Tarbiyachi} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
