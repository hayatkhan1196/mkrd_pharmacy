import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'


import AlternateItemsCarousel from "components/AlternateItemsCarousel/AlternateItemsCarousel"
import ProductDeliveryInfo from "components/ProductDeliveryInfo/ProductDeliveryInfo"
import ProductDescription from "components/ProductDescription/ProductDescription"
import ProductDisplay from "components/ProductDisplay/ProductDisplay"
import ProductSummary from "components/ProductSummary/ProductSummary"
import ProductViewAlternateItemWrapper from "components/ProductViewAlternateItemWrapper/ProductViewAlternateItemWrapper"
import ProductViewBanner from "components/ProductViewBanner/ProductViewBanner"
import ProductViewDisclaimer from "components/ProductViewDisclaimer/ProductViewDisclaimer"
import SidebarCartAction from "components/SidebarCartAction/SidebarCartAction"
import SidebarPrescriptionAction from "components/SidebarPrescriptionAction/SidebarPrescriptionAction"


import { getGenericAlternate, getProductDetails } from 'redux/action/productAction'

const Medicine = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.productDetails)
  const genericAlternateList = useSelector((state) => state.product.genericAlternateList)

  useEffect(() => {
    if(router.query.id) {
      dispatch(getProductDetails(router.query.id))
      dispatch(getGenericAlternate(router.query.id))
    }
  }, [router, dispatch])
  

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-9">
          <ProductDisplay
            id={productData.id}
            name={productData.name_web}
            manufacturer={productData.manufacturer_name}
            mrp={productData.mrp} 
            salePrice={productData.sales_price} 
            image={productData.images} 
            alternative={genericAlternateList.length}
          />
          <ProductDeliveryInfo
            rx={productData.is_rx_required}
          />
          <ProductSummary
            offerPrice={productData.sales_price}
            mrp={productData.mrp} 
            combinations={productData.combinations}
          />
          {/* Product details section */}
          {
            productData.product_contents && <ProductDescription/>
          }
          {/* Product alternate section */}
          {
            genericAlternateList.length > 0 && (
              <>
                <ProductViewAlternateItemWrapper 
                  name={productData.name_web}
                  salePrice={productData.sales_price}
                  combinations={productData.combinations}
                >
                  <AlternateItemsCarousel/>
                </ProductViewAlternateItemWrapper>
                <ProductViewBanner/>
              </>
            )
          }
          <ProductViewDisclaimer/>
        </div>
        <div className="col-3">
          <SidebarCartAction/>
          <SidebarPrescriptionAction/>
        </div>
      </div>
    </div>
  )
}

export default Medicine
