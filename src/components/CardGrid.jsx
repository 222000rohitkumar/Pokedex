import Card from "./Card";
import "./CardGrid.css";

function CardGrid({ cards }) {
  return (
    <section className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
        />
      ))}
    </section>
  );
}

export default CardGrid;