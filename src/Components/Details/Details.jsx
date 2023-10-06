import Styles from "./Details.module.css";

const Details = () => {
  return (
    <section className={Styles["Details-container"]}>
      <div className={Styles.latitude}>
        <h3 className={Styles.title}>Latitude</h3>
        <h2>32432432.523412</h2>
      </div>

      <div className={Styles.longitude}>
        <h3 className={Styles.title}>Langitude</h3>
        <h2>32432432.523412</h2>
      </div>
    </section>
  );
};

export default Details;
