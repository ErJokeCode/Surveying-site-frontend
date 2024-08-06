import * as React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
  <header class="header">
    <div class="container">
      <div class="header-container flex">
        <Link to="/" class="header__logo-link">
          <img src="./img/logo.svg" alt="Логотип Евклид" class="header__logo-link__img"></img>
        </Link>

        <nav class="header__nav">
          <div aria-label="Меню" class="hamburger-menu" tabindex="0" onclick="Menu()">
            <div class="hamburger"></div>
            <div class="hamburger"></div>
            <div class="hamburger"></div>
          </div>

          <ul aria-label="Меню" class="menu list-reset flex" id="menu">
            <li class="menu__item">
              <a href="/#about-us" class="menu__item__link">
                О&nbsp;нас
              </a>
            </li>

            <li class="menu__item">
              <a href="/#stages" class="menu__item__link">
                Этапы
              </a>
            </li>

            <li class="menu__item">
              <a href="/#questions" class="menu__item__link">
                Вопросы
              </a>
            </li>

            <li class="menu__item">
              <a href="/#footer" class="menu__item__link">
                Оставить заявку
              </a>
            </li>

            <li class="menu__item">
              <Link to="services" class="menu__item__link">
                Услуги
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
    )
}