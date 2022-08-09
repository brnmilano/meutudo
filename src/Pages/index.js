import styles from "./styles.module.scss";
import Home from "./Home";
import Contratos from "./Contratos"
import Duvidas from "./Duvidas";
import Conta from "./Conta";
import Espera from "./Espera";

function Pages() {

  return (
    <div className={styles.container}>
        <Conta />
    </div>
  );
}

export default Pages;
