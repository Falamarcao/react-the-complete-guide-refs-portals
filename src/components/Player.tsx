import { useRef, useState } from 'react';

export default function Player() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [playerName, setPlayerName] = useState<string | undefined>(undefined);

  const handleClick = (): void => {
    setPlayerName(inputRef.current!.value);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
