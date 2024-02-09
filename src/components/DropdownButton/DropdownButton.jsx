import { useState } from "react";
import styles from "./Dropdown.module.css";

// колбэки и замыкания

// export default BDropdown = () => {
export const Dropdown = (props) => {
  // spread/rest
  const { name, items = [] } = props;
  //props.name

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const renderDropdownEl = (item, index) => {
    return (
      <div key={index} className={styles.dropdown_el}>
        {item.name}
      </div>
    );
  };
  // diff map and foreach
  const dropdownEl = items.map(renderDropdownEl);
  console.log(dropdownEl);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_btn} onClick={handleOpen}>
        {name}
      </div>
      {open ? (
        <div className={styles.dropdown_container}>{dropdownEl}</div>
      ) : null}
    </div>
  );
};
