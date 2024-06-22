import React from 'react'
import styles from './RecentItemM.module.css'
import { PiStarFourFill } from "react-icons/pi";
export default function RecentItemM() {
    return (
        <div className={styles.RecentItemM}>
            <div>
                <PiStarFourFill className={styles.iconitemhis} />
                <span className={styles.recentItemt}>Lorem ipsum dolor ..</span>
            </div>
            <span className={styles.recentdate}>01/02/24</span>
        </div>
    )
}
