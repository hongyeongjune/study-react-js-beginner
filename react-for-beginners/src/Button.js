import styles from "./Button.module.css";

function Button({text, setCounter}) {
    return (
        <div>
            <button
                className={styles.btn}
                onClick={() => setCounter(prev => prev + 1)}
            >
                {text}
            </button>
        </div>
    )
}

export default Button;