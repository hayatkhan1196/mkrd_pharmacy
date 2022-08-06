import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.mdk_footer} pt-5 pb-1`}>
      <div className={styles.logo}>
        <Image
          src="/assets/mdk-footer.svg"
          alt="Logo"
          width={175}
          height={42}
        />{" "}
      </div>
      <div className="container m-0 p-0">
        <div className="row">
          <div className={`${styles.content_main} col-lg-3 text-start`}>
            <p>
              Worldwide pharmacy store since <br />
              2020. We sell over 1000+ branded <br /> products on our website
            </p>
            <div className={`${styles.location} d-flex align-items-flex-start`}>
              <Image
                src="/assets/location-icon.svg"
                alt="Logo"
                width={20}
                height={22}
              />{" "}
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>
          <div className="col-lg-2">
            <ul className={styles.list_unstyled}>
              <h3>Company</h3>
              <li>about Medkart</li>
              <li>contact us</li>
              <li>frenchsee</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul className={styles.list_unstyled}>
              <h3>Our Services</h3>
              <li>Order Medicine</li>
              <li>Lab tests</li>
              <li>Know Generic</li>
              <li>Compare Medicine</li>
              <li>Locate Nearest Store</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul className={styles.list_unstyled}>
              <h3>Policy</h3>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Return & Refund Policy</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul className={styles.list_unstyled}>
              <h3>Connect with us</h3>
              <li className="d-flex justify-content-space-between">
                <Image src="/assets/in.svg" alt="Logo" width={24} height={23} />{" "}
                <Image src="/assets/fb.svg" alt="Logo" width={24} height={23} />{" "}
                <Image
                  src="/assets/twitter.svg"
                  alt="Logo"
                  width={24}
                  height={23}
                />{" "}
                <Image
                  src="/assets/youtube.svg"
                  alt="Logo"
                  width={24}
                  height={23}
                />{" "}
              </li>
              <li className="my-2">
                {" "}
                <Image
                  src="/assets/ios.svg"
                  alt="Logo"
                  width={133.26}
                  height={38.26}
                />{" "}
              </li>
              <li>
                <Image
                  src="/assets/googleplay.svg"
                  alt="Logo"
                  width={133.26}
                  height={38.26}
                />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.end_line}>
        <hr />
        <p>©2022 Medkart Pharmacy. All Rights Reserved</p>
      </div>
    </footer>
  );
}
