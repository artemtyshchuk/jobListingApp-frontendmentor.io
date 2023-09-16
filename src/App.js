import { Header } from "./components/Header/Header";
import { FilterPanel } from "./components/FilterPanel/FilterPanel";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FilterPanel />
      </div>
    </>
  );
}

export default App;
