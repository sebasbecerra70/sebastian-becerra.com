import styles from "./style.module.scss";

/**
 * Renders identically on the server and the client: no state, no animation
 * library. The slide-out and the progress fill are CSS animations, so this
 * clears itself even if JavaScript never executes. `leaving` only shortens it.
 */
export default function Loader({ leaving }: { leaving: boolean }) {
  return (
    <div
      className={`${styles.introduction} ${leaving ? styles.leaving : ""}`}
      aria-hidden="true"
    >
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className={styles.name}>Sebastian Becerra</span>
          <span className={styles.role}>Software Engineer</span>
        </div>
        <div className={styles.track}>
          <div className={styles.fill} />
        </div>
      </div>
    </div>
  );
}
