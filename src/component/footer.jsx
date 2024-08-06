import {Form} from "./form/form"
import styles from './form/form.module.css'

export function Footer({chooseServices, viewForm = true}) {
    return (
      <footer class="footer" id="footer">
      <div class="footer-container flex" id="#footer">
        <div class="footer__links flex">
          <nav class="footer__links__nav">
            <ul class="footer-menu list-reset flex">
              <li class="footer-menu__item">
                <a href="#about-us" class="footer-menu__item__link">
                  О&nbsp;нас
                </a>
              </li>

              <li class="footer-menu__item">
                <a href="#" class="footer-menu__item__link">
                  Проекты
                </a>
              </li>

              <li class="footer-menu__item">
                <a href="#" class="footer-menu__item__link">
                  Отзывы
                </a>
              </li>

              <li class="footer-menu__item">
                <a href="#" class="footer-menu__item__link">
                  Договор оферты
                </a>
              </li>

              <li class="footer-menu__item">
                <a href="#" class="footer-menu__item__link">
                  Договор подряда
                </a>
              </li>

              <li class="footer-menu__item">
                <a href="#" class="footer-menu__item__link">
                  Конфиденциальность
                </a>
              </li>

              <li class="footer-menu__item">
                <a href="#" class="footer-menu__item__link">
                  Партнёрское соглашение
                </a>
              </li>
            </ul>
          </nav>

          <div aria-label="Социальные сети" class="footer__links__social flex">
            <svg tabindex="0" aria-label="Вконтакте" class="footer__links__social__vk" width="60" height="60" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 0C13.432 0 0 13.4314 0 30C0 46.5686 13.432 60 30 60C46.568 60 60 46.5686 60 30C60 13.4314 46.568 0 30 0ZM45.2176 33.2446C46.6159 34.6103 48.0951 35.8957 49.3504 37.4026C49.9065 38.0692 50.4307 38.7585 50.8297 39.5337C51.3993 40.6392 50.8849 41.8515 49.8954 41.9171L43.7494 41.9159C42.162 42.0473 40.8988 41.4071 39.8339 40.3218C38.9837 39.457 38.195 38.5332 37.3762 37.6389C37.0416 37.2718 36.6893 36.9262 36.2695 36.6543C35.4316 36.1093 34.7036 36.2762 34.2236 37.1515C33.7344 38.0421 33.6227 39.0292 33.5761 40.0205C33.5092 41.4697 33.0721 41.8484 31.618 41.9165C28.5109 42.062 25.5628 41.5906 22.8227 40.0241C20.4055 38.6425 18.5346 36.6924 16.9043 34.4845C13.7297 30.1805 11.2984 25.4566 9.11386 20.597C8.6222 19.5026 8.98189 18.917 10.1893 18.8943C12.1952 18.8557 14.2011 18.8606 16.2071 18.8925C17.0234 18.9054 17.5636 19.3725 17.8772 20.1428C18.9612 22.8098 20.2901 25.3473 21.9554 27.7007C22.3992 28.3274 22.8522 28.9522 23.4973 29.3948C24.2093 29.8834 24.7519 29.7219 25.0877 28.9271C25.3025 28.4219 25.3952 27.8817 25.4418 27.3404C25.6014 25.486 25.6205 23.6323 25.3442 21.7854C25.1724 20.6296 24.5224 19.8832 23.3702 19.6647C22.7834 19.5536 22.8694 19.3363 23.1548 19.0011C23.6501 18.4217 24.1142 18.0632 25.0416 18.0632L31.9857 18.062C33.0801 18.2768 33.3256 18.7679 33.4742 19.8703L33.4803 27.5871C33.4674 28.0137 33.6945 29.2782 34.4606 29.5574C35.0744 29.76 35.4795 29.2677 35.8465 28.8792C37.5118 27.112 38.6983 25.0263 39.7608 22.8675C40.2298 21.9155 40.6343 20.9303 41.0271 19.9433C41.3193 19.2135 41.7735 18.8544 42.5972 18.8667L49.2841 18.8747C49.4811 18.8747 49.6812 18.8765 49.8764 18.9103C51.0034 19.103 51.3121 19.5879 50.9635 20.6873C50.4147 22.4145 49.3485 23.8533 48.3063 25.2958C47.1892 26.8401 45.9977 28.3304 44.8917 29.8815C43.8752 31.2994 43.9556 32.0133 45.2176 33.2446Z"
                fill="#666666" />
            </svg>
          </div>
        </div>

        {viewForm ? <Form styles={styles}></Form> : null}

        <p tabindex="0" aria-label="Описание" class={viewForm ? `footer__text`: "footer__text_without-form"}>
          Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта:
          разбавленное изрядной долей эмпатии, рациональное мышление позволяет оценить значение модели развития. Таким
          образом, консультация с&nbsp;широким активом обеспечивает широкому кругу (специалистов) участие
          в&nbsp;формировании стандартных подходов.
        </p>
      </div>
      </footer>
    )
}