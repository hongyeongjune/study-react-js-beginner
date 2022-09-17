import styles from "./App.module.css";
import Button from './Button';

function App() {
  return (
    <div>
        <h1 className={styles.title}>Welcome</h1>
        <Button text={"button"} />
    </div>
  );
}

export default App;
