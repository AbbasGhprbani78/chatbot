import React from 'react'
import styles from './Question.module.css'
export default function Question() {
    return (
        <div className={styles.questioncontent}>
            <div className={styles.questiontop}>
                <div className={styles.userinfo}>
                    <div className={styles.profile}>
                        <span className={styles.Abbreviation}>
                            US
                        </span>
                    </div>
                    <span className={styles.nameuser}>User</span>
                </div>
                <div className={styles.questiontime}>
                    <span className={styles.time}>15:35</span>
                    <span className={styles.date}>01/02/24</span>
                </div>
            </div>
            <div className={styles.questionwrapper}>
                <p className={styles.questiontext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores sint reprehenderit necessitatibus ipsa dignissimos obcaecati quasi eveniet. Cum voluptatem repellendus tempore. Impedit praesentium repudiandae quas minima ut architecto doloremque.
                </p>
            </div>
        </div>
    )
}
