import React from "react";
import ReactDOM from "react-dom";
import styles from "./dropdown.css";
import { useIsMounted } from "../../utils/react/isMounted";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onClose = NOOP,
  onOpen = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const [isMounted] = useIsMounted();

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => {
    if (isMounted) {
      isDropdownOpen ? onOpen() : onClose();
    }
  }, [isDropdownOpen]);

  const node =
    typeof document !== "undefined"
      ? document?.querySelector("#dropdown_root")
      : null;
  if (!node) return null;

  const handleOpen = () => {
    if (isOpen == undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div className={styles.listContainer}>
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>,
          node
        )}
    </div>
  );
}
