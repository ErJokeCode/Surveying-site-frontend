 import { Header } from "../component/header";
 import { Footer } from "../component/footer";
 import Service from "../component/service";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "../component/form/form";
import MWService from "../component/modal-window-services/modal-window-services";
 
 function Services() {
    const [services, setServices] = useState([])
    const [chooseServices, setChooseServise] = useState([])
    const [chooseId, setChooseId] = useState()
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        getServices()
    }, [])

    const getServices = async() => {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/services`);
        if(services.length == 0){
            setServices(data)
        }
    }
    console.log(chooseServices)

    const viewServices = () => {
        if(services.length == 0){
            return (
                <ul class="list-reset services__list">
                    <div className="spinner"></div>
                </ul>
            )
        }
        else {
            return (
                <ul class="list-reset services__list">
                    {services.map(s => <Service id={s.id} title={s.title} descr={s.description} image={s.icon} price={s.price}
                    setOnClickID={setChooseId} onClick={setIsOpenModal}></Service>)}
                </ul>
            )
        }
    }

    return(
        <div class="container">
            <MWService isOpen={isOpenModal} setIsOpen={setIsOpenModal}></MWService>
            <Header></Header>
            <h2 class="services__title">Услуги</h2>
            <p class="services__discr">Выберите услуги и отправьте заявку</p>
            {viewServices()}
            <Footer viewForm={false}></Footer>
        </div>
    );
 }

 export default Services