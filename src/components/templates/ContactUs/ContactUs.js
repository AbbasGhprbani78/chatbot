"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/style/signup.module.css'
import SideBar from '@/components/module/SideBar/SideBar'
import { FaArrowRightLong } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '@/components/module/Input/Input';
export default function ContactUs() {

    const [windoWidth, setWindowWidth] = useState(window.innerWidth)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        aboutUs: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key].trim() === "") {
                toast.warning(`${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty.`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return;
            }
        }

        // reg ex for Validations of inputs
        const inputValidations = [
            { name: 'firstName', regex: /^[a-zA-Z]+$/ },
            { name: 'lastName', regex: /^[a-zA-Z]+$/ },
            { name: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            { name: "phoneNumber", regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ }
        ];

        // check Validations of inputs
        for (const validation of inputValidations) {
            const { name, regex } = validation;
            if (!regex.test(formData[name])) {
                toast.error(`${name.charAt(0).toUpperCase() + name.slice(1)} is not valid.`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return;
            }
        }
        console.log(formData)
    };



    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])



    return (
        <div className={styles.signupcontainer}>
            {
                windoWidth > 1000 ?
                    <>
                        <SideBar />
                        <div className={styles.signupwrapper}>
                            <form className={styles.signupform} onSubmit={handleSubmit}>
                                <div className={styles.signupcontent}>
                                    <div className={styles.imgformcontent}>
                                        <img className={styles.logoform} src="/images/logo.svg" alt="logo" />
                                    </div>
                                    <p className={styles.textform}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>

                                    <Input
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}

                                    />
                                    <Input
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}

                                    />
                                    <Input
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}

                                    />
                                    <div className='d-flex justify-content-center'>
                                        <div className={styles.dropdownwrapper}>
                                            <select
                                                className={styles.dropdownform}
                                                name="aboutUs"
                                                value={formData.aboutUs}
                                                onChange={handleChange}
                                            >
                                                <option className={styles.optiondrop} value="ghshfghf">how do you know about us</option>
                                                <option className={styles.optiondrop} value="xfgh">xvsgms isgs pskmdgsdpk</option>
                                                <option className={styles.optiondrop} value="fxggfh">fl psdsok psgkpsdfvmxp</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btnsignupwrapper}>
                                    <button type="submit" className={styles.btnsignup}>
                                        submit
                                        <FaArrowRightLong className={styles.arrowhome} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </> :
                    <>
                        <div className={styles.signupwrapper}>
                            <form className={styles.signupform} onSubmit={handleSubmit}>
                                <div className={styles.signupcontent}>
                                    <div className={styles.imgformcontent}>
                                        <img className={styles.logoform} src="/images/logo.svg" alt="logo" />
                                    </div>
                                    <p className={styles.textform}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>

                                    <Input
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}

                                    />
                                    <Input
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}

                                    />
                                    <Input
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}

                                    />
                                    <div className='d-flex justify-content-center'>
                                        <div className={styles.dropdownwrapper}>
                                            <select
                                                className={styles.dropdownform}
                                                name="aboutUs"
                                                value={formData.aboutUs}
                                                onChange={handleChange}
                                            >
                                                <option className={styles.optiondrop} value="ghshfghf">how do you know about us</option>
                                                <option className={styles.optiondrop} value="xfgh">xvsgms isgs pskmdgsdpk</option>
                                                <option className={styles.optiondrop} value="fxggfh">fl psdsok psgkpsdfvmxp</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.btnsignupwrapper}>
                                    <button type="submit" className={styles.btnsignup}>
                                        submit
                                        <FaArrowRightLong className={styles.arrowhome} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
            }

            <ToastContainer />
        </div>
    )
}


