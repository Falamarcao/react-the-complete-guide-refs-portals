import { useState } from 'react';

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);

  const handleStart = () => {
    setTimeout(() => {
      setIsTimerExpired(true);
    }, targetTime * 1000);

    setIsTimerStarted(true);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {isTimerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 0 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {isTimerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={isTimerStarted ? 'active' : undefined}>
        {isTimerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;
