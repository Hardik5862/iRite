import Editor from "./components/Editor";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.main_container}>
      <header>
        <h1>iRite</h1>
      </header>
      <main>
        <Editor />
      </main>
    </div>
  );
};

export default App;
