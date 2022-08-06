import styles from './ProductSummary.module.scss'

export default function ProductSummary(props) {

    const getSavings = (mrp, salePrice) => {
      let saving = Number(mrp - salePrice).toFixed(2)
      let savingPercetage = Number((mrp-salePrice)*100/mrp).toFixed(0)
      let savingString = `₹ ${saving} (${savingPercetage}% on MRP)`
      return savingString;
    }

    return (
        <>
          <div className="card  p-4">
            <h4 className={`${styles.title} mb-3`}>Product Summary</h4>
            <table className={`${styles.font_family} table table-striped `}>
              <tbody>
                <tr>
                  <th className={`${styles.line_height_3} ps-3`} scope="row">Offer Price</th>
                  <td className={`${styles.line_height_3} ps-3`}>₹ {props.offerPrice} </td>
                </tr>
                <tr>
                  <th className={`${styles.line_height_3} ps-3`} scope="row">Your Savings </th>
                  <td className={`${styles.line_height_3} ps-3`}>{getSavings(props.mrp, props.offerPrice)}</td>
                </tr>
                <tr>
                  <th className={`${styles.line_height_3} ps-3`} scope="row">Best Offer </th>
                  <td className={`${styles.line_height_3} ps-3`}>Use Code: MEDCARTFIRST & Get 18% Discount</td>
                </tr>
                <tr>
                  <th className={`${styles.line_height_3} ps-3`} scope="row">Contains  </th>
                  <td className={`${styles.line_height_3} ps-3`}>{props.combinations}</td>
                </tr>
                <tr>
                  <th className={`${styles.line_height_3} ps-3`} scope="row">Uses</th>
                  <td className={`${styles.line_height_3} ps-3`}>Pain and Fever</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
    )
}