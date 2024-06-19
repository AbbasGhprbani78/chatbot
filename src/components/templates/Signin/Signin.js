"use client"
import React, { useState } from 'react'
import styles from '@/style/signin.module.css'
import Input from '@/components/module/Input/Input'
import { FaArrowRightLong } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signin() {
    const [formData, setFormData] = useState({
        email: '',
        password: ""
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
            { name: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
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
    }

    return (
        <div className={styles.signincontainer}>
            <div className={styles.signinwrapper}>
                <div className={styles.signinlogotext}>
                    <div className={styles.signinlogowrap}>
                        <img src="/images/logo.svg" alt="logo" />
                    </div>
                    <p className={styles.hometitle}>ARIIS<span className='mx-4'>Ai</span>Assistant</p>
                </div>
                <div className={styles.signincontent}>
                    <p className={styles.signintext}>Sign In</p>
                    <form className={styles.signinform} onSubmit={handleSubmit}>
                        <Input
                            name="email"
                            placeholder="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Input
                            name="password"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />

                        <p className={styles.forgettext}>Forget Password ?</p>
                        <div className='text-center mt-5'>
                            <button type="submit" className={styles.btnsignin}>
                                sign in
                                <FaArrowRightLong className={styles.arrowhome} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
