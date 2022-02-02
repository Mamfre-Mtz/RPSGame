import React, { Component } from "react";
import "./Assets/css/app.css";
import Maingame from "./components/mainGame";
import Score from "./components/score";
// import Game from "./components/game";

class App extends Component {
  constructor() {
    super();
    this.updatescore = this.updatescore.bind(this);
    this.state = {
      score: 0,
    };
  }

  updatescore(n) {
    this.setState({ score: n });
  }

  render() {
    return (
      <div className="App">
        <header className="">
          <Score marcador={this.state.score} />
        </header>

        <Maingame gameScore={this.updatescore} />

        <h4 className="primary--text">{`Rules`}</h4>
      </div>
    );
  }
}

export default App;
