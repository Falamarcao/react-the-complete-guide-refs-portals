import { useRef, useState } from 'react';

import ResultModal from './ResultModal';

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
    const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);

    const timerRef = useRef<NodeJS.Timeout>();

    const handleStart = () => {
      timerRef.current = setTimeout(() => {
        setIsTimerExpired(true);
        dialogRef.current?.showModal();
      }, targetTime * 1000);

      setIsTimerStarted(true);
    };

    const handleStop = () => {
      clearTimeout(timerRef.current);
    };

    return (
      <>
        <ResultModal
          ref={dialogRef}
          result={isTimerExpired ? 'lost' : 'win'}
          targetTime={targetTime}
        />
        <section className="challenge">
          <h2>{title}</h2>

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
      </>
    );
};

export default TimerChallenge;
