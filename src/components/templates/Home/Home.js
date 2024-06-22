
import React from 'react'
import styles from '@/style/home.module.css'
import { Col } from 'react-bootstrap'
import Image from 'next/image'
import Button1 from '@/components/module/Button/Button1'
export default function Home() {

    return (
        <div className={styles.homeconatiner}>
            <Col className={styles.homeleft} xs={12} sm={6}>
                <div className={styles.logohome}>
                    <Image
                        src="/images/logo.svg"
                        width={150}
                        height={100}
                        alt="logo"
                    />
                </div>
                <p className={styles.hometitle}>ARIIS<span className='mx-3'>Ai</span>Assistant</p>
                <p className={styles.hometext}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.
                </p>
            </Col>
            <Col className={styles.homeright} xs={12} sm={6} >
                <Button1 content={"Try Demo"} colorbutton={"trycolor"} route={"/chat"} />
                <Button1 content={"Sign In"} colorbutton={"signcolor"} route={"/signin"} />
                <Button1 content={"Contact Us"} colorbutton={"conactcolor"} route={"/contactus"} />
            </Col>
        </div>
    )
}
