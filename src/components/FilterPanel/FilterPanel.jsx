import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterPanel.module.scss";
import { Card } from "../../UI/Card";
import { Stack } from "../../UI/Stack";
import { Badge } from "../../UI/Badge";

import { selectFilter } from "../../store/filters/filters-selector";
import { removeFilter, clearFilter } from "../../store/filters/filters-actions";

export const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter);

  if (currentFilters.length === 0) {
    return null;
  }
  return (
    <Card className={styles.filterPanel}>
      <div className={styles.filterPAnelWrapper}>
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button
          onClick={() => dispatch(clearFilter())}
          className={styles.filterPanelLink}
        >
          Clear
        </button>
      </div>
    </Card>
  );
};
