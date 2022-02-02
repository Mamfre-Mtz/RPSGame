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
      score: 0,
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
        console.log("you win!!");
        this.setState({ score: this.state.score + 1 });
        break;
      case "scissorsrock":
      case "rockpaper":
      case "paperscissors":
        console.log("you lose");
        this.state.score > 0
          ? this.setState({ score: this.state.score - 1 })
          : (this.state.score = 0);
        break;
      default:
        console.log("DRAW");
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
          );
        </main>
      );
    } else {
      return (
        <main onLoad={() => this.props.gameScore(this.state.score)}>
          <div>
            <h2>I choose {this.state.playerToken.name}</h2>
            <Tokenlist
              item={this.state.playerToken}
              key={this.state.playerToken.name}
            />
          </div>
          <div>
            <h2>Computer choose {this.state.computerToken.name}</h2>
            <Tokenlist
              item={this.state.computerToken}
              key={this.state.computerToken.name}
            />
          </div>

          <button onClick={this.resetState}>play again</button>
        </main>
      );
    }
  }
}

export default mainGame;
