import "./App.css";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar />

      <ResultsList />

      <Pagination />
    </div>
  );
}

export default App;