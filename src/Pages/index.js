import Home from "./Home";
import Contratos from "./Contratos"
import styles from "./styles.module.scss";

function Pages() {

  return (
    <div className={styles.container}>
        <Contratos />
    </div>
  );
}

export default Pages;
