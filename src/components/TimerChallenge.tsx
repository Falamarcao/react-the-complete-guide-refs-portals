import { useRef, useState } from 'react';

import ResultModal from './ResultModal';

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
    const timerRef = useRef<number>();
    const dialogRef = useRef<HTMLDialogElement>(null);

    const [remainingTime, setRemainingTime] = useState<number>(
      targetTime * 1000
    );

    const isActive = remainingTime > 0 && remainingTime < targetTime * 1000;

    if (remainingTime <= 0) {
      clearInterval(timerRef.current);
      dialogRef.current?.showModal();
    }

    const handleStart = () => {
      const timeWindow = 10; // 10 seconds
      timerRef.current = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - timeWindow);
      }, timeWindow);
    };

    const handleStop = () => {
      clearInterval(timerRef.current);
      dialogRef.current?.showModal();
    };

    const handleReset = () => {
      setRemainingTime(targetTime * 1000);
    };

    return (
      <>
        <ResultModal
          ref={dialogRef}
          targetTime={targetTime}
          remainingTime={remainingTime}
          onClose={handleReset}
        />
        <section className="challenge">
          <h2>{title}</h2>

          <p className="challenge-time">
            {targetTime} second{targetTime > 0 ? 's' : ''}
          </p>
          <p>
            <button onClick={isActive ? handleStop : handleStart}>
              {isActive ? 'Stop' : 'Start'} Challenge
            </button>
          </p>
          <p className={isActive ? 'active' : undefined}>
            {isActive ? 'Time is running...' : 'Timer inactive'}
          </p>
        </section>
      </>
    );
};

export default TimerChallenge;
