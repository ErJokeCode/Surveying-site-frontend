import { useState } from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export function Form({chooseServices, styles}) {
  const [trySend, setTrySend] = useState("off")
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [comment, setComment] = useState('')
  const sendTo = async() => {
    try{
      if(trySend === "on"){
        const titleServices = chooseServices ? chooseServices.map(el => el.title) : []
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
          name: name,
          phone: number,
          address: address, 
          comment: comment, 
          services: titleServices})
        setName('')
        setNumber('')
        setAddress('')
        setComment('')
        toast.success("Успешно отправлено", { autoClose: 5000 });
        toast.info("Ожидайте сообщение в WhatsApp", { autoClose: false });
      }
      else{
        toast.warning("Подтвердите согласие на использование персональных данных", { autoClose: 5000 });
      }
    }catch{
      toast.error("Ошибка при вводе данных", { autoClose: 5000 });
    }
  }

  return (
    <div tabindex="0" className={`${styles.application} flex`}>
      <h2 className={styles.title}>
        Оставить заявку
      </h2>

      <input type="text" className={styles.input} placeholder="Фамилия, имя и отчество*" value={name} onChange={(e) => { setName(e.target.value) }}></input>

      <input type="number" className={styles.input} placeholder="Номер телефона" value={number} onChange={(e) => { setNumber(e.target.value) }}></input>

      <input type="text" className={styles.input} placeholder="Адрес объект" value={address} onChange={(e) => { setAddress(e.target.value) }}></input>

      <textarea name="message" className={`${styles.input} ${styles.input_message}`} placeholder="Комментарий" value={comment} onChange={(e) => { setComment(e.target.value) }}></textarea>

      <div className={`${styles.send} flex`}>
        <button className={`btn-reset ${styles.send_btn}`} onClick={sendTo} >
          Отправить данные
        </button>

        <label className={`${styles.send_checkbox} flex`} onChange={(e) => { setTrySend(trySend === "off"? "on":"off") }} >
          <input type="checkbox" className={`${styles.send_checkbox__input}`} id="send-checkbox__input" value={trySend}></input>
          <span>Согласен на обработку данных</span>
        </label>
      </div>
      <ToastContainer />
    </div>
  )
}