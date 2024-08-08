import React from "react";
import { whyscandish } from "@/data";
import styles from "./whyscandish.module.scss";
import Image from "next/image";
import Menu from "../../../public/Assets/images/display-dish.png";

const WhyScandish: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.big_text}>Why Digidish?</div>
      <div className={styles.card_main}>
        {whyscandish.map((card) => (
          <div className={styles.card} key={card.id}>
            <div className={styles.top}>
              {<card.icon className={styles.icon} />}
              <p className={styles.bold_text}>{card.boldText}</p>
            </div>
            <p className={styles.light_text}>{card.smallText}</p>
          </div>
        ))}
      </div>
      <div className={styles.enhanced}>
          <p className={styles.enhanced_text}>
            Enhance Your Menu management Experience with Our Digital Menu
            Solution
          </p>
          <Image src={Menu} alt="menu" className={styles.menu_icon} />
        </div>
      </div>
  );
};

export default WhyScandish;
