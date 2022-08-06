import Image from 'next/image';
import React from 'react'

import styles from "./SidebarPrescriptionAction.module.scss";

export default function SidebarPrescriptionAction() {
    return (
        <>
            <div className="card p-3 mt-4">
                <div className='d-flex justify-content-between'>
                    <div className={`${styles.Order_save_text}`}> 
                        Saven your Time
                        <div className={`${styles.Order_orderquick_text} mt-2`}> Order Quickly</div>
                        <div className={`${styles.Order_prescription_text} mt-2`}>
                            Upload doctor&apos;s prescription and we will add the medicine for you 
                        </div>
                    </div>
                    <div className={`${styles.medicine_container}`}>
                        <Image
                            width={100}
                            height={100}
                            src={'/assets/product-details/Group6966@2x.png'}
                            alt=""
                        />
                    </div>
                </div>
                <div className='mt-4'>
                    <button className={`${styles.upload_btn}`}> Upload </button>
                </div>
            </div>
        </>
    )
}
