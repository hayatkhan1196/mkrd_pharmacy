import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingCard = (props) => {
  return (
    <div className=" col-lg-7 mb-4 col-5 listing-card box-shadow-bg cursor-pointer">
      <div className="container-fluid ">
      <Link href={`/medicine/${encodeURIComponent(props.id)}`}>

     
        <div className="row">
          <div className="col-lg-2 col-12 p-0 m-0">
            <img src={props.image} width={84} alt="log" />
          </div>
          <div className="col-lg-8 col-12 medicine-data">
            <h3 className="p-0 m-0">{props.name}</h3>
            <h4 className="p-0 m-0">By {props.manufacturer}</h4>
            {/* <div className="select-medicine-container d-flex">
              {arr &&
                arr.map((e, index) => {
                  return <button key={index}>{`${e.title} ${e.count}`}</button>;
                })}
            </div> */}
            <div className="flex-center-center pricing mt-3">
              <h3>₹ {props.mrp}</h3>
              {/* <h4>₹ 29</h4> */}
              {/* <h5>18% OFF</h5> */}
            </div>
          </div>
          <div className="col-lg-2 col-12 add-medicane">
            {
              // props.rx &&
              <Image
                width={15.82}
                height={16.41}
                src="/assets/arrow.svg"
                alt=""
              />
            }
            <button
              style={{
                width: 79,
                height: 38,
                backgroundColor: "#00683D",
                border: "none",
              }}
            >
              ADD +
            </button>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
