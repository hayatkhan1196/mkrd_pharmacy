

import AddAddressModel from "components/AddAddressModel/AddAddressModel"
import CartCheckout from "components/CartCheckOut/CartCheckout"
import CartStepper from "components/CartStepper/cartStepper"
import CheckoutAddressInput from "components/CheckoutAddressInput/CheckoutAddressInput"
import { useState } from "react"
import styles from "styles/Address.module.scss"


const Address = () => {

  const [modelOpen, setModelOpen] = useState(false)

  return (
    <>
    
      <div className="container mb-5 pb-2">
        <div className="row mt-4 px-5">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center my-3">
              <h5 className="item-cart mb-0">Select Address</h5>
              <div className={`${styles.add_btn} cursor-pointer`} onClick={() => setModelOpen(true)}>+ Add New Address</div>
            </div>
            <CheckoutAddressInput/>            
          </div>
          <div className="col-lg-4">
            {/* <div className="mt-5 pt-5 ms-3" > */}
              <div className="box-shadow-bg p-3 mt-5 mb-4">
                <CartCheckout />
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* address model */}
      <AddAddressModel
        open={modelOpen}
        setOpen={setModelOpen}
      />
    </>
  )
}

export default Address
