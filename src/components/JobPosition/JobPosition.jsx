import styles from "./JobPosition.module.scss";
import PropTypes from "prop-types";
import { Card } from "../../UI/Card";
import { Stack } from "../../UI/Stack";
import { Badge } from "../../UI/Badge";

export const JobPosition = ({
  id,
  logo,
  company,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleAddFilter,
}) => {
  const badges = [].concat(role, level, ...languages, ...tools);
  return (
    <Card>
      <div className={styles.jobPosition}>
        <div className={styles.jobPositionInfo}>
          <img className={styles.jobPositionAvatar} src={logo} alt={company} />
          <div className={styles.jobPositionBody}>
            <div className={styles.jobPositionCompany}>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className={styles.jobPositionTitle}>{position}</h2>
            <Stack>
              <div className={styles.jobPositionMeta}>{postedAt}</div>
              <div className={styles.jobPositionMeta}>{contract}</div>
              <div className={styles.jobPositionMeta}>{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map((item) => (
            <Badge key={item} onClick={() => handleAddFilter(item)}>
              {item}
            </Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};

JobPosition.propsTypes = {
  id: PropTypes.number,
  logo: PropTypes.string,
  company: PropTypes.string,
  new: PropTypes.bool,
  featured: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  level: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  tools: PropTypes.arrayOf(PropTypes.string),
  handleAddFilter: PropTypes.func,
};
