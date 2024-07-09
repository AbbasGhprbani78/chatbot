"use client"
import React, { useState, useRef } from 'react'
import styles from '@/style/signin.module.css'
import Input from '@/components/module/Input/Input'
import { FaArrowRightLong } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Signin() {

    const [formData, setFormData] = useState({
        email: '',
        password: ""
    });

    const [forgetData, setForgetData] = useState({
        token: ["", "", "", ""],
        new_password: ""
    })

    const [isForgetPassword, setIsForgetPassword] = useState(false)
    const inputRefs = useRef([]);


    const handleInputChange = (e, index) => {
        const { value } = e.target;
        if (/^[0-9]$/.test(value)) {
            const newValues = [...forgetData.token];
            newValues[index] = value;
            setForgetData({
                ...forgetData,
                token: newValues
            });
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            const newValues = [...forgetData.token];
            newValues[index] = '';
            setForgetData({
                ...forgetData,
                token: newValues
            });
            inputRefs.current[index - 1].focus();
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleForgetChange = (e) => {
        const { name, value } = e.target;
        setForgetData({
            ...forgetData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
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

        const body = {
            username: formData.email,
            password: formData.password
        }
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, body)

            if (res.status === 200) {
                redirect("/chat")
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleForgetSubmit = async (e) => {

        e.preventDefault();
        if (forgetData.token.trim() && forgetData.new_password.trim()) {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/resetpassword`, forgetData)

                if (res.status === 200) {
                    console.log(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

    }



    return (
        <div className={styles.signincontainer}>
            <div className={styles.signinwrapper}>
                <div className={styles.signinlogotext}>
                    <div className={styles.signinlogowrap}>
                        <img className={styles.logosignin} src="/images/logo.svg" alt="logo" />
                    </div>
                    <p className={styles.hometitle}>ARIIS<span className='mx-3'>Ai</span>Assistant</p>
                </div>
                <div className={styles.signincontent}>
                    <p className={styles.signintext}>Sign In</p>
                    {
                        isForgetPassword ?
                            <>
                                <form className={styles.signinform} onSubmit={handleForgetSubmit}>
                                    <div className={styles.inputpasswordwrap}>
                                        {Array.from({ length: 4 }).map((value, index) => (
                                            <input
                                                className={styles.inputpassword}
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                value={value}
                                                ref={el => (inputRefs.current[index] = el)}
                                                onChange={(e) => handleInputChange(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                            />
                                        ))}
                                    </div>
                                    <Input
                                        name="new_password"
                                        placeholder="new password"
                                        value={forgetData.new_password}
                                        onChange={handleForgetChange}
                                    />

                                    <div className='text-center mt-5'>
                                        <button type="submit" className={styles.btnsignin}>
                                            Send
                                            <FaArrowRightLong className={styles.arrowhome} />
                                        </button>
                                    </div>
                                </form>
                            </> :
                            <>
                                <form className={styles.signinform} onSubmit={handleSubmit}>
                                    <Input
                                        name="email"
                                        placeholder="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        name="password"
                                        placeholder="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />

                                    <p className={styles.forgettext} onClick={() => setIsForgetPassword(true)}>Forget Password ?</p>
                                    <div className='text-center mt-5'>
                                        <button type="submit" className={styles.btnsignin}>
                                            sign in
                                            <FaArrowRightLong className={styles.arrowhome} />
                                        </button>
                                    </div>
                                </form>
                            </>
                    }

                </div>
            </div>
            <ToastContainer />
        </div>
    )
} 
