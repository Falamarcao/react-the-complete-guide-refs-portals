import { useRef, useState } from 'react';

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout>();

  const handleStart = () => {
    timerRef.current = setTimeout(() => {
      setIsTimerExpired(true);
    }, targetTime * 1000);

    setIsTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timerRef.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {isTimerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 0 ? 's' : ''}
      </p>
      <p>
        <button onClick={isTimerStarted ? handleStop : handleStart}>
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
