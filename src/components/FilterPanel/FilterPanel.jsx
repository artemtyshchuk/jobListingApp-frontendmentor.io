import styles from "./FilterPanel.module.scss";
import { Card } from "../../UI/Card";
import { Stack } from "../../UI/Stack";
import { Badge } from "../../UI/Badge";

export const FilterPanel = () => {
  return (
    <Card className={styles.filterPanel}>
      <div className={styles.filterPAnelWrapper}>
        <Stack>
          <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge>
        </Stack>

        <button className={styles.filterPanelLink}>Clear</button>
      </div>
    </Card>
  );
};
