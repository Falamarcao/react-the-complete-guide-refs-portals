import { forwardRef, useRef, useImperativeHandle } from 'react';

interface ResultModalProps {
  targetTime: number;
  remainingTime: number;
  onClose: () => void;
}

const ResultModal = forwardRef<
  Pick<HTMLDialogElement, 'showModal'>,
  ResultModalProps
>(({ targetTime, remainingTime, onClose }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const isLost = remainingTime <= 0;
  const formatterdRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    showModal: () => {
      dialog.current?.showModal();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal" onClose={onClose}>
      <h2>You {isLost ? 'lost' : 'win'}</h2>
      {!isLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>
          {' '}
          {formatterdRemainingTime} secounds {isLost && 'left'}.
        </strong>
      </p>
      <form method="dialog">
        <button>Close</button>
        {/* A button inside a form method=dialog automatically closes the dialog without any JS. */}
      </form>
    </dialog>
  );
});

export default ResultModal;
