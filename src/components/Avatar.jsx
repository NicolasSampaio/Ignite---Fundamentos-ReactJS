import styles from "./Avatar.module.css";

export function Avatar({ hasBorder, src }) {
  return (
    <img
      src={src}
      alt="Foto de perfil"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
