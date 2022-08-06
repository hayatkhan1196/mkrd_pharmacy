import React from 'react'



import styles from "./ProductViewAlternateItemWrapper.module.scss";

export default function ProductViewAlternateItemWrapper(props) {
    return (
        <>
            <div className={`${styles.alternate_card} card mt-4`}>
                <button className={`${styles.alternates_button} text-capitalize`}>ALTERNATIVES</button>
                <div className="p-4">
                    <h5 className={`${styles.title}`}>{props.name} <span className={`${styles.light_text}`}>&nbsp;(₹ {props.salePrice})</span></h5>
                    <div className={`${styles.sub_title}`}>{props.combinations}</div>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}
