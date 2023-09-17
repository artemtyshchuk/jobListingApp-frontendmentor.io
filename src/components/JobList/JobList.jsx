import styles from "./JobList.module.scss";
import data from "../../mock/data.json";
import { JobPosition } from "../JobPosition/JobPosition";

export const JobList = () => {
  return (
    <div className={styles.jobList}>
      {data.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};
