import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import SelectCopen from "components/CartSelectCopen";
import { Input } from "reactstrap";
import styles from "./CoupenModal.module.scss";

const ModalCoupen = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className={styles.modal}>
        <button className={styles.button} onClick={handleClose}>
          X
        </button>
        <Modal.Header>
          {/* <Modal.Title>n</Modal.Title> */}
          <span className={styles.coupen}>Apply Coupon</span>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Input type="text" placeholder="Enter Coupon Code" />
            <SelectCopen />
            <SelectCopen />
            <SelectCopen />
            <SelectCopen />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCoupen;
