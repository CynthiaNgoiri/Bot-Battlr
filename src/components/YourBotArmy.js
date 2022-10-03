import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ botArmy, deleteBot, removeBotFromArmy}) {
  console.log(botArmy);
  //your bot army code here...
  const mappedBotArmy = botArmy.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        handleAdd={removeBotFromArmy}
        handleDelete={deleteBot}
      />
    );
  });
  return (
    <div className='ui segment inverted olive bot-army'>
      <div className='ui five column grid'>
        <div className='row bot-army-row'>
          {/*...and here...*/}
          Your Bot Army
          {mappedBotArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;