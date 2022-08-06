import styles from './ProductDescription.module.scss'

export default function ProductDescription() {
  return (
    <div className="card my-3 p-4">
      <h4 className={`${styles.title} pb-3`}>Product Details</h4>
      <div className={`${styles.content}`}>
        Dolo 650 Tablet helps relief in Pain and Fever by blocking the relies of sertains chemical messengers responsible for fever and pains. it is used to treat headaches,
        migraine, nerve pain, toothache, sore throat and cold.
        <br /><br />
        Dolo 650 Tablet hass been one of the most widely prescrible paracetamal-based medication during the covid-19 pandemic. it should be taken regularly  as per the doctor&apos;s advice.
      </div>
    </div>
  )
}
