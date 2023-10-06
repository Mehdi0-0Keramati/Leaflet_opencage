import { UseContextApi } from "../../Context/ContextApi";
import Styles from "./Details.module.css";

const Details = () => {
  const { coordinate } = UseContextApi();
  return (
    <section className={Styles["Details-container"]}>
      <div className={Styles.latitude}>
        <h3 className={Styles.title}>Latitude</h3>
        <h2>{coordinate.lat}</h2>
      </div>

      <div className={Styles.longitude}>
        <h3 className={Styles.title}>Langitude</h3>
        <h2>{coordinate.lng}</h2>
      </div>
    </section>
  );
};

export default Details;
