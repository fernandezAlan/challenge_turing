import { BasicButton } from "../../styled-components/Buttons";
const Button = ({ children, onClick }) => {
  return <BasicButton onClick={onClick}>{children}</BasicButton>;
};
export default Button;
