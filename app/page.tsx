import Motion from "./Motion";
import CallbackSection from "./CallbackSection";
const mapUrl = "https://yandex.com.ge/maps/org/kaylaas/229005420861/";
const phoneHref = "tel:+79817866060";

const formats = [
  {
    number: "01",
    title: "Ужин",
    text: "Для неспешной встречи вдвоём, с семьёй или друзьями. Столик можно забронировать по телефону.",
  },
  {
    number: "02",
    title: "Банкет",
    text: "Семейный праздник или встреча большой компанией. Обсудите с рестораном дату, число гостей и банкетное меню.",
  },
  {
    number: "03",
    title: "С собой",
    text: "Индийская кухня дома: еда навынос и доставка. Перед заказом уточните состав блюд, время приготовления и условия доставки.",
  },
];

const schedule = [
  ["Пн — Чт", "12:00 — 23:00"],
  ["Пт — Сб", "12:00 — 01:00"],
  ["Вс", "12:00 — 23:00"],
];

export default function Home() {
  return (
    <main>
      <Motion />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true" />
        <header className="site-header shell">
          <a className="wordmark" href="#top" aria-label="Кайлаас — наверх">
            <span className="wordmark-mark">К</span>
            <span>Кайлаас</span>
          </a>
          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#formats">Форматы</a>
            <a href="#atmosphere">О ресторане</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <a className="header-phone" href={phoneHref} aria-label="Позвонить в Кайлаас: +7 981 786-60-60">
            +7 981 786-60-60
          </a>
        </header>

        <div className="hero-content shell" id="top">
          <p className="eyebrow">Индийская кухня · банкетный зал</p>
          <h1 id="hero-title">Петербургский вечер с теплом Индии</h1>
          <p className="hero-copy">
            Кайлаас — ресторан на Народной улице для ужинов, семейных встреч и
            праздников.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#plan">
              Заказать звонок
            </a>
            <a
              className="button button-ghost"
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Открыть на карте
            </a>
          </div>
        </div>

        <p className="art-caption shell">Иллюстрация концепта, не фотография блюд или интерьера ресторана</p>
        <div className="hero-facts shell" aria-label="Кратко о ресторане">
          <p><strong>4,9</strong><span>Яндекс · 11.09.2026</span></p>
          <p><strong>102</strong><span>оценки гостей</span></p>
          <p><strong>12:00</strong><span>открываемся ежедневно</span></p>
        </div>
      </section>

      <section className="intro-section" id="atmosphere">
        <div className="shell intro-grid">
          <p className="section-kicker">О Кайлаасе</p>
          <div className="intro-copy">
            <h2>Знакомство с индийской кухней начинается спокойно</h2>
            <p>
              В отзывах гости особенно часто отмечают кухню, атмосферу и музыку.
              Посетители также рассказывают, что команда помогает сориентироваться
              в блюдах и выбрать подходящий вкус.
            </p>
          </div>
        </div>
        <div className="spice-line" aria-hidden="true">
          <span>अतिथि</span><span>тепло</span><span>вкус</span><span>музыка</span>
        </div>
      </section>

      <section className="formats-section" id="formats">
        <div className="shell">
          <div className="section-heading">
            <p className="section-kicker">Выберите повод</p>
            <h2>Один адрес — разные вечера</h2>
          </div>
          <div className="formats-grid">
            {formats.map((format) => (
              <article className="format-card" key={format.number}>
                <p className="format-number">{format.number}</p>
                <h3>{format.title}</h3>
                <p>{format.text}</p>
                <a href="#plan">{format.title === 'С собой' ? 'Уточнить заказ с собой' : `Обсудить ${format.title.toLowerCase()}`}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-section" aria-labelledby="review-heading">
        <div className="shell review-grid">
          <div className="review-symbol" aria-hidden="true">क</div>
          <div>
            <p className="section-kicker">По темам отзывов в Яндексе</p>
            <h2 id="review-heading">
              Атмосфера, индийская кухня и музыка — то, что гости замечают чаще всего.
            </h2>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              Читать отзывы на Яндекс Картах
            </a>
          </div>
        </div>
      </section>

      <CallbackSection />
      <section className="visit-section" id="contacts">
        <div className="shell visit-grid">
          <div className="visit-copy">
            <p className="section-kicker">Спланируйте визит</p>
            <h2>Столик на Народной</h2>
            <p className="address">Санкт-Петербург, Народная ул., 87Б</p>
            <div className="visit-actions">
              <a className="button button-primary" href={phoneHref}>
                +7 981 786-60-60
              </a>
              <a
                className="button button-outline-dark"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Построить маршрут
              </a>
            </div>
          </div>
          <div className="schedule-card">
            <p className="schedule-title">Часы работы</p>
            <dl>
              {schedule.map(([days, hours]) => (
                <div key={days}>
                  <dt>{days}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="schedule-note">
              Перед визитом в праздничный день уточните график по телефону.
            </p>
          </div>
        </div>
      </section>

      <section className="location-section shell" aria-label="Кайлаас на Яндекс Карте"><div className="map-title"><h2>Народная, 87Б</h2><a href={mapUrl} target="_blank" rel="noreferrer">Маршрут в Яндекс Картах ↗</a></div><iframe title="Яндекс Карта: ресторан Кайлаас" src="https://yandex.ru/map-widget/v1/?ol=biz&oid=229005420861&z=16" width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><p className="planner-note">Если карта не загрузилась, откройте маршрут по ссылке выше.</p></section>
      <footer>
        <div className="shell footer-grid">
          <a className="wordmark footer-wordmark" href="#top">
            <span className="wordmark-mark">К</span>
            <span>Кайлаас</span>
          </a>
          <p>Индийский ресторан и банкетный зал</p>
          <p className="concept-note">
            Неофициальный демонстрационный концепт. Данные проверены 11.09.2026.
          </p>
        </div>
      </footer>
    </main>
  );
}
