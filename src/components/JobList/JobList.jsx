import styles from "./JobList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addFilter } from "../../features/filters/filter-slice";
import { selectVisiblePositions } from "../../features/positions/position-slice";
import { JobPosition } from "../JobPosition/JobPosition";

export const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.filters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className={styles.jobList}>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};
