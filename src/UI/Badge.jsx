import PropTypes from "prop-types";
import { ReactComponent as RemoveIcon } from "../assets/images/icon-remove.svg";

export const Badge = ({
  variant = "basic",
  colorScheme = "light",
  children,
  onClear,
  onClick,
}) => {
  return (
    <div
      className={`badge badge--${variant} badge--${colorScheme}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === "clearable" && (
        <div className="badge-remover" onClick={onClear}>
          <RemoveIcon />
        </div>
      )}
    </div>
  );
};

Badge.prototype = {
  variant: PropTypes.oneOf(["basic", "clearable", "rounded"]),
  colorScheme: PropTypes.oneOf(["light", "primary", "dark"]),
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func,
};
