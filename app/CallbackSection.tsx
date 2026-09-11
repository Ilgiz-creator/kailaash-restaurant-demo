import CallbackForm from './CallbackForm';
export default function CallbackSection() {
  return <section className="planner-section" id="plan"><div className="shell planner-grid">
    <div><p className="section-kicker">Перед встречей</p><h2>Ваш вечер{' '}<br/>начинается здесь</h2><p>Оставьте номер — обсудим столик, банкет или заказ с собой.</p><p className="planner-help">Впервые пробуете индийскую кухню? Расскажите, насколько острое вы любите и какие продукты вам не подходят.</p></div>
    <div className="planner-card"><CallbackForm /></div>
  </div></section>;
}
