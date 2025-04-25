// components/BotSpecs.jsx
import React from "react";

const BotSpecs = ({ bot, onBack, onEnlist }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Bot Details</h2>
      <img src={bot.avatar_url} alt={bot.name} width="200" />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>

      <div style={{ marginTop: "15px" }}>
        <button onClick={onBack} style={{ marginRight: "10px" }}>⬅ Back</button>
        <button onClick={() => onEnlist(bot)}>➕ Enlist</button>
      </div>
    </div>
  );
};

export default BotSpecs;
