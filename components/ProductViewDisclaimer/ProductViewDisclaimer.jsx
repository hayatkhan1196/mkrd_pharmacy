import React from 'react'

import styles from "./ProductViewDisclaimer.module.scss";

export default function ProductViewDisclaimer() {
  return (
    <>
        <div className='mt-4'>
            <h6 className={`${styles.title}`}>
                Disclaimer
            </h6>
            <p className={`${styles.para}`}>
                The Information provided here is accurate, updated and complete as per the best practices of the Company. Please note that this information should not be treated as a replacement for physical medical consulation or adivce. We do not take any responsibility for the consequences arising out of the aforementioned information. The Information provided here is accurate, updated and complete as per the best practices of the Company. Please note that this information should not be...Read more
            </p>
        </div>
    </>
  )
}
