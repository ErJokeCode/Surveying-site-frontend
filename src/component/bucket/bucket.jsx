import { useEffect, useState } from "react"
import styles from "./bucket.module.css"
import BucketItem from "../bucket-item/bucket-item"

export default function Bucket({items, setItems}) {

    return (
    <div className={styles.bucket}>
        <h2 className={styles.main_title}>Корзина</h2>
        {items.map(item => <BucketItem data={item} allItems={items} setAllItems={setItems}/>)}
    </div>
    )
}