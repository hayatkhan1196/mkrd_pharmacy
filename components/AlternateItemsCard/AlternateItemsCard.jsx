import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import styles from "./AlternateItemsCard.module.scss";

export default function AlternateItemsCard(props) {
    return (
        <>
            <Link href={`/medicine/${props.id}`}>
                <div className={`p-2 cursor-pointer`} >
                    <div className='d-flex justify-content-center'>  
                        <div className={`${styles.slider_img}`}>
                            {
                                props.image?.url && (
                                    <Image
                                        width="100%"
                                        height="100%"
                                        src={props.image?.url}
                                        alt={props.image?.name}
                                        layout="responsive"
                                        objectFit="contain"
                                    />

                                )
                            }
                        </div>
                    </div>
                    <div className={`mt-4 =`}>
                        <div className={`${styles.item_name} font-weight-bold fs_20 ${styles.title_box_height}`}> {props.name}</div>
                        <div className={`${styles.manufacturer_name} fw_400 fs_16`} >By {props.manufacturer}</div>
                        <div className={`${styles.sales_price} font-weight-bold mb-1`}>₹ {props.salePrice} 
                            {/* <span className={`${styles.cheaper_rate} font-weight-bold fs_16 text-uppercase`}> 2% cheaper</span>  */}
                            <span className={`${styles.cost_per_tablet} font-weight-bold fs_16`}>
                                <del> ₹ {props.mrp}</del>
                            </span>
                        </div>
                    </div>
                    <button className={`${styles.alternat_addbtn} w-100`} >Add +</button>
                </div>
            </Link>
        </>
    )
}
