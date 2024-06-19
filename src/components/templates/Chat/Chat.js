"use client"
import React, { useState } from 'react'
import styles from '@/style/chat.module.css'
import SideBar from '@/components/module/SideBar/SideBar'
import { IoSend } from "react-icons/io5";
import Question from '@/components/module/Question/Question';
import { LuRefreshCw } from "react-icons/lu";
export default function Chat() {

    const [isEmpty, setIsEmpty] = useState(false);

    return (
        <div className={styles.chatcontainer}>
            <SideBar />
            <div className={styles.chatcontent}>
                <div className={styles.questionwrapper}>
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
                <div className={`${styles.answerswrapper} ${styles.answerswrapperfill}`}>
                    {
                        isEmpty ?
                            <div className={styles.emptychat}>
                                <p className={styles.textemptychat}>How Can I Assist You Today?</p>
                                <img className={styles.imgemptychat} src="/images/chatimage.gif" alt="chatimage" />
                            </div> :
                            null
                    }
                    <div className={styles.messagetop}>
                        <p className={styles.messagetitle}>Answer</p>
                        <button className={styles.refreshbtn}>
                            <LuRefreshCw className={styles.refreshicon} />
                        </button>
                    </div>

                    <div className={styles.messagebottom}>
                        <div className={styles.answerlogotext}>
                            <div className={styles.answerlogo}>
                                <img src="/images/logoab.png" alt="logo" />
                            </div>
                            <span style={styles.answertitle}>Ariis Assistant</span>
                        </div>
                        <p className={styles.answertext}>
                        </p>
                    </div>
                </div>
                <div className={styles.messagewrapper}>
                    <input
                        type="text"
                        className={styles.inputmessage}
                        placeholder='Message'
                    />
                    <IoSend className={styles.iconsend} />
                </div>
            </div>
        </div>
    )
}

