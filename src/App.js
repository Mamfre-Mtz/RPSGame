import React, { Component } from "react";
import "./Assets/css/app.css";
import Maingame from "./components/mainGame";
import Score from "./components/score";
import Rules from "./components/rules";
// import Game from "./components/game";

class App extends Component {
  constructor() {
    super();
    this.updateScore = this.updateScore.bind(this);
    this.rulesActive = this.rulesActive.bind(this);
    this.state = {
      result: { score: 0, layer: "" },
      rules: true,
    };
  }

  updateScore(data) {
    this.setState({ result: data });
  }

  rulesActive() {
    console.log("hi");
    this.setState({ rules: !this.state.rules }, () => {
      console.log(this.state.rules);
    });
  }

  closeRules() {
    this.setState({ rules: !this.state.rules }, () => {
      console.log(this.state.rules);
    });
  }

  render() {
    return (
      <div className="app">
        <header className="score__container">
          <Score marcador={this.state.result.score} />
        </header>

        <Maingame gameScore={this.updateScore} />

        <Rules />
      </div>
    );
  }
}

export default App;
