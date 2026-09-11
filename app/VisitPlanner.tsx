"use client";
import { useState } from "react";

export default function VisitPlanner() {
  const [occasion, setOccasion] = useState("Ужин");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const message = `Здравствуйте! Планируем ${occasion.toLowerCase()} в Кайлаасе.${date ? ` Дата: ${date.split('-').reverse().join('.')}.` : ''}${guests ? ` Гостей: ${guests}.` : ''} Подскажите, пожалуйста, ${occasion === 'С собой' ? 'что можно заказать с собой, время приготовления и стоимость' : occasion === 'Банкет' ? 'свободна ли дата, варианты меню и условия банкета' : 'можно ли забронировать столик и где посмотреть меню'}?`;
  async function copy() {
    try { await navigator.clipboard.writeText(message); setCopied(true); setError(false); }
    catch { setError(true); }
  }
  return <section className="planner-section" id="plan"><div className="shell planner-grid">
    <div><p className="section-kicker">Перед встречей</p><h2>Ваш вечер<br/>начинается здесь</h2><p>Выберите повод. Подготовьте детали для короткого разговора с рестораном.</p><p className="planner-help">Впервые пробуете индийскую кухню? Расскажите официанту, насколько острое вы любите и какие продукты вам не подходят.</p></div>
    <div className="planner-card">
      <fieldset><legend>Что планируете?</legend><div className="planner-options">{['Ужин','Банкет','С собой'].map(value=><label key={value}><input type="radio" name="occasion" value={value} checked={occasion===value} onChange={()=>{setOccasion(value);setCopied(false)}}/><span>{value}</span></label>)}</div></fieldset>
      <div className="planner-fields"><label>Дата<input type="date" value={date} onInput={e=>{setDate(e.currentTarget.value);setCopied(false)}}/></label><label>Гостей<input type="number" min="1" step="1" placeholder="Например, 4" value={guests} onChange={e=>{setGuests(e.target.value);setCopied(false)}}/></label></div>
      <p className="planner-message" aria-live="polite">{message}</p>
      <div className="visit-actions"><a className="button button-primary" href="tel:+79817866060">Позвонить в Кайлаас</a><button className="button button-outline-dark" type="button" onClick={copy}>{copied?'Текст скопирован':'Скопировать детали'}</button></div>
      <p className="planner-note" role="status">{error?'Не удалось скопировать. Выделите текст выше и скопируйте вручную.':'Это подготовка к разговору. Наличие мест и бронирование подтверждает ресторан.'}</p>
    </div>
  </div></section>;
}
