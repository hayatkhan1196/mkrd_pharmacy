import CartStepper from "components/CartStepper/cartStepper";
import React from "react";
import { useState } from "react";

function Stapper() {
  const labelArray = ["step1", "step2", "step3", "step4", "step5"];
  const [cusrrentStep, updatedCurrenStep] = useState(1);

  return (
    <div>
      <CartStepper />
    </div>
  );
}

export default Stapper;
