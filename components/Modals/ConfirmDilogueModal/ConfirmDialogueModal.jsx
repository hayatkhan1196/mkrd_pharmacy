import React from "react";
import Modal from "react-bootstrap/Modal";

import styles from "./ConfirmDialogueModal.module.scss";

import { useDispatch } from "react-redux";
import { deleteCartItem } from "redux/action/cartAction";

const ModalCoupen = ({ show, setShow, item }) => {
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteCartItem(item.product.id));
    setShow(false);
  };
  return (
    <>
      <Modal show={show} className={styles.modal}>
        <Modal.Body className="p-4 m-3 d-flex justify-content-center">
          <h4>
            Are you sure you want to remove {item?.product?.name} from cart?
          </h4>
        </Modal.Body>
        <Modal.Footer className={`row p-0 ${styles.footer}`}>
          <div
            onClick={() => {
              handleDelete(item);
            }}
            className={`${styles.modalBtn} col`}
          >
            Yes
          </div>
          <div
            onClick={() => {
              setShow(false);
            }}
            className={`${styles.modalBtn} col`}
          >
            No
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCoupen;
