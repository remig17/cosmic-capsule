import styles from "../styles/Home.module.css";
function Home() {
  return (
    <div className={styles.main}>
      <div>
        <img
          src="/images/1.png"
          alt="Cosmic Capsule Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
          <div>
            <p>
              LA MORT EST TELLEMENT INÉLUCTABLE <br />
              QU'ELLE PREND TOUT LE MONDE PAR SURPRISE.
            </p>
          </div>
          <div className={styles.button}>
            <p>SAUF VOUS.</p>
            <button className={styles.btn}>JE REPREND LE POUVOIR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
