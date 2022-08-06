import React, { useState } from "react";
import PaymentMethods from "components/PaymentMethods/paymentMethods";
import useLocalize from "i18n/i18n";
import ErrorPayment from "components/ErrorPayment/ErrorPayment";
import { useRouter } from "next/router";
import CartCheckout from "components/CartCheckOut/CartCheckout";

function Payment() {
  const { localize } = useLocalize();
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setselected] = useState("pay-online");
  const router = useRouter();

  const PaymentHandler = () => {
    setLoading(true);
    return setTimeout(() => {
      if (selected === "pay-online") {
        seterror(true);
        setLoading(false);
      } else {
        seterror(false);
        setLoading(false);
        router.push("/success");
      }
    }, 3000);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="payment-heading ms-3 mb-3"> {localize("Payement")}</h1>
        <div className="col-lg-8">
          {error && (
            <ErrorPayment
              title={localize("Payment-Error")}
              subtitle={localize("Payment-Error-Description")}
              img={"/assets/x.svg"}
              seterror={seterror}
            />
          )}

          <PaymentMethods
            title={localize("Pay-Online")}
            subtitle={localize("Netbanking-Wallet")}
            active={"pay-online"}
            img={"/assets/cashfree-logo.png"}
            selected={selected}
            setselected={setselected}
          />
          <PaymentMethods
            title={localize("Cash-on-Deliver")}
            value={"cash"}
            id={selected}
            selected={selected}
            setselected={setselected}
          />
        </div>
        <div className="col-lg-4 mb-5">
          <div className="box-shadow-bg p-3 ">
            <CartCheckout
              isNavigate={selected === "cash"}
              onClick={PaymentHandler}
              isLoading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
