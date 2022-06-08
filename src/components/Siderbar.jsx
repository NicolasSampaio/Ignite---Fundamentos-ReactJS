import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1538109622777-6c99f03bf6fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="Imagem de capa do perfil"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img
          src="https://github.com/nicolassampaio.png"
          alt="Foto de perfil"
          className={styles.avatar}
        />

        <strong>Nicolas Sampaio</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
