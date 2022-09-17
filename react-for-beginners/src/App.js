import styles from './App.module.css';
import Button from './Button';
import { useEffect, useState } from 'react';
import TodoList from './TodoList';

function Hello() {
    useEffect(() => {
        console.log("created");
        return () => console.log("destoryed");
    }, []);

    return <h3>Hello</h3>;
}

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [showing, setShowing] = useState(false);

    useEffect(() => {
        console.log("I run only once.");
    }, []);
    useEffect(() => {
        if (counter) {
            console.log("I run when 'counter' changes.");
        }
    }, [counter]);
    useEffect(() => {
        if (keyword !== "") {
            console.log("I run when 'keyword' changes.");
        }
    }, [keyword]);
    useEffect(() => {
        if (counter && (keyword !== "")) {
            console.log("I run when 'counter or keyword' changes");
        }
    }, [counter, keyword]);

    return (
        <div>
            <h1 className={styles.title}>Welcome</h1>
            <input
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder={"search here..."}
                type="text"
            />
            <h3>{counter}</h3>
            <Button text={"counter up"} setCounter={setCounter} />
            {
                showing && <Hello />
            }
            <button onClick={() => setShowing(prev => !prev)}>{showing ? "Hide" : "Show"}</button>
            <TodoList />
        </div>
    );
}

export default App;
