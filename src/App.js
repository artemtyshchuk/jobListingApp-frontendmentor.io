import { Header } from "./components/Header/Header";
import { FilterPanel } from "./components/FilterPanel/FilterPanel";
import { JobList } from "./components/JobList/JobList";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
