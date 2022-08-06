import React from 'react'
import useLocalize from 'i18n/i18n';
import styles from './HomePageStores.module.scss'
import Image from 'next/image';

export default function HomePageStores() {
const {localize} = useLocalize()
  return (
    <>
    <div className='row mt-5'>
        <div className={`${styles.leftCard} col-4`}>
         <div className={`${styles.trustedMed_text}`}>{localize('mostTrustedMedicine')}</div>
         <div className={`${styles.nearstStore_text}`}>
            {localize("findNearestStore")}
            <Image 
            className={`${styles.ml_22}`}
            src="/assets/home-page/Vectorforwardicon.svg"
            width={15}
            height={15}
            />
         </div>
        </div>
        <div className= {`col-8 d-flex justify-content-between`}>
            <div className={`${styles.rightCard}`}>
          <div className={`${styles.rightCard_text}`}>{localize('buyMedicineOffline')}</div>
          <div className={`${styles.MedKart} mt-1`}>{localize('MedKart')}</div>
          <div className= {`${styles.rightCardSub_text}`}>
            <span>{localize('100Store')}</span>
            <span className={`${styles.ml_41}`}>{localize('22cities')}</span>
            <span className={`${styles.ml_22}`}>{localize('1100CrSaving')}</span>
            </div>
            </div>
            <Image
             src="/assets/home-page/Rectangle59.png"
             height={271}
             width={400}
            />
        </div>
    </div>
    </>
  )
}
