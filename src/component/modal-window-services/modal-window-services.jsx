import { useState } from "react"
import { Form } from "../form/form"
import styles from '../form/whiteForm.module.css'
import stylesMW from "./modal-window-services.module.css"
import Bucket from "../bucket/bucket"

function MWService({isOpen, setIsOpen, bucket, setBucket}) {
    console.log(bucket)
    return (
        <div class={`mwservice ${isOpen?null:"mwservice_clouse"}`}>
            <svg className={stylesMW.cross} version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={(e) => {setIsOpen(false)}}>
                <line className={stylesMW.line} x1="1" y1="20"
                x2="20" y2="1"
                stroke-width="3"/>
                <line className={stylesMW.line} x1="1" y1="1"
                x2="20" y2="20"
                stroke-width="3"/>
            </svg>
            <Bucket items={bucket} setItems={setBucket}></Bucket>
            <Form chooseServices={bucket} styles={styles}></Form>
        </div>
    )
}

export default MWService