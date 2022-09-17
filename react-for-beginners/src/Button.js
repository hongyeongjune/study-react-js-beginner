import styles from "./Button.module.css";

function Button({text, setCounter}) {
    return (
        <button
            className={styles.btn}
            onClick={() => setCounter(prev => prev + 1)}
        >
            {text}
        </button>
    )
}

export default Button;