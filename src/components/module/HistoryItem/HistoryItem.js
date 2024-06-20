import React from 'react'
import styles from './HistoryItem.module.css'
import { PiStarFourFill } from "react-icons/pi";
export default function HistoryItem() {
    return (
        <div className={styles.historyItemcontent}>
            <PiStarFourFill className={styles.iconitemhis} />
            <span className={styles.texthistoryitem}>Lorem ipsum dolor sit...</span>

        </div>
    )
}
