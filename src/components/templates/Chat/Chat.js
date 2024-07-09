"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/style/chat.module.css'
import SideBar from '@/components/module/SideBar/SideBar'
import { IoSend } from "react-icons/io5";
import Question from '@/components/module/Question/Question';
import { LuRefreshCw } from "react-icons/lu";
import Answer from '@/components/module/Answer/Answer';
import { TbMessageDots } from "react-icons/tb";
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosArrowForward } from "react-icons/io";
import RecentItemM from '@/components/module/RecentItemM/RecentItemM';
import { FaArrowLeftLong } from "react-icons/fa6";
export default function Chat() {

    const [isEmpty, setIsEmpty] = useState(false);
    const [windoWidth, setWindowWidth] = useState(window.innerWidth)
    const [isShowChat, setIsShowChat] = useState(false)


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
        <>
            {
                windoWidth > 992 ?
                    <>
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
                                            <>
                                                <div className={styles.messagetop}>
                                                    <p className={styles.messagetitle}>Answer</p>
                                                    <button className={styles.refreshbtn}>
                                                        <LuRefreshCw className={styles.refreshicon} />
                                                    </button>
                                                </div>
                                                <div className={styles.answerscontent}>
                                                    <Answer />
                                                    <Answer />
                                                    <Answer />
                                                    <Answer />
                                                    <Answer />
                                                    <Answer />
                                                </div>
                                            </>
                                    }

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
                    </> :
                    <>
                        <div className={` ${isShowChat ? styles.chatcontainerMshow : styles.chatcontainerM}`}>
                            <div className={styles.headerchat}>
                                <FaArrowLeftLong
                                    className={`${isShowChat ? styles.iconbackactive : styles.iconback}`}
                                    onClick={() => setIsShowChat(false)}
                                />
                                <img className={styles.logoheader} src="/images/logo.svg" alt="logo" />
                            </div>
                            {
                                isShowChat ?
                                    <>
                                        {
                                            isEmpty ?
                                                <>
                                                    <div className={styles.emptychat}>
                                                        <p className={styles.textemptychat}>How Can I Assist You Today?</p>
                                                        <img className={styles.imgemptychat} src="/images/chatimage.gif" alt="chatimage" />
                                                    </div>

                                                </> :
                                                <>
                                                    <div>
                                                        <div className={styles.questionwrapper}>
                                                            <Question />
                                                            <Question />
                                                            <Question />
                                                            <Question />
                                                        </div>
                                                        <div className={styles.answerswrapperm}>
                                                            <div className={styles.messagetop}>
                                                                <p className={styles.messagetitle}>Answer</p>
                                                                <button className={styles.refreshbtn}>
                                                                    <LuRefreshCw className={styles.refreshicon} />
                                                                </button>
                                                            </div>
                                                            <div className={styles.answerscontent}>
                                                                <Answer />
                                                                <Answer />
                                                                <Answer />
                                                                <Answer />
                                                                <Answer />
                                                                <Answer />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                        }
                                        <div className={styles.inputmwrapper}>
                                            <input placeholder='Message' className={styles.inputmchat} type="text" />
                                            <IoSend className={styles.iconsend} />
                                        </div>
                                    </> :
                                    <>
                                        <div className={styles.startchatwrapper}>
                                            <TbMessageDots className={styles.iconstartchat} />
                                            <button className={styles.btnstartchat} onClick={() => setIsShowChat(true)}>
                                                Get Started
                                                <FaArrowRightLong className={styles.arrowhome} />
                                            </button>
                                        </div>
                                        <div className={styles.recentchatMwrapprt}>
                                            <p className={styles.historytext}>
                                                Recently Search
                                                <IoIosArrowForward className={styles.arrowicon} />
                                            </p>
                                            <div className={styles.recentchatMcontainer}>
                                                <RecentItemM />
                                                <RecentItemM />
                                                <RecentItemM />
                                                <RecentItemM />
                                                <RecentItemM />
                                                <RecentItemM />
                                                <RecentItemM />
                                                <RecentItemM />
                                                <RecentItemM />
                                            </div>
                                        </div>
                                    </>
                            }

                        </div>
                    </>
            }
        </>


    )
}

