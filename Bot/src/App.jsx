// App.jsx
import React, { useEffect, useState } from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";
import BotSpecs from "./Components/BotSpecs";

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // Fetch bots on mount
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then(setBots)
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  // Add bot to army (only once)
  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Remove bot from army
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Discharge (delete from backend + frontend)
  const dischargeBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== botId));
        setArmy(army.filter((b) => b.id !== botId));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  };


return (
  <div className="App">
    <h1>🤖 Bot Army</h1>
    <YourBotArmy army={army} onRemove={removeFromArmy} onDischarge={dischargeBot} />

    {selectedBot ? (
      <BotSpecs
        bot={selectedBot}
        onBack={() => setSelectedBot(null)}
        onEnlist={addToArmy}
      />
    ) : (
      <BotCollection bots={bots} onAdd={(bot) => setSelectedBot(bot)} />
    )}
  </div>
)
};

export default App;

