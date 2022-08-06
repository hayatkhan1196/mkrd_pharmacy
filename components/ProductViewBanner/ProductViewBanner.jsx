
import React from 'react'
import Image from 'next/image';

import styles from "./ProductViewBanner.module.scss";

export default function ProductViewBanner() {
    return (
        <>
            <div className={`card my-3 p-4`}>
                <div className='d-flex justify-content-around'>
                    <div className={`text-center py-2`}>
                        <div>
                            <Image
                                width={43}
                                height={48}
                                src={'/assets/product-details/Group.png'}
                                alt=""
                            />
                        </div>
                        <div className={`${styles.text} mt-1`}> Safe and Secured Payment</div>
                    </div>
                    <div className={`text-center py-2`}>
                        <div>
                            <Image
                                width={43}
                                height={48}
                                src={'/assets/product-details/Group1.png'}
                                alt=""
                            />
                        </div>
                        <div className={`${styles.text} mt-1`}>100% Authentic Product</div>
                    </div>
                    <div className={`text-center py-2`}>
                        <div>
                            <Image
                                width={43}
                                height={48}
                                src={'/assets/product-details/reshot-icon-top-rating-feedback-YRZPJ6HCB2.png'}
                                alt=""
                            />
                        </div>
                        <div className={`${styles.text} mt-1`}>1.2 Million + Happy Customers</div>
                    </div>
                </div>
            </div>
        </>
    )
}
