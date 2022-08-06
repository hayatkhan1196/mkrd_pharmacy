import Image from "next/image";
import React, { useState } from "react";
import styles from "./CartGenericAlternativeCard.module.scss";

export default function CartGenericAlternativeCard({ item, handleUndo }) {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const dicreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className={`row ${styles.med_Card} pt-3 box-shadow-bg  mb-3`}>
        <div className="col-sm-3">
          <Image
            src="/assets/medicane.svg"
            width={101}
            height={101}
            alt="tablet"
          />
        </div>
        <div className="col-sm-7">
          <div className="row">
            <div className="col-md-8">
              <h5 className={styles.med_h5}>
                {item && item.title}IMDUR 30MG TAB 1X305D INJ 1000ML 10X7
              </h5>
              <p className={styles.med_p}>
                By {item && item.description}ASTRA ZENECANIRLIFE Derrei
              </p>

              <h6 className={styles.med_h6}>₹{item && item.price} 35</h6>
              <div>
                <div className={`${styles.counter}`}>
                  <a className={styles.a_tag} onClick={() => dicreaseCount()}>
                    -
                  </a>
                  <div className={styles.count}>{count}</div>
                  <a className={styles.a_tag} onClick={() => increaseCount()}>
                    +
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <a className={styles.icon}>
                <Image
                  src="/assets/smart_choice.svg"
                  alt="Nr"
                  width={65}
                  height={65}
                />
              </a>
              <p className={`${styles.med_p}`}>You made a smart choice</p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className={styles.right_side}>
            <div>
              <a
                onClick={() => {
                  handleUndo();
                }}
                className={styles.undo}
              >
                undo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
