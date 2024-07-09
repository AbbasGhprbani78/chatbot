import React from 'react'
import styles from './Input.module.css'
export default function Input({ name, placeholder, value, onChange, maxlength }) {
    return (
        <div className={styles.inputwrapper}>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.inputform}
                autoComplete='off'
                maxlength={maxlength}
            />
        </div>


    )
}
