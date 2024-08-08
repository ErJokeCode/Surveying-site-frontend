import { useState } from "react";

export default function Service({title, descr, image, price, id, chooseServices, setChooseServise, setOnClickID, onClick, setBucket}) {
    const chooseItem = () => {
        if(!localStorage.getItem("bucket")){
            localStorage.setItem("bucket", JSON.stringify([{id, title, descr, price}]))
        }
        var bk = JSON.parse(localStorage.getItem("bucket"));

        if(!bk.find(el => el.id === id && el.title === title)){
            bk.push({id, title, descr, price})
            localStorage.setItem("bucket", JSON.stringify(bk))
        }
        setBucket(JSON.parse(localStorage.getItem("bucket")))
    }

    return(
        <li id={id} tabindex="0" class={`services__item ${image ? null : "services__item_without_img"}`} onClick={(m) => {chooseItem(); onClick(true)}}>
            {image ? <img src={image} alt="icon" class="service__img"/> : null}

            <h3 class="services__item__title">
                {title}
            </h3>

            <p aria-label="Описание" class="services__item__descr">
                {descr}
            </p>

            <p aria-label="Цена" class="services__item__price">
                {price}₽
            </p>
        </li>
    );
}