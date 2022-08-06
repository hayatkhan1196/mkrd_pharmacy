import React from 'react'
import { ModalHeader } from 'react-bootstrap';
import { Modal, ModalBody } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./AddAddressModel.module.scss";
import { Briefcase, Home, MapPin } from 'react-feather';
import { useDispatch } from 'react-redux';
import { addAddress } from 'redux/action/AddressAction';
export default function AddAddressModel(props) {

    const dispatch = useDispatch()
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid Email ID format")
            .required("Email ID is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters at minimum")
            .required("Password is required"),
    });


    return (
        <>
            <Modal
                isOpen={props.open}
                toggle={() => props.setOpen(false)}
                centered
                backdrop="static"
                size="lg" 
                style={{maxWidth: '640px', width: '100%'}} // for width
            >
                <ModalHeader>
                    {" "}
                    <button
                        className={`${styles.modal_close_btn}`}
                        onClick={() => props.setOpen(false)}
                    >
                        X
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className='px-2 py-1'>
                        <div className={`${styles.model_heading}`}>Add New Address</div>
                        <Formik
                            enableReinitialize
                            initialValues={
                                {
                                    fullName : "",
                                    mobileNumber : "",
                                    pincode : "",
                                    city : "",
                                    state : "",
                                    fullAddress : "",
                                    state : "",
                                    addressType : "home",
                                    landMark : ""

                                }
                            }
                            // validationSchema={validationSchema}
                            onSubmit={(values) => {
                                if (values) {
                                    dispatch(addAddress(values))
                                }
                            }}
                        >
                            {(props) => (
                                <Form  className="py-2">
                                    <div className="row g-3 my-1">
                                        <div className="col">
                                            <label htmlhtmlFor="" className="form-label" >Full name*</label>
                                            <div className="input-group ">
                                                <Field type="text" className={`form-control `} name='fullName' placeholder="Full name" />
                                            </div>
                                            <ErrorMessage
                                                component="div"
                                                name="fullName"
                                                className="invalid-feedback px-3 py-1"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlhtmlFor="" className="form-label" >Mobile number*</label>
                                            <div className="input-group ">
                                                <Field type="tel" className={`form-control `} name='mobileNumber' placeholder="Mobile number" />
                                            </div>
                                            <ErrorMessage
                                                component="div"
                                                name="mobileNumber"
                                                className="invalid-feedback px-3 py-1"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-3 my-1 my-1">
                                        <div className="col">
                                            <label htmlhtmlFor="" className="form-label" >Pincode*</label>
                                            <Field type="text" className={`form-control `} name='pincode' placeholder="Pincode" />
                                            <ErrorMessage
                                                component="div"
                                                name="pincode"
                                                className="invalid-feedback px-3 py-1"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlhtmlFor="" className="form-label" >City*</label>
                                            <div className="input-group">
                                                <Field type="text" className={`form-control `} name='city' placeholder="City" />
                                            </div>
                                            <ErrorMessage
                                                component="div"
                                                name="city"
                                                className="invalid-feedback px-3 py-1"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-3 my-1">
                                        <div className="col-6">
                                            <label htmlhtmlFor="" className="form-label" >State*</label>
                                            <div className="input-group ">
                                                <Field type="text" className={`form-control`} name='state' placeholder="State" />
                                            </div>
                                            <ErrorMessage
                                                component="div"
                                                name="state"
                                                className="invalid-feedback px-3 py-1"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-3 my-1">
                                        <div className="col">
                                            <label htmlhtmlFor="" className="form-label" >Full address*</label>
                                            <div className="input-group ">
                                                <Field as="textarea" cols="30" rows="3" className="form-control" name='fullAddress' placeholder="Full address" />
                                            </div>
                                            <ErrorMessage
                                                component="div"
                                                name="fullAddress"
                                                className="invalid-feedback px-3 py-1"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-3 my-1">
                                        <div className="col">
                                            <label htmlhtmlFor="" className="form-label" >Land mark (optional)</label>
                                            <div className="input-group ">
                                                <Field type="text" className={`form-control`} name='landMark' placeholder="Land mark" />
                                            </div>
                                            <ErrorMessage
                                                component="div"
                                                name="landMark"
                                                className="invalid-feedback px-3 py-1"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row g-3 my-1">
                                        <label htmlhtmlFor="" className="form-label" >Save address as*</label>
                                        <div className="col">
                                            <div className='d-inline'>
                                                <Field type="radio" className="btn-check" value="home" name="addressType" id="addressType1" />
                                                <label className="btn btn-outline-success" htmlFor="addressType1"><Home/> Home</label>
                                            </div>
                                            <div className='d-inline'>
                                                <Field type="radio" className="btn-check" value="other" name="addressType" id="addressType2"/>
                                                <label className="btn btn-outline-danger" htmlFor="addressType2"><MapPin/> Other</label>
                                            </div>
                                            <div className='d-inline'>
                                                <Field type="radio" className="btn-check" value="office" name="addressType" id="addressType3"/>
                                                <label className="btn btn-outline-danger" htmlFor="addressType3"><Briefcase/> Work</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col">
                                            <button type="button" className={`btn btn-outline-primary mt-3 w-100`}>Cancel</button>
                                        </div>
                                        <div className="col">
                                            <button type="submit" className={`btn btn-primary mt-3 w-100`}>SAVE</button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}
