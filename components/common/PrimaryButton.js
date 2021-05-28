import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/common/Button.module.css";

const PrimaryButton = ({ children, className: classStyle, ...other }) => {
  return (
    <Button className={`${styles.primary} ${classStyle}`} {...other}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
