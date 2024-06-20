import React from 'react'
import styles from './Answer.module.css'
export default function Answer() {
    return (

        <div className={styles.messagebottom}>
            <div className={styles.answerlogotext}>
                <div className={styles.answerlogo}>
                    <img src="/images/logoab.png" alt="logo" />
                </div>
                <span className={styles.answertitle}>Ariis Assistant</span>
            </div>
            <p className={styles.answertext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aliquam reiciendis, modi voluptate eius similique at hic quo ab nemo aperiam. Doloremque tempora iste illo consequuntur reiciendis aliquam alias placeat adipisci ullam. Recusandae aliquam laborum ipsum possimus consequatur, deleniti exercitationem iusto ducimus officia consectetur animi pariatur eaque fugit est provident beatae asperiores fugiat voluptas facilis? Culpa fuga dolorem quia odio asperiores similique iusto ducimus, neque quas velit qui at vitae soluta rem assumenda eveniet distinctio nihil doloribus! Adipisci harum ipsum minus eius asperiores maiores natus provident. Delectus voluptas voluptate temporibus consequuntur aliquam, adipisci sapiente veniam sit, aspernatur minima eius quae.
            </p>
        </div>
    )
}
