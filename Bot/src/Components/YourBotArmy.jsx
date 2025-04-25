// components/YourBotArmy.jsx
import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ army, onRemove, onDischarge }) => {
  return (
    <div>
      <h2>Your Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={onRemove}
            onDischarge={onDischarge}
            showDischarge={true}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
