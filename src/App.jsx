import { useState } from "react";
import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Siderbar";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum aokseçlask dçlajsçklejaklçsed dçaslkdlças"
          />
          <Post author="Gabriel Buzzi" content="post massa" />
        </main>
      </div>
    </>
  );
}

export default App;
