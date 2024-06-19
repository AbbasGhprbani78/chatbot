"use client"
import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

export default function Button1({ content, colorbutton }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Link href={"#"} className={`${styles.button1} ${styles[colorbutton]} ${isVisible ? styles.visible : ''}`}>
            {content}
            <FaArrowRightLong className={styles.arrowhome} />
        </Link>
    );
}
