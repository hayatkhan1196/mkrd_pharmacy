import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Cart() {
  const [isRadio, setIsRadio] = useState(5);
  const handleChange = (e) => {
    // string passed in
    // a string returned by default
    console.log(e.currentTarget.value);
    // add + to the event to make the value a number
    setIsRadio(+e.currentTarget.value);
  };
  return (
    <div className="container success-page">
      <div className="row">
        <div className="col-lg-12 text-center mt-5 mb-5 thank-you">
          <img
            className="mt-5 me-4"
            src="/assets/thanks.png"
            alt=""
          />
          <h2 className="mt-3">Your Order has been Placed</h2>
          <h4>Thank you for choosing our Medkart!</h4>
          <Link href="/" as="/">
            <button className="mt-3">back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
