import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((likeCountInsideScope) => {
      return likeCountInsideScope + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/nicolassampaio.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 2h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Cometário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
