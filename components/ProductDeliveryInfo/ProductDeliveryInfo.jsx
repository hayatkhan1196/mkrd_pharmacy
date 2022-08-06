import Image from 'next/image';
import React from 'react'

import styles from "./ProductDeliveryInfo.module.scss";

export default function ProductDeliveryInfo(props) {
    return (
        <>
            {/* Delivery Details Card */}
            <div className="card my-3 p-4">
                <div className="d-flex justify-content-around">
                    <div className="align-items-center d-flex">
                        <Image
                            width={20}
                            height={20}
                            src="/assets/product-details/carbon_delivery.png"
                            alt="delivery_icon"
                        />
                        <span className={`ms-3 ${styles.delivery_TEXT}`}> Get it deliverd by <b>Tomorrow</b></span></div>
                    <div className="align-items-center d-flex">
                        <Image
                            width={20}
                            height={20}
                            src="/assets/product-details/la_money-bill-wave.png"
                            alt="money_icon"
                        />
                        <span className={`ms-3 ${styles.delivery_TEXT}`}>  Cash on delivey <b>Available</b></span></div>
                    {
                        props.rx === true && (
                            <div className="align-items-center d-flex">
                                <Image
                                    width={20}
                                    height={20}
                                    className={``}
                                    src="/assets/product-details/mdi_prescription.png"
                                    alt="medicine_prescription"
                                />
                                <span className={`ms-3 ${styles.delivery_TEXT}`}>This medicine required <b>Prescription</b></span>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
