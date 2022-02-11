import React, { Component } from "react";
import Tokenlist from "./token";

class mainGame extends Component {
  constructor(props) {
    super(props);

    this.resetState = this.resetState.bind(this);

    this.state = {
      tokenList: [
        { name: "paper", color: "blue", img: "icon-paper.svg" },
        { name: "scissors", color: "yellow", img: "icon-scissors.svg" },
        { name: "rock", color: "red", img: "icon-rock.svg" },
      ],
      gameOption: false,
      result: { score: 0, layer: "DRAW" },
      playerToken: { name: "und", color: "null", img: "null" },
      computerToken: { name: "und", color: "null", img: "null" },
    };
  }

  playerHandler(pToken) {
    this.setState({ playerToken: pToken });
    // start cpu option
    this.computerHandler();
  }

  computerHandler() {
    // Generate random option for cpu add result as a callback after updating state
    let rdm = Math.floor(Math.random() * this.state.tokenList.length);
    this.setState({ computerToken: this.state.tokenList[rdm] }, () =>
      this.logicHandler(
        this.state.playerToken.name,
        this.state.computerToken.name
      )
    );
    // Change status value
    this.setState({ gameOption: true });
  }

  logicHandler(player, computer) {
    switch (player + computer) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        this.setState({
          result: { score: this.state.result.score + 1, layer: "YOU WIN" },
        });
        break;
      case "scissorsrock":
      case "rockpaper":
      case "paperscissors":
        this.state.result.score > 0
          ? this.setState({
              result: { score: this.state.result.score - 1, layer: "YOU LOSE" },
            })
          : this.setState({ result: { score: 0, layer: "YOU LOSE" } });
        break;
      default:
        this.setState({
          result: { score: this.state.result.score, layer: "DRAW" },
        });
    }
  }

  resetState() {
    this.setState({ gameOption: false });
  }

  render() {
    if (!this.state.gameOption) {
      return (
        <main>
          <div className="gamepath">
            {this.state.tokenList.map((token) => (
              <Tokenlist
                item={token}
                key={token.name}
                onChildClick={() => this.playerHandler(token)}
              />
            ))}
          </div>
        </main>
      );
    } else {
      return (
        <main onLoad={() => this.props.gameScore(this.state.result)}>
          <div className="resultpath">
            <div
              className={`circle__animation ${
                this.state.result.layer === "YOU WIN" ? "active" : ""
              }`}
            >
              <div className="add">
                <p className="primary--text picked--text">YOU PICKED</p>
                <Tokenlist
                  picked="token__picked"
                  item={this.state.playerToken}
                  key={this.state.playerToken.name}
                />
              </div>

              <div className="circle" style={{ animationDelay: "-3s" }}></div>
              <div className="circle" style={{ animationDelay: "-2s" }}></div>
              <div className="circle" style={{ animationDelay: "-1s" }}></div>
              <div className="circle" style={{ animationDelay: "0s" }}></div>
            </div>

            <div
              className={`circle__animation ${
                this.state.result.layer === "YOU LOSE" ? "active" : ""
              }`}
            >
              <div className="add">
                <p className="primary--text picked--text">THE HOUSE PICKED </p>
                <Tokenlist
                  picked="token__picked"
                  item={this.state.computerToken}
                  key={this.state.computerToken.name}
                />
              </div>

              <div className="circle" style={{ animationDelay: "-3s" }}></div>
              <div className="circle" style={{ animationDelay: "-2s" }}></div>
              <div className="circle" style={{ animationDelay: "-1s" }}></div>
              <div className="circle" style={{ animationDelay: "0s" }}></div>
            </div>
          </div>

          <h2 className="primary--text result__layer">
            {this.state.result.layer}
          </h2>
          <a className="btn--play" onClick={this.resetState}>
            PLAY AGAIN
          </a>
        </main>
      );
    }
  }
}

export default mainGame;
