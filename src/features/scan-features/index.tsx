import Image from "next/image";
import styles from "./styles.module.scss";
import { scanfeatures } from "@/data";
import SlideShow from "../../../public/Assets/images/slide-show.png";

const ScanFeatures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.big_text}>Features Designed for Your Success</div>
      <div className={styles.green_background}>
        <div className={styles.card_main}>
          {scanfeatures.map((card) => (
            <div className={styles.card} key={card.id}>
              <p className={styles.texts}>
                {card.mainText} <span className={styles.span}>{card.span}</span>
              </p>
            </div>
          ))}
        </div>
        <div className={styles.enhanced}>
          <Image src={SlideShow} alt="menu" className={styles.menu_icon} />
        </div>
      </div>
    </div>
  );
};

export default ScanFeatures;