import styles from "./styles.module.scss";

function Input({
  type,
  background = "none",
  padding,
  borderRadius = 50,
  name,
  placeholder,
  fontSize = 16,
  width,
  border = "2px solid #FFFFFF",
}) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      id={name}
      style={{
        background,
        padding,
        borderRadius,
        fontSize,
        width,
        border,
      }}
    />
  );
}

export default Input;
