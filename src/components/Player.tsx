import { ChangeEvent, useState } from 'react';

export default function Player() {
  const [playerName, setPlayerName] = useState<string | undefined>(undefined);
  const [isSet, setIsSet] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isSet) setIsSet(false);

    setPlayerName(event.target.value);
  };

  const handleClick = (): void => {
    setIsSet(true);
  };

  return (
    <section id="player">
      <h2>Welcome {isSet ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
