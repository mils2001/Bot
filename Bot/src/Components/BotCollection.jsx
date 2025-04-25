// components/BotCollection.jsx
import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, onAdd }) => {
  return (
    <div>
      <h2>All Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
