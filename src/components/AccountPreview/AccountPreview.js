import styles from "./AccountPreview.module.css";
const AccountPreview = ({ children }) => {
  return <button className={styles.account_preview}>{children}</button>;
};

export default AccountPreview;
