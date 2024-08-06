import { useEffect, useState } from "react"
import styles from "./bucket.module.css"

export default function Bucket() {
    const [bucket, setBucket] = useState([])
    useEffect(() => {
        if(localStorage.getItem("bucket")){
        setBucket(JSON.parse(localStorage.getItem("bucket")))
    }
    }, [])
    return (
    <div className={styles.bucket}>
        {bucket.map()}
    </div>
    )
}