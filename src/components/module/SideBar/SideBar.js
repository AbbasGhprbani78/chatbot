"use client"
import React, { useState } from 'react'
import styles from './SideBar.module.css'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import HistoryItem from '../HistoryItem/HistoryItem';
import { IoIosArrowForward } from "react-icons/io";

export default function SideBar() {

    const [data, setData] = useState([
        {
            "date": "2024-06-20",
            "text": "Lorem Ipsum Dolor...",
            "id": 1
        },
        {
            "date": "2024-06-19",
            "text": "Lorem Ipsum Dolor...",
            "id": 2
        },
        {
            "date": "2024-01-01",
            "text": "Lorem Ipsum Dolor...",
            "id": 3
        },
        {
            "date": "2024-01-01",
            "text": "Lorem Ipsum Dolor...",
            "id": 4
        },
        {
            "date": "2024-01-01",
            "text": "Lorem Ipsum Dolor...",
            "id": 5
        },
        {
            "date": "2024-03-25",
            "text": "Lorem Ipsum Dolor...",
            "id": 6
        },
        {
            "date": "2024-03-13",
            "text": "Lorem Ipsum Dolor...",
            "id": 7
        },
        {
            "date": "2024-03-13",
            "text": "Lorem Ipsum Dolor...",
            "id": 8
        }
    ]);

    const formatDateLabel = (dateStr) => {
        const date = new Date(dateStr);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const isToday = date.toDateString() === today.toDateString();
        const isYesterday = date.toDateString() === yesterday.toDateString();

        if (isToday) return 'Today';
        if (isYesterday) return 'Yesterday';
        return dateStr;
    };

    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.date]) {
            acc[item.date] = [];
        }
        acc[item.date].push(item);
        return acc;
    }, {});


    return (
        <div className={styles.SideBarcontainer}>
            <div className={styles.sidebarcontent}>
                <div className={styles.sidebartop}>
                    <img className={styles.logosidebar} src="/images/logo.svg" alt="logo" />
                    <p className={styles.hometitle}>ARIIS<span className='mx-2'>Ai</span>Assistant</p>
                    <p className={styles.sidebartext}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.
                    </p>
                    <div className={styles.btnchatwrap}>
                        <button className={styles.chatbtn}>
                            new chat
                            <HiOutlineChatBubbleLeftRight className={styles.chaticon} />
                        </button>
                    </div>
                </div>
                <div className={styles.historywrapper}>
                    <p className={styles.historytext}>
                        Recently Search
                        <IoIosArrowForward className={styles.arrowicon} />
                    </p>
                    <div className={styles.historycontent}>

                        {Object.keys(groupedData).map(date => (
                            <div key={date}>
                                <p className={styles.datahistory}>{formatDateLabel(date)}</p>
                                {groupedData[date].map(item => (
                                    <HistoryItem />
                                ))}
                            </div>
                        ))}
                        {/* // <HistoryItem />
                    
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem />
                        // <HistoryItem /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
