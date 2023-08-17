import "./App.css";
import Book from "./pages/Book";
import Kharkiv from "./pages/Kharkiv";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Kharkiv/>
        <Book/>
      </header>
    </div>
  );
}

export default App;
