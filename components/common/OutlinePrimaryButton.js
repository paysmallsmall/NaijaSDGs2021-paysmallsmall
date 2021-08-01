import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/common/Button.module.css";

const OutlinePrimaryButton = ({
  children,
  className: classStyle,
  ...other
}) => {
  return (
    <Button className={`${styles.outlineprimary} ${classStyle}`} {...other}>
      {children}
    </Button>
  );
};

export default OutlinePrimaryButton;
