import { Link } from "react-router-dom";

export function Body() {
    return (
        <main class="main">
    <div class="container">
      <div class="main-container">
        <section tabindex="0" class="hero" id="hero">
          <h2 class="hero__title">
            Кадастровые работы любой сложности
          </h2>

          <p class="hero__descr">
            Хотите быть уверенными в точных границах своего земельного участка? Мы предлагаем профессиональные услуги межевания земельных участков
          </p>

          <Link class="btn-reset hero__btn" to="services">
            Заказать межевание
          </Link>
        </section>

        <section tabindex="0" class="about-us" id="about-us">
          <h2 class="about-us__title">
            О&nbsp;нас
          </h2>

          <p aria-label="Описание" class="about-us__descr">
          Предоставляем услуги в области кадастровых работ, которые включают в себя: подготовку межевых, технических планов, актов обследования, схем, планов и прочего. Сотрудничаем с физическими и с юридическими лицами, выполняем заказы в городе Камышлове и Камышловском районе.
У нас работают опытные кадастровые инженеры, имеющие действующие квалификационные аттестаты и свидетельства о вступлении в Саморегулируемую организацию (СРО). 
Применяем высокоточное и современное GPS-оборудование в удобное для Вас время. Надежность и качество предоставляемых услуг позволяет нам участвовать в исполнении муниципальных контрактов.
          </p>

          <div class="about-us__achieves flex">
            <div tabindex="0" class="big-card-achieve">
              <div class="big-card-achieve__info flex">
                <p class="big-card-achieve__info__text">
                  Принимая во&nbsp;внимание показатели успешности, перспективное планирование способствует подготовке
                  и&nbsp;реализации новых принципов
                </p>

                <button class="btn-reset big-card-achieve__info__btn" type="button">
                  Подробнее
                </button>
              </div>
            </div>

            <ul aria-label="О нас" class="list-reset cards-achieve">
              <li tabindex="0" class="cards-achieve__item cards-achieve__item_box">
                <h3 class="cards-achieve__item__title">
                  Консультация с&nbsp;широким активом
                </h3>

                <p aria-label="Описание" class="cards-achieve__item__descr">
                  А&nbsp;также свежий взгляд на&nbsp;привычные вещи&nbsp;— безусловно открывает новые горизонты
                  для&nbsp;как&nbsp;самодостаточных, так&nbsp;и&nbsp;внешне зависимых концептуальных решений
                </p>
              </li>

              <li tabindex="0" class="cards-achieve__item cards-achieve__item_setting">
                <h3 class="cards-achieve__item__title">
                  В&nbsp;своём стремлении повысить
                </h3>

                <p aria-label="Описание" class="cards-achieve__item__descr">
                  Качество жизни, они&nbsp;забывают, что&nbsp;сплочённость команды профессионалов представляет собой
                  интересный эксперимент проверки прогресса профессионального сообщества
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section tabindex="0" class="stages" id="stages">
          <h2 class="stages__title">
            Этапы
          </h2>

          <div class="stages__info flex">
            <div class="stages__info__descr">
              <h3 class="stages__info__descr__title">
                Проводим консультацию
              </h3>

              <p aria-label="Описание" class="stages__info__descr__text">
                Влечёт за&nbsp;собой процесс внедрения и&nbsp;модернизации приоритизации разума над&nbsp;эмоциями.
                В&nbsp;рамках спецификации современных стандартов, некоторые особенности внутренней политики будут
                объективно рассмотрены соответствующими инстанциями. А&nbsp;также представители современных
                социальных
                резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь
                всего лишь частью общей картины, реплицированные с&nbsp;зарубежных источников, современные исследования
                подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное
                производство,
                нанотехнологии освещают чрезвычайно интересные особенности картины в&nbsp;целом, однако конкретные
                выводы,
                разумеется, призваны к&nbsp;ответу.
              </p>

              <div class="stages__info__descr__btns flex">
                <button class="btn-reset stages__info__descr__btns__more" type="button">
                  Подробнее
                </button>

                <button class="btn-reset stages__info__descr__btns__contract" type="button">
                  Договор
                </button>
              </div>
            </div>

            <div class="stages__image"></div>
          </div>
        </section>

        <section tabindex="0" class="questions" id="questions">
          <h2 class="questions__title">
            Вопросы
          </h2>

          <ul aria-label="Вопросы" class="list-reset questions__list flex">
            <li tabindex="0" class="questions__list__item">
              <h3 class="questions__list__item__title">
                Из&nbsp;чего формируется конечная&nbsp;стоимость проекта?
              </h3>

              <p aria-label="Описание" class="questions__list__item__text">
                Приятно, граждане, наблюдать, как&nbsp;некоторые особенности внутренней политики могут быть призваны
                к&nbsp;ответу.
              </p>
            </li>

            <li tabindex="0" class="questions__list__item">
              <h3 class="questions__list__item__title">
                У&nbsp;меня есть&nbsp;свой проект. Можно&nbsp;ли его&nbsp;реализовать?
              </h3>

              <p aria-label="Описание" class="questions__list__item__text">
                А&nbsp;ещё&nbsp;некоторые особенности внутренней политики, которые представляют собой яркий пример
                континентального типа.
              </p>
            </li>

            <li tabindex="0" class="questions__list__item">
              <h3 class="questions__list__item__title">
                Я&nbsp;выбираю между&nbsp;разными компаниями. Почему вы?
              </h3>

              <p aria-label="Описание" class="questions__list__item__text">
                Явные признаки победы институционализации набирают популярность среди определённых слоёв населения.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
    )
}