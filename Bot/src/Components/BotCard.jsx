// components/BotCard.jsx
import React from "react";
import PropTypes from "prop-types";
import './BotCard.css'; // Assuming you have a CSS file for styles

const BotCard = ({ bot, onClick, onDischarge, showDischarge = false }) => {
  const { avatar_url, name, catchphrase, bot_class, health, damage, armor, id } = bot;

  return (
    <div
      onClick={() => onClick(bot)}
      className="bot-card"
    >
      <img src={avatar_url} alt={name} width="100%" />
      <h3>{name}</h3>
      <p>{catchphrase}</p>
      <p>Class: {bot_class}</p>
      <p>Health: {health} | Damage: {damage} | Armor: {armor}</p>

      {showDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering onClick for select/remove
            onDischarge(id);
          }}
          className="discharge-button"
        >
          ×
        </button>
      )}
    </div>
  );
};

// PropTypes for type checking
BotCard.propTypes = {
  bot: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
    bot_class: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
    armor: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onDischarge: PropTypes.func.isRequired,
  showDischarge: PropTypes.bool,
};

export default BotCard;
