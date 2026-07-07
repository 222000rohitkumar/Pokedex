function Card({ card }) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(135deg, ${card.color}, white)`,
      }}
    >
      <div className="card-header">
        <span className="pokedex">{card.pokedex}</span>
        <span className="rarity">{card.rarity}</span>
      </div>

      <h2>{card.name}</h2>

      <div className="image">
        <img src={card.image} alt={card.name} />
      </div>

      <div className="type">
        <strong>{card.type}</strong>
      </div>

      <div className="stats">
        <p>❤️ HP: {card.hp}</p>
        <p>⚔️ Attack: {card.power}</p>
        <p>🛡️ Defense: {card.defense}</p>
        <p>✨ Sp. Attack: {card.specialAttack}</p>
        <p>⚡ Speed: {card.speed}</p>
      </div>

      <hr />

      <div className="details">
        <p>
          <strong>Ability:</strong> {card.ability}
        </p>

        <p>
          <strong>Weakness:</strong> {card.weakness}
        </p>

        <p>
          <strong>Strong Against:</strong> {card.strongAgainst}
        </p>

        <p>
          <strong>Evolution:</strong> {card.evolution}
        </p>

        <p>
          <strong>Level:</strong> {card.level}
        </p>

        <p>
          <strong>Region:</strong> {card.region}
        </p>

        <p>
          <strong>Height:</strong> {card.height}
        </p>

        <p>
          <strong>Weight:</strong> {card.weight}
        </p>
      </div>
    </div>
  );
}

export default Card;