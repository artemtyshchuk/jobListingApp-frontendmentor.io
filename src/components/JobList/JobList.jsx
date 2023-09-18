import styles from "./JobList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectVisiblePositions } from "../../store/positions/position-selectors";
import { JobPosition } from "../JobPosition/JobPosition";
import { addFilter } from "../../store/filters/filters-actions";
import { selectFilter } from "../../store/filters/filters-selector";

export const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter);
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
