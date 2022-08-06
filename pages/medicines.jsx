import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import ListingCard from "components/ReUseableComponents/ListingCard/ListingCard";
import { getSearchResultApi } from "redux/sagas/requests/searchRequests";
import Link from "next/link";

const Medicines = () => {
  const searchResult = useSelector((state) => state.search.searchResult);
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const [productList, setProductList] = useState(searchResult);
  const route = useRouter();
  // for infinite scroll observer
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: false,
  });
  // fetch next page data
  useEffect(() => {
    console.log("(inview) call next page api here -----", inView);
    // call next page api here
  }, [inView]);

  useEffect(() => {
    const getResponse = async () => {
      let _query = route?.query.q;
      let _item = await getSearchResultApi(_query);
      let _itemList = _item?.data?.products;
      setProductList(_itemList);
    };
    getResponse();
  }, [route?.query.q]);

  return (
    <main className="container listing-page container-fluid ">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          {productList.map((value, key) => {
            let isLast = false;
            if (key + 1 === productList.length) {
              isLast = true;
            }
            return (
              <>
                <ListingCard
                  id={value.id}
                  key={key}
                  name={value.name}
                  manufacturer={value.manufacturer_name}
                  image={value.images[0].url}
                  mrp={value.mrp}
                  rx={value.is_rx_required}
                />
                {/* for infinite scroll observer */}
                {isLast === true && (
                  <div style={{ height: 20 }} ref={ref}></div>
                )}
              </>
            );
          })}
          {/* {
            inView &&
            <div className="text-center">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          } */}
        </div>
        <div className="col-lg-3 col-3 box-shadow-bg third">
          <div className="row d-flex justify-content-between mb-5">
            <div className="col-lg-8">
              {cartDetails?.items?.length > 0 ? (
                <p className="cart-medicines p-3 ">
                  {cartDetails?.items?.length} items in your cart
                </p>
              ) : (
                <p className="cart-medicines p-3 ">Your cart is empty</p>
              )}
              <Link href="/cart">
                <button
                  className="view-cart"
                  style={{
                    width: 100,
                    border: "none",
                    background: "tranparent",
                  }}
                >
                  View Cart
                </button>
              </Link>
            </div>
            <div className="col-lg-4 col-3">
              <Image
                width={57.96}
                height={57.96}
                style={{ float: "right" }}
                src="/assets/Medicines.png"
                alt="cart mediciene"
              />
            </div>
          </div>
          <div
            style={{ padding: 15, marginLeft: -10, marginTop: 10 }}
            className="right-cart-medicines box-shadow-bg"
          >
            <div className="right-card2">
              <p className="cart-medicines mt-3 mb-0">Save your time</p>
              <Image
                width={40.96}
                height={57.96}
                src="/assets/Clipboard.png"
                alt="cart mediciene"
              />
            </div>
            <h5>Order Quickely</h5>
            <p className="medicine-card-text">
              Upload doctor&apos;s prescription and we will add the medicines
              for you!
            </p>
            <button type="button" className="btn btn-white shadow-none">
              <p>Upload</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Medicines;
