import React from 'react'

import styles from "./CheckoutAddressInput.module.scss";

export default function CheckoutAddressInput() {
  return (
    <>
        {/* address input card */}
        <div className="card">
            <div className="card-body">
            <div className={`${styles.address_input } p-3 my-3`}>
                <div className="row">
                <div className="col">
                    <h6 className={`${styles.address_title} `}>Home</h6>
                    <p className={`${styles.address_text} `}>
                    Jasdeep singh saini,
                    380009,
                    1208, Phoenix,near Vijay Crossroads, 
                    Navrangpura, Ahmedabad,
                    Gujarat 
                    </p>
                </div>
                <div className="col d-flex justify-content-end align-items-start">
                    <input type="radio" name="address" value="1" />
                </div>
                </div>
            </div>
            <div className={`${styles.address_input } p-3`}>
                <div className="row">
                <div className="col">
                    <h6 className={`${styles.address_title} `}>Home</h6>
                    <p className={`${styles.address_text} `}>
                        Jasdeep singh saini,
                        380009,
                        1208, Phoenix,near Vijay Crossroads, 
                        Navrangpura, Ahmedabad,
                        Gujarat 
                    </p>
                </div>
                <div className="col d-flex justify-content-end align-items-start">
                    <input type="radio" name="address" value="1" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
