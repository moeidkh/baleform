import styles from "./Button.module.scss";

type PropsType = {
  onClick?: () => void;
  type: "filled" | "outlined";
  text: string;
};
const Button = (props: PropsType) => {
  return (
    <div className={styles.buttonContainer}>
      <div
        className={
          props.type === "outlined" ? styles.button_filled : styles.button
        }
        onClick={props.onClick}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Button;
