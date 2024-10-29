interface ResultModalProps {
  result: string;
  targetTime: number;
}

const ResultModal = ({ result, targetTime }: ResultModalProps) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X secounds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>{' '}
        {/* A button inside a form method=dialog automatically closes the dialog without any JS. */}
      </form>
    </dialog>
  );
};

export default ResultModal;
