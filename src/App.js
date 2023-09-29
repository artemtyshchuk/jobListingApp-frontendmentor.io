import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Header } from "./components/Header/Header";
import { FilterPanel } from "./components/FilterPanel/FilterPanel";
import { JobList } from "./components/JobList/JobList";

import { addPositions } from "./features/positions/position-slice";
import data from "./mock/data.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  });
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
