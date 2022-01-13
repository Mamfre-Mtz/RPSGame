import Test from "./components/testt";
import "./Assets/css/app.css";
import Token from "./components/token";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Hallo alle zusammen </h2>
      </header>
      <main>
        {/* Rock, Paper, Scissors */}
        <Token name="icon-scissors.svg" color="blue" />
        <Token name="icon-rock.svg" />
        <Token name="icon-paper.svg" />
      </main>
    </div>
  );
}

export default App;
